import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary">Página no encontrada</h1>
        <p className="mt-4 text-text-muted">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
        >
          Ir al inicio
        </Link>
      </div>
    </main>
  );
}
