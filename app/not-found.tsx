import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="text-sm font-semibold text-primary-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-text-primary">Página no encontrada</h1>
      <p className="mt-3 text-text-muted">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
