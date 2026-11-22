$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$csc = 'C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe'
if (-not (Test-Path $csc)) {
  throw "Could not find C# compiler at $csc"
}

$outDir = Join-Path $root 'dist-watcher'
New-Item -ItemType Directory -Force $outDir | Out-Null

$src = Join-Path $PSScriptRoot 'watcher-tray\GachaWatcher.cs'
$icon = Join-Path $PSScriptRoot 'watcher-tray\watcher.ico'
$outExe = Join-Path $outDir 'GachaWatcher.exe'

& $csc `
  /nologo `
  /target:winexe `
  /optimize+ `
  /win32icon:$icon `
  /reference:System.Windows.Forms.dll `
  /reference:System.Drawing.dll `
  /reference:System.Web.Extensions.dll `
  /out:$outExe `
  $src

if ($LASTEXITCODE -ne 0) {
  throw "csc.exe failed with exit code $LASTEXITCODE"
}

$sizeKb = [math]::Round((Get-Item $outExe).Length / 1KB, 1)
Write-Host "Built $outExe ($sizeKb KB)"
