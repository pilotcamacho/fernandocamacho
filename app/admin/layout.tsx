import { RequireAuth } from '@/components/auth/RequireAuth';
import { AdminHeader } from '@/components/layout/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="flex min-h-screen flex-col bg-surface-muted">
        <AdminHeader />
        {children}
      </div>
    </RequireAuth>
  );
}
