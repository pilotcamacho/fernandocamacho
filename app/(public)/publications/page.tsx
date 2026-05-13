import type { Metadata } from 'next';
import { publications } from '@/lib/data/publications';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Publicaciones — Fernando Camacho',
  description: 'Artículos académicos y presentaciones internacionales en bioingeniería e innovación',
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Publicaciones"
          subtitle="Artículos académicos y presentaciones internacionales"
        />

        <div className="space-y-5">
          {sorted.map((pub, i) => (
            <Card key={pub.id}>
              <div className="flex gap-4">
                <span className="mt-0.5 shrink-0 select-none text-2xl font-bold text-primary-100 dark:text-primary-900">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <p className="mb-1.5 text-xs text-text-muted">{pub.authors}</p>
                  <h2 className="text-base font-semibold leading-snug text-text-primary">
                    {pub.title}
                  </h2>
                  <p className="mt-1.5 text-sm italic text-text-secondary">{pub.venue}</p>
                  <div className="mt-2.5 flex items-center gap-3">
                    <span className="text-xs font-medium text-text-muted">{pub.year}</span>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-600 hover:underline dark:text-primary-400"
                      >
                        DOI →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
