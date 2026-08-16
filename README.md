# Ganpati Chanda Manager

Production-oriented, mobile-first Next.js app for Ganpati Mandal chanda collection, server-verified receipts, Supabase Auth/PostgreSQL/RLS, expense and withdrawal controls, immutable ledger, public transparency, and reports.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apply `supabase/schema.sql` and optional `supabase/seed.sql` in Supabase SQL editor/CLI.

## Required environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
PAYMENT_PROVIDER=development
PAYMENT_KEY_ID=
PAYMENT_KEY_SECRET=
PAYMENT_WEBHOOK_SECRET=dev-webhook-secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Only `NEXT_PUBLIC_*` values may be used in browser code. Payment secrets are server-only and used by API route handlers/payment services.

## Security architecture

- Supabase Auth handles sessions; admin pages are designed for server-side authorization and database RLS.
- `supabase/schema.sql` enables RLS and mandal isolation policies.
- Payments use `services/payment.ts` abstraction with create, verify, webhook, and refund methods.
- Development adapter is clearly marked mock mode and must not be represented as real money.
- Webhook route validates signatures, is idempotent, and returns actions for donation verification, receipt creation, ledger entry, and audit log.
- Financial records should be reversed/cancelled with audit logs, not permanently deleted.

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```
