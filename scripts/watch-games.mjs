import { execFile } from 'node:child_process'
import { readFileSync } from 'node:fs'
import http from 'node:http'
import { pathToFileURL } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

export const DEFAULT_PORT = 41937
export const POLL_INTERVAL_MS = 5000

const ALLOWED_ORIGINS = new Set([
  'https://pradipash.github.io',
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:4173',
])

const PS_SCRIPT =
  "$ErrorActionPreference='SilentlyContinue'; Get-Process | Where-Object { $_.ProcessName } | Select-Object ProcessName, MainWindowTitle | ConvertTo-Json -Compress"

function entryKey(processName, title) {
  return `${processName.toLowerCase()}::${title.toLowerCase()}`
}

/**
 * Update active process/window tracker map and return entries with continuous `runningMs`.
 */
export function updateTrackedEntries(trackerMap, rawProcesses, nowMs = Date.now()) {
  const seen = new Map()
  for (const item of rawProcesses ?? []) {
    const processName = String(item?.ProcessName ?? item?.process ?? '').trim()
    if (!processName) continue
    const title = String(item?.MainWindowTitle ?? item?.title ?? '').trim()
    const key = entryKey(processName, title)
    if (!seen.has(key)) {
      seen.set(key, { process: processName, title })
    }
  }

  for (const existingKey of trackerMap.keys()) {
    if (!seen.has(existingKey)) {
      trackerMap.delete(existingKey)
    }
  }

  const entries = []
  for (const [key, info] of seen.entries()) {
    let firstSeenAt = trackerMap.get(key)
    if (firstSeenAt === undefined) {
      firstSeenAt = nowMs
      trackerMap.set(key, firstSeenAt)
    }
    entries.push({
      process: info.process,
      title: info.title,
      runningMs: Math.max(0, nowMs - firstSeenAt),
    })
  }

  return entries
}

async function pollWindowsProcesses() {
  const { stdout } = await execFileAsync(
    'powershell.exe',
    ['-NoProfile', '-NonInteractive', '-Command', PS_SCRIPT],
    { timeout: 4000, windowsHide: true, maxBuffer: 4 * 1024 * 1024 },
  )
  const trimmed = stdout.trim()
  if (!trimmed) return []
  const parsed = JSON.parse(trimmed)
  return Array.isArray(parsed) ? parsed : [parsed]
}

function readMockEntries(mockPath) {
  const parsed = JSON.parse(readFileSync(mockPath, 'utf8'))
  const list = Array.isArray(parsed) ? parsed : (parsed?.entries ?? [])
  return list.map((item) => ({
    process: String(item.process ?? item.ProcessName ?? ''),
    title: String(item.title ?? item.MainWindowTitle ?? ''),
    runningMs: Number(item.runningMs ?? 0),
  }))
}

function parseArgs(argv) {
  const args = { port: DEFAULT_PORT, mock: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--port') args.port = Number(argv[++i]) || DEFAULT_PORT
    else if (argv[i] === '--mock') args.mock = argv[++i]
  }
  return args
}

function applyCorsHeaders(req, res) {
  const origin = req.headers.origin
  if (origin) {
    if (!ALLOWED_ORIGINS.has(origin)) {
      return false
    }
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  if (req.headers['access-control-request-private-network'] === 'true' || origin) {
    res.setHeader('Access-Control-Allow-Private-Network', 'true')
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  return true
}

function startServer() {
  const args = parseArgs(process.argv.slice(2))
  const trackerMap = new Map()
  let latestEntries = []

  async function refresh() {
    const nowMs = Date.now()
    if (args.mock) {
      latestEntries = readMockEntries(args.mock)
      return
    }
    try {
      const raw = await pollWindowsProcesses()
      latestEntries = updateTrackedEntries(trackerMap, raw, nowMs)
    } catch (err) {
      console.error('[watch-games] Failed to poll processes:', err.message)
    }
  }

  refresh()
  const timer = setInterval(refresh, POLL_INTERVAL_MS)

  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? '/', `http://127.0.0.1:${args.port}`)
    if (!applyCorsHeaders(req, res)) {
      res.writeHead(403, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: false, error: 'Origin not allowed' }))
      return
    }

    if (req.method === 'OPTIONS') {
      res.writeHead(204)
      res.end()
      return
    }

    if (req.method === 'GET' && url.pathname === '/status') {
      const entries = args.mock ? readMockEntries(args.mock) : latestEntries
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      })
      res.end(JSON.stringify({ ok: true, now: Date.now(), entries }))
      return
    }

    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ ok: false, error: 'Not found' }))
  })

  server.listen(args.port, '127.0.0.1', () => {
    const modeLabel = args.mock ? `mock (${args.mock})` : 'Windows process watcher'
    console.log(`[watch-games] Listening on http://127.0.0.1:${args.port}/status [${modeLabel}]`)
  })

  const shutdown = () => {
    clearInterval(timer)
    server.close(() => process.exit(0))
  }
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer()
}
