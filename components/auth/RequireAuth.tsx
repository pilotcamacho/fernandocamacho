'use client';

import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(() => setReady(true))
      .catch(() => router.replace('/admin/login'));
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
