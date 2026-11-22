using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Net;
using System.Text;
using System.Threading;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using Microsoft.Win32;

namespace GachaWatcher
{
    internal sealed class ProcessEntry
    {
        public string process { get; set; }
        public string title { get; set; }
        public long runningMs { get; set; }
    }

    internal sealed class TrayApp : ApplicationContext
    {
        private const int Port = 41937;
        private const int PollIntervalMs = 5000;
        private const string TrackerUrl = "https://pradipash.github.io/gchMonitoring/";
        private const string StartupRegPath = @"Software\Microsoft\Windows\CurrentVersion\Run";
        private const string StartupValueName = "GachaResetWatcher";

        private static readonly HashSet<string> AllowedOrigins = new HashSet<string>(StringComparer.Ordinal)
        {
            "https://pradipash.github.io",
            "http://localhost:5173",
            "http://localhost:4173",
            "http://127.0.0.1:5173",
            "http://127.0.0.1:4173"
        };

        private readonly NotifyIcon _trayIcon;
        private readonly ToolStripMenuItem _statusItem;
        private readonly ToolStripMenuItem _startupItem;
        private readonly HttpListener _listener;
        private readonly System.Windows.Forms.Timer _pollTimer;
        private readonly Dictionary<string, long> _firstSeenByKey = new Dictionary<string, long>();
        private readonly object _stateLock = new object();
        private readonly JavaScriptSerializer _json = new JavaScriptSerializer { MaxJsonLength = 4 * 1024 * 1024 };

        private List<ProcessEntry> _latestEntries = new List<ProcessEntry>();
        private volatile bool _stopping;

        public TrayApp()
        {
            _statusItem = new ToolStripMenuItem("Starting watcher...") { Enabled = false };
            _startupItem = new ToolStripMenuItem("Run on Windows startup")
            {
                Checked = IsStartupEnabled(),
                CheckOnClick = false
            };
            _startupItem.Click += OnToggleStartup;

            var openItem = new ToolStripMenuItem("Open Gacha Reset Tracker");
            openItem.Click += (s, e) => OpenTracker();

            var exitItem = new ToolStripMenuItem("Exit");
            exitItem.Click += (s, e) => ExitGracefully();

            var menu = new ContextMenuStrip();
            menu.Items.Add(_statusItem);
            menu.Items.Add(new ToolStripSeparator());
            menu.Items.Add(openItem);
            menu.Items.Add(_startupItem);
            menu.Items.Add(new ToolStripSeparator());
            menu.Items.Add(exitItem);

            Icon icon = Icon.ExtractAssociatedIcon(Application.ExecutablePath) ?? SystemIcons.Application;
            _trayIcon = new NotifyIcon
            {
                Icon = icon,
                Text = "Gacha Reset Watcher (127.0.0.1:" + Port + ")",
                ContextMenuStrip = menu,
                Visible = true
            };
            _trayIcon.DoubleClick += (s, e) => OpenTracker();

            _listener = new HttpListener();
            _listener.Prefixes.Add("http://127.0.0.1:" + Port + "/");
            _listener.Start();
            ThreadPool.QueueUserWorkItem(_ => AcceptLoop());

            RefreshProcesses();
            _pollTimer = new System.Windows.Forms.Timer { Interval = PollIntervalMs };
            _pollTimer.Tick += (s, e) => RefreshProcesses();
            _pollTimer.Start();
        }

        private static long NowMs()
        {
            return DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        }

        private void RefreshProcesses()
        {
            long now = NowMs();
            var seen = new Dictionary<string, KeyValuePair<string, string>>();

            Process[] processes = Process.GetProcesses();
            foreach (Process p in processes)
            {
                try
                {
                    string name = (p.ProcessName ?? string.Empty).Trim();
                    if (name.Length == 0) continue;

                    string title = string.Empty;
                    try
                    {
                        title = (p.MainWindowTitle ?? string.Empty).Trim();
                    }
                    catch
                    {
                        // Protected/system processes may deny MainWindowTitle
                    }

                    string key = name.ToLowerInvariant() + "::" + title.ToLowerInvariant();
                    if (!seen.ContainsKey(key))
                    {
                        seen[key] = new KeyValuePair<string, string>(name, title);
                    }
                }
                catch
                {
                    // Process exited during enumeration
                }
                finally
                {
                    p.Dispose();
                }
            }

            var toRemove = new List<string>();
            foreach (string existingKey in _firstSeenByKey.Keys)
            {
                if (!seen.ContainsKey(existingKey))
                {
                    toRemove.Add(existingKey);
                }
            }
            foreach (string k in toRemove)
            {
                _firstSeenByKey.Remove(k);
            }

            var entries = new List<ProcessEntry>(seen.Count);
            foreach (var kv in seen)
            {
                long firstSeen;
                if (!_firstSeenByKey.TryGetValue(kv.Key, out firstSeen))
                {
                    firstSeen = now;
                    _firstSeenByKey[kv.Key] = firstSeen;
                }

                entries.Add(new ProcessEntry
                {
                    process = kv.Value.Key,
                    title = kv.Value.Value,
                    runningMs = Math.Max(0, now - firstSeen)
                });
            }

            lock (_stateLock)
            {
                _latestEntries = entries;
            }

            _statusItem.Text = "Listening 127.0.0.1:" + Port + " (" + entries.Count + " processes)";
        }

