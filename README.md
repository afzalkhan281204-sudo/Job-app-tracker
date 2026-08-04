# Job Application Tracker — Next.js + Prisma Starter

Job Application Tracker using Next.js (app router) + TypeScript + Prisma.

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


