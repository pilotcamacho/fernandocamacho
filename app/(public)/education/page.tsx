import type { Metadata } from 'next';
import { education } from '@/lib/data/education';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Educación — Fernando Camacho',
  description: 'PhD, Maestría, Ingeniería y más en tres continentes',
};

export default function EducationPage() {
  const sorted = [...education].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Educación"
          subtitle="PhD, Maestría, Ingeniería y más en tres continentes"
        />

        <div className="space-y-5">
          {sorted.map((edu) => (
            <Card key={edu.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-text-primary">{edu.degree}</h2>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">{edu.location}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-text-muted">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>

              {edu.field && (
                <p className="mt-2 text-sm text-text-secondary">{edu.field}</p>
              )}

              {edu.thesis && (
                <p className="mt-3 border-l-2 border-primary-200 pl-3 text-xs italic text-text-muted dark:border-primary-800">
                  Tesis: {edu.thesis}
                </p>
              )}

              {edu.note && (
                <p className="mt-2 text-xs font-semibold text-primary-600 dark:text-primary-400">
                  ★ {edu.note}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
