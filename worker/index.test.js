import { generateKeyPairSync } from 'node:crypto'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fromFirestoreDoc, runReminderCheck } from './index.js'

describe('Cloudflare Worker reminder', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('decodes Firestore REST documents cleanly', () => {
    const parsed = fromFirestoreDoc({
      name: 'projects/p/databases/(default)/documents/users/u1/games/ak',
      fields: {
        name: { stringValue: 'Arknights' },
        server: { stringValue: 'EN' },
        resetHour: { integerValue: '4' },
        resetMinute: { integerValue: '0' },
        utcOffsetMin: { integerValue: '-420' },
        remindBeforeMin: { integerValue: '120' },
        remindersEnabled: { booleanValue: true },
        lastDoneAt: { nullValue: null },
        lastRemindedFor: { timestampValue: '2026-11-14T11:00:00Z' },
      },
    })

    expect(parsed).toMatchObject({
      id: 'ak',
      name: 'Arknights',
      server: 'EN',
      resetHour: 4,
      resetMinute: 0,
      utcOffsetMin: -420,
      remindBeforeMin: 120,
      remindersEnabled: true,
      lastDoneAt: null,
      lastRemindedFor: '2026-11-14T11:00:00Z',
    })
  })

  it('exchanges JWT, selects due games, posts to Discord, and patches lastRemindedFor', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' })

    const fetchMock = vi.fn(async (url) => {
      if (url === 'https://oauth2.googleapis.com/token') {
        return new Response(JSON.stringify({ access_token: 'tok-123' }), { status: 200 })
      }
      if (url.includes('/users/uid-1/games')) {
        return new Response(
          JSON.stringify({
            documents: [
              {
                name: 'projects/proj-1/databases/(default)/documents/users/uid-1/games/ak',
                fields: {
                  name: { stringValue: 'Arknights' },
                  server: { stringValue: 'EN' },
                  resetHour: { integerValue: '4' },
                  resetMinute: { integerValue: '0' },
                  utcOffsetMin: { integerValue: '-420' }, // 11:00 UTC
                  remindBeforeMin: { integerValue: '120' },
                  remindersEnabled: { booleanValue: true },
                  lastDoneAt: { nullValue: null },
                  lastRemindedFor: { nullValue: null },
                },
              },
            ],
          }),
          { status: 200 },
        )
      }
      if (url === 'https://discord.example/webhook') {
        return new Response(null, { status: 204 })
      }
      if (url.includes('updateMask.fieldPaths=lastRemindedFor')) {
        return new Response(JSON.stringify({}), { status: 200 })
      }
      throw new Error(`Unexpected fetch: ${url}`)
    })
    vi.stubGlobal('fetch', fetchMock)

    const env = {
      FIREBASE_SERVICE_ACCOUNT: JSON.stringify({
        project_id: 'proj-1',
        client_email: 'bot@proj-1.iam.gserviceaccount.com',
        private_key: pem,
      }),
      OWNER_UID: 'uid-1',
      DISCORD_WEBHOOK_URL: 'https://discord.example/webhook',
    }

    const result = await runReminderCheck(env, new Date('2026-11-15T09:30:00Z'))
    expect(result).toEqual({ checked: 1, reminded: ['ak'] })

    const discordCall = fetchMock.mock.calls.find(([u]) => u === 'https://discord.example/webhook')
    expect(JSON.parse(discordCall[1].body).content).toContain('**Arknights** (EN) — resets in **1h 30m**')

    const patchCall = fetchMock.mock.calls.find(([u]) => u.includes('updateMask.fieldPaths=lastRemindedFor'))
    expect(JSON.parse(patchCall[1].body)).toEqual({
      fields: {
        lastRemindedFor: { timestampValue: '2026-11-15T11:00:00.000Z' },
      },
    })
  })
})