        private void AcceptLoop()
        {
            while (!_stopping && _listener.IsListening)
            {
                try
                {
                    HttpListenerContext ctx = _listener.GetContext();
                    ThreadPool.QueueUserWorkItem(_ => HandleRequest(ctx));
                }
                catch (HttpListenerException)
                {
                    break;
                }
                catch (ObjectDisposedException)
                {
                    break;
                }
            }
        }

        private void HandleRequest(HttpListenerContext ctx)
        {
            HttpListenerRequest req = ctx.Request;
            HttpListenerResponse res = ctx.Response;

            try
            {
                string origin = req.Headers["Origin"];
                if (!string.IsNullOrEmpty(origin))
                {
                    if (!AllowedOrigins.Contains(origin))
                    {
                        WriteJson(res, 403, "{\"ok\":false,\"error\":\"Origin not allowed\"}");
                        return;
                    }
                    res.Headers["Access-Control-Allow-Origin"] = origin;
                    res.Headers["Vary"] = "Origin";
                }

                string pna = req.Headers["Access-Control-Request-Private-Network"];
                if (string.Equals(pna, "true", StringComparison.OrdinalIgnoreCase) || !string.IsNullOrEmpty(origin))
                {
                    res.Headers["Access-Control-Allow-Private-Network"] = "true";
                }
                res.Headers["Access-Control-Allow-Methods"] = "GET, OPTIONS";
                res.Headers["Access-Control-Allow-Headers"] = "Content-Type";

                if (string.Equals(req.HttpMethod, "OPTIONS", StringComparison.OrdinalIgnoreCase))
                {
                    res.StatusCode = 204;
                    res.Close();
                    return;
                }

                string path = req.Url != null ? req.Url.AbsolutePath : "/";
                if (string.Equals(req.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(path, "/status", StringComparison.Ordinal))
                {
                    List<ProcessEntry> snapshot;
                    lock (_stateLock)
                    {
                        snapshot = new List<ProcessEntry>(_latestEntries);
                    }

                    string payload = _json.Serialize(new
                    {
                        ok = true,
                        now = NowMs(),
                        entries = snapshot
                    });
                    res.Headers["Cache-Control"] = "no-store";
                    WriteJson(res, 200, payload);
                    return;
                }

                WriteJson(res, 404, "{\"ok\":false,\"error\":\"Not found\"}");
            }
            catch
            {
                try { res.Abort(); } catch { }
            }
        }

        private static void WriteJson(HttpListenerResponse res, int statusCode, string json)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(json);
            res.StatusCode = statusCode;
            res.ContentType = "application/json; charset=utf-8";
            res.ContentLength64 = bytes.Length;
            res.OutputStream.Write(bytes, 0, bytes.Length);
            res.Close();
        }

        private static bool IsStartupEnabled()
        {
            using (RegistryKey key = Registry.CurrentUser.OpenSubKey(StartupRegPath, false))
            {
                return key != null && key.GetValue(StartupValueName) != null;
            }
        }

        private void OnToggleStartup(object sender, EventArgs e)
        {
            try
            {
                using (RegistryKey key = Registry.CurrentUser.OpenSubKey(StartupRegPath, true)
                    ?? Registry.CurrentUser.CreateSubKey(StartupRegPath))
                {
                    if (_startupItem.Checked)
                    {
                        key.DeleteValue(StartupValueName, false);
                        _startupItem.Checked = false;
                    }
                    else
                    {
                        key.SetValue(StartupValueName, "\"" + Application.ExecutablePath + "\"");
                        _startupItem.Checked = true;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Could not update startup setting: " + ex.Message,
                    "Gacha Reset Watcher",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Warning);
            }
        }

        private static void OpenTracker()
        {
            try
            {
                Process.Start(new ProcessStartInfo(TrackerUrl) { UseShellExecute = true });
            }
            catch
            {
                // Ignore if browser launch fails
            }
        }

        private void ExitGracefully()
        {
            _stopping = true;
            _pollTimer.Stop();
            _pollTimer.Dispose();
            try { _listener.Stop(); } catch { }
            try { _listener.Close(); } catch { }
            _trayIcon.Visible = false;
            _trayIcon.Dispose();
            ExitThread();
        }
    }

    internal static class Program
    {
        [STAThread]
        private static void Main()
        {
            bool createdNew;
            using (var mutex = new Mutex(true, @"Local\GachaResetWatcherMutex", out createdNew))
            {
                if (!createdNew)
                {
                    MessageBox.Show(
                        "Gacha Reset Watcher is already running in your system tray.",
                        "Gacha Reset Watcher",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Information);
                    return;
                }

                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                try
                {
                    Application.Run(new TrayApp());
                }
                catch (Exception ex)
                {
                    MessageBox.Show(
                        "Failed to start watcher on 127.0.0.1:41937.\n\n" + ex.Message,
                        "Gacha Reset Watcher",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Error);
                }
            }
        }
    }
}
