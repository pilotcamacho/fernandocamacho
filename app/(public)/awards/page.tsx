import type { Metadata } from 'next';
import { awards } from '@/lib/data/awards';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Premios y Becas — Fernando Camacho',
  description: 'Reconocimientos nacionales e internacionales en innovación y academia',
};

export default function AwardsPage() {
  const sorted = [...awards].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Premios y Becas"
          subtitle="Reconocimientos nacionales e internacionales"
        />

        <div className="space-y-5">
          {sorted.map((award) => (
            <Card key={award.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-text-primary">{award.name}</h2>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {award.issuer}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm font-semibold text-text-muted">
                  {award.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {award.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
