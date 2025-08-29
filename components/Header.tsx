import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">Starter</Link>
        <nav className="flex items-center gap-3">
          {status === 'loading' ? (
            <span className="text-sm text-gray-500">Loading...</span>
          ) : session ? (
            <>
              <span className="text-sm">{session.user?.email}</span>
              <button className="rounded bg-gray-900 px-3 py-1 text-white" onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button className="rounded bg-gray-900 px-3 py-1 text-white" onClick={() => signIn()}>Sign in</button>
          )}
        </nav>
      </div>
    </header>
  );
}

