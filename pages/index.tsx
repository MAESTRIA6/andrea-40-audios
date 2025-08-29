import Head from 'next/head';
import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next.js 14 Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="mx-auto max-w-2xl p-6">
        <h1 className="text-3xl font-bold">Next.js 14 + TS + Tailwind + Prisma + NextAuth</h1>
        <p className="mt-4 text-gray-700">Project skeleton is ready.</p>
      </main>
    </>
  );
}

