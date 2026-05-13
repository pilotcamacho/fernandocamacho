import type { Metadata } from 'next';
import { experience } from '@/lib/data/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Experiencia — Fernando Camacho',
  description: '25+ años en EdTech, salud, consultoría y tecnología',
};

export default function ExperiencePage() {
  const sorted = [...experience].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Experiencia"
          subtitle="25+ años en EdTech, salud, consultoría y tecnología"
        />

        <div className="space-y-6">
          {sorted.map((exp) => (
            <Card key={exp.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-text-primary">{exp.role}</h2>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {exp.company}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">{exp.location}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-text-muted">
                  {exp.startDate} — {exp.endDate ?? 'Presente'}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {exp.description}
              </p>

              {exp.achievements.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {ach}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
