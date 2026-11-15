import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import {
  DEFAULT_REMIND_BEFORE_MIN,
  formatDurationShort,
  isDone,
  msUntilReset,
  nextReset,
  toMillis,
} from '../src/lib/reset.js'

export function findDueGames(games, now = new Date()) {
  return games
    .filter((game) => {
      if (!game.remindersEnabled || isDone(game, now)) return false
      const leadMin = game.remindBeforeMin ?? DEFAULT_REMIND_BEFORE_MIN
      const withinWindow = msUntilReset(game, now) <= leadMin * 60_000
      const targetResetMs = nextReset(game, now).getTime()
      const alreadySent = toMillis(game.lastRemindedFor) === targetResetMs
      return withinWindow && !alreadySent
    })
    .sort((a, b) => msUntilReset(a, now) - msUntilReset(b, now))
}

export function formatDiscordMessage(dueGames, now = new Date()) {
  const lines = dueGames.map((game) => {
    const serverPart = game.server ? ` (${game.server})` : ''
    const left = formatDurationShort(msUntilReset(game, now))
    return `• **${game.name}**${serverPart} — resets in **${left}**`
  })
  return `⏰ **Daily reset approaching — not done yet:**\n${lines.join('\n')}`
}

async function postToDiscord(webhookUrl, content) {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Discord webhook failed (${res.status}): ${body}`)
  }
}

function parseArgs(argv) {
  const args = { dryRun: false, fixture: null, now: null }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--dry-run') args.dryRun = true
    else if (arg === '--fixture') args.fixture = argv[++i]
    else if (arg === '--now') args.now = argv[++i]
  }
  return args
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const now = args.now ? new Date(args.now) : new Date()

  if (args.fixture) {
    const raw = JSON.parse(readFileSync(args.fixture, 'utf8'))
    const due = findDueGames(raw, now)
    console.log(`[fixture] Evaluated ${raw.length} games at ${now.toISOString()}: ${due.length} due.`)
    if (due.length > 0) {
      console.log(formatDiscordMessage(due, now))
    }
    return
  }

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT
  const ownerUid = process.env.OWNER_UID
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!serviceAccountJson || !ownerUid) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT or OWNER_UID environment variable.')
  }
  if (!args.dryRun && !webhookUrl) {
    throw new Error('Missing DISCORD_WEBHOOK_URL environment variable.')
  }

  const app = initializeApp({ credential: cert(JSON.parse(serviceAccountJson)) })
  const db = getFirestore(app)
  const snap = await db.collection(`users/${ownerUid}/games`).get()

  const entries = snap.docs.map((docSnap) => ({
    ref: docSnap.ref,
    data: { id: docSnap.id, ...docSnap.data() },
  }))

  const dueData = findDueGames(
    entries.map((e) => e.data),
    now,
  )

  if (dueData.length === 0) {
    console.log(`Checked ${entries.length} games at ${now.toISOString()}: no reminders due.`)
    return
  }

  const message = formatDiscordMessage(dueData, now)
  if (args.dryRun) {
    console.log('[dry-run] Would send Discord reminder:')
    console.log(message)
    return
  }

  await postToDiscord(webhookUrl, message)

  const entryById = new Map(entries.map((e) => [e.data.id, e]))
  await Promise.all(
    dueData.map((game) =>
      entryById.get(game.id).ref.update({
        lastRemindedFor: Timestamp.fromDate(nextReset(game, now)),
      }),
    ),
  )

  console.log(`Sent reminder for ${dueData.length} game(s): ${dueData.map((g) => g.name).join(', ')}`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
