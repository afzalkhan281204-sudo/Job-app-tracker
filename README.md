# Job Application Tracker — Next.js + Prisma Starter

Quick local starter for a Job Application Tracker using Next.js (app router) + TypeScript + Prisma.

Prereqs
- Node.js 18+ (recommended)
- npm or yarn
- (Optional) npx to run create-next-app, but this repo already scaffolded

Local setup
1. Install dependencies:
   npm install

2. Copy env:
   cp .env.example .env

3. Generate Prisma client and run the first migration (will create SQLite db dev.db):
   npx prisma generate
   npx prisma migrate dev --name init

4. Run dev server:
   npm run dev

Open http://localhost:3000

Notes
- This starter uses SQLite for convenience. For production, change `datasource db.provider` to "postgresql" and set `DATABASE_URL` to your Postgres connection string.
- No authentication included yet — add NextAuth or a custom auth flow and scope resources to users.
- To inspect DB: `npx prisma studio`.

Next steps I can implement for you
- Add authentication (NextAuth + Prisma adapter) and protect API routes
- File uploads with S3 signed URLs and attachments endpoints
- Background worker using Redis + BullMQ for reminders
- Tests, Tailwind + component library, and CI/CD to Vercel