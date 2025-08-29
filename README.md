## Next.js 14 + TypeScript + Tailwind CSS + Prisma + NextAuth

Project skeleton with pages router, Prisma, and NextAuth.

### Quickstart

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env and edit values:
   ```bash
   cp .env.example .env
   ```
3. Initialize Prisma (SQLite by default):
   ```bash
   npm run prisma:migrate
   ```
4. Generate Prisma Client:
   ```bash
   npm run prisma:generate
   ```
5. Start dev server:
   ```bash
   npm run dev
   ```

### Notes
- Uses `pages` router (`pages/`) for routes and API.
- Auth route at `pages/api/auth/[...nextauth].ts`.
- Update `providers` in `lib/auth.ts` or add more providers as needed.
  - GitHub provider activates automatically if `GITHUB_ID` and `GITHUB_SECRET` are set.
  - Otherwise, use the Credentials provider with any email to demo sign-in.

# andrea-40-audios
andrea-40-audios
