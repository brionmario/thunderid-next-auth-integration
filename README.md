# ThunderID + Next.js Auth.js Sample

A Next.js sample app demonstrating authentication with [ThunderID](https://thunderid.dev) using [Auth.js](https://authjs.dev) (next-auth v5).

## What it does

- Sign in with ThunderID via OAuth
- Protected `/profile` route showing the authenticated user's name, email, and avatar
- Middleware-based route protection with redirect to sign-in

## Stack

- Next.js 16
- next-auth 5 (beta)
- React 19
- Tailwind CSS 4

## Setup

1. [Get ThunderID](https://thunderid.dev/docs/next/guides/getting-started/get-thunderid/) and [register an application](https://thunderid.dev/docs/next/guides/getting-started/register-an-application/) using the **Next.js app** template.

2. Copy `.env.example` to `.env` and fill in your ThunderID credentials:

```bash
cp .env.example .env
```

```env
AUTH_THUNDERID_ID=<your_thunderid_client_id>
AUTH_THUNDERID_SECRET=<your_thunderid_client_secret>
AUTH_THUNDERID_ISSUER=<your_thunderid_issuer_url>
AUTH_SECRET=<your_auth_secret>
```

Generate `AUTH_SECRET` with:

```bash
npx auth secret
# or
openssl rand -hex 32
```

3. Install dependencies:

```bash
pnpm install
```

4. Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
auth.ts                         # Auth.js config with ThunderID provider
proxy.ts                        # Middleware: redirects unauthenticated users from /profile
app/
  page.tsx                      # Home — sign-in button, redirects to /profile if authenticated
  profile/page.tsx              # Protected profile page with sign-out
  api/auth/[...nextauth]/       # Auth.js API route handler
```
