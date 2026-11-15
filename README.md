# Gacha Reset Tracker (`gchMonitoring`)

Track daily gacha server resets across PC and Android, with real-time cloud sync, offline support, and Discord reminders when a reset is approaching.

Live app: <https://pradipash.github.io/gchMonitoring/>

## Features

- **Server-timezone reset math**: Countdown and daily completion are calculated from each game's server reset time + fixed UTC offset and `lastDoneAt` timestamp. Games automatically reset after each reset boundary with no background timers or open tabs required.
- **Cross-device sync + offline PWA**: Installable on PC (Chrome/Edge) and Android (*Add to Home Screen*), backed by Firebase Auth (Google sign-in) and Firestore offline cache.
- **In-app game editor**: Add, edit, or delete games, change server reset time/timezone, customize icons, and configure per-game reminder lead time.
- **Custom ordering & sorting**: Drag games by their handle to reorder (synced across devices), or switch to **Soonest reset** to see uncompleted games due soonest first.
- **Theme toggle**: Follows your OS light/dark preference by default, with a manual System / Light / Dark override per device.
- **Discord reminders**: A GitHub Actions cron job checks every 10 minutes and sends one grouped Discord message per reset window for games you haven't finished yet.

## First-Time Setup

### 1. Firebase Authentication & Firestore Rules

1. Open [Firebase Console](https://console.firebase.google.com/) → project `gch-monitoring`.
2. **Authentication → Sign-in method**: enable **Google**.
3. **Authentication → Settings → Authorized domains**: add `pradipash.github.io` (and `localhost` if not already listed).
4. **Firestore Database → Rules**: publish the contents of [`firestore.rules`](./firestore.rules) (or run `npx firebase-tools deploy --only firestore:rules`).

### 2. Discord Reminders (GitHub Actions)

1. In your Discord server: **Server Settings → Integrations → Webhooks → New Webhook** → copy the webhook URL.
2. In Firebase Console: **Project Settings → Service accounts → Generate new private key** → download the JSON file.
3. Sign in to the app once, open the **Account** menu (top right), and copy **Your UID**.
4. In your GitHub repo: **Settings → Secrets and variables → Actions**, add:
   - `FIREBASE_SERVICE_ACCOUNT`: full JSON from step 2
   - `DISCORD_WEBHOOK_URL`: webhook URL from step 1
   - `OWNER_UID`: your UID from step 3

You can test immediately from the **Actions** tab → **Daily Reset Reminders** → **Run workflow**.

## Local Development

```sh
npm install
npm run dev       # Start dev server
npm test          # Run unit tests (Vitest)
npm run lint      # Lint with ESLint
npm run build     # Production build + PWA service worker
npm run deploy    # Build and publish to GitHub Pages
```

Test the reminder selection logic locally without Firebase or Discord:

```sh
node scripts/remind.mjs --fixture scripts/fixtures/games.json --now 2026-11-15T08:30:00Z
```

## Installing as an App (PWA)

- **Android (Chrome)**: Open the site → menu (`⋮`) → **Add to Home screen** / **Install app**.
- **PC (Chrome / Edge)**: Click the **Install** icon in the address bar.
