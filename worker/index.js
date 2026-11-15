import { findDueGames, formatDiscordMessage } from '../src/lib/remind.js'
import { nextReset } from '../src/lib/reset.js'

const FIRESTORE_SCOPE = 'https://www.googleapis.com/auth/datastore'
const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token'

function encodeBase64Url(input) {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : new Uint8Array(input)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

export function pemToArrayBuffer(pem) {
  const b64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s+/g, '')
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}

function decodeFirestoreValue(value) {
  if (!value || typeof value !== 'object') return null
  if ('nullValue' in value) return null
  if ('booleanValue' in value) return Boolean(value.booleanValue)
  if ('integerValue' in value) return Number(value.integerValue)
  if ('doubleValue' in value) return Number(value.doubleValue)
  if ('stringValue' in value) return value.stringValue
  if ('timestampValue' in value) return value.timestampValue
  return null
}

export function fromFirestoreDoc(doc) {
  const id = doc.name.split('/').pop()
  const result = { id, _docName: doc.name }
  for (const [key, val] of Object.entries(doc.fields ?? {})) {
    result[key] = decodeFirestoreValue(val)
  }
  return result
}

async function getGoogleAccessToken(serviceAccount) {
  const iat = Math.floor(Date.now() / 1000)
  const header = encodeBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claimSet = encodeBase64Url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: FIRESTORE_SCOPE,
      aud: TOKEN_ENDPOINT,
      iat,
      exp: iat + 3600,
    }),
  )
  const unsigned = `${header}.${claimSet}`

  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(serviceAccount.private_key),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(unsigned),
  )
  const assertion = `${unsigned}.${encodeBase64Url(signature)}`

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })
  if (!res.ok) {
    throw new Error(`Google OAuth token exchange failed (${res.status}): ${await res.text()}`)
  }
  const data = await res.json()
  return data.access_token
}

async function fetchGames(projectId, ownerUid, accessToken) {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${ownerUid}/games?pageSize=100`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) {
    throw new Error(`Firestore list failed (${res.status}): ${await res.text()}`)
  }
  const data = await res.json()
  return (data.documents ?? []).map(fromFirestoreDoc)
}

async function markReminded(docName, targetResetDate, accessToken) {
  const url = `https://firestore.googleapis.com/v1/${docName}?updateMask.fieldPaths=lastRemindedFor`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        lastRemindedFor: { timestampValue: targetResetDate.toISOString() },
      },
    }),
  })
  if (!res.ok) {
    throw new Error(`Firestore update failed (${res.status}): ${await res.text()}`)
  }
}

async function postToDiscord(webhookUrl, content) {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })
  if (!res.ok) {
    throw new Error(`Discord webhook failed (${res.status}): ${await res.text()}`)
  }
}

export async function runReminderCheck(env, now = new Date()) {
  if (!env.FIREBASE_SERVICE_ACCOUNT || !env.OWNER_UID || !env.DISCORD_WEBHOOK_URL) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT, OWNER_UID, or DISCORD_WEBHOOK_URL secret.')
  }

  const serviceAccount = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT)
  const accessToken = await getGoogleAccessToken(serviceAccount)
  const games = await fetchGames(serviceAccount.project_id, env.OWNER_UID, accessToken)
  const due = findDueGames(games, now)

  if (due.length === 0) {
    console.log(`Checked ${games.length} game(s) at ${now.toISOString()}: none due.`)
    return { checked: games.length, reminded: [] }
  }

  const message = formatDiscordMessage(due, now)
  await postToDiscord(env.DISCORD_WEBHOOK_URL, message)
  await Promise.all(
    due.map((game) => markReminded(game._docName, nextReset(game, now), accessToken)),
  )

  console.log(`Reminded ${due.length} game(s): ${due.map((g) => g.name).join(', ')}`)
  return { checked: games.length, reminded: due.map((g) => g.id) }
}

export default {
  async scheduled(_controller, env) {
    await runReminderCheck(env, new Date())
  },
  async fetch() {
    return new Response('Not found', { status: 404 })
  },
}
