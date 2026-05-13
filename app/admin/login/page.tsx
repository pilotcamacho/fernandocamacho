import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Admin — Iniciar sesión',
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-muted px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-white p-8 shadow-elevated">
          <h1 className="text-xl font-bold text-text-primary mb-6">Acceso administrador</h1>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
