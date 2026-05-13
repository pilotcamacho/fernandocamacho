import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fernando Camacho — PhD Data Scientist · Engineer · Author',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center py-24 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary-900 dark:text-primary-200">
          Fernando Camacho
        </h1>
        <p className="mt-3 text-xl text-primary-600 dark:text-primary-400">
          PhD · Data Scientist · Engineer · Author
        </p>
        <p className="mt-10 text-sm text-text-muted">Portal en construcción — Phase 1</p>
      </div>
    </main>
  );
}
