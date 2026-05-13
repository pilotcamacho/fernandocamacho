'use client';

import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn({ username: email, password });
      router.replace('/admin');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="input-base"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="input-base"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={cn(
          'w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors',
          'hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {loading ? 'Iniciando sesión…' : 'Iniciar sesión'}
      </button>
    </form>
  );
}
