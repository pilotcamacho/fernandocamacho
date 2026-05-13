'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';

export function AdminHeader() {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace('/admin/login');
  }

  return (
    <header className="border-b border-border bg-surface px-6 h-12 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3 text-sm">
        <Link
          href="/"
          className="text-text-muted hover:text-primary-600 transition-colors text-xs"
        >
          ← Portal
        </Link>
        <span className="text-border-strong">|</span>
        <span className="font-semibold text-text-primary">Administración</span>
      </div>
      <button
        onClick={handleSignOut}
        className="text-xs text-text-muted hover:text-red-500 transition-colors"
      >
        Cerrar sesión
      </button>
    </header>
  );
}
