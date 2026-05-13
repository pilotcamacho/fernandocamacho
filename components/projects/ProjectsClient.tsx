'use client';
import { useState } from 'react';
import type { ProjectItem } from '@/lib/data/projects';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils/cn';

type Decade = 'Todos' | '2020s' | '2010s' | '2000s' | '1990s';

const DECADES: Decade[] = ['Todos', '2020s', '2010s', '2000s', '1990s'];

function matchesDecade(date: string, decade: Decade): boolean {
  if (decade === 'Todos') return true;
  const year = parseInt(date, 10);
  if (decade === '2020s') return year >= 2020;
  if (decade === '2010s') return year >= 2010 && year < 2020;
  if (decade === '2000s') return year >= 2000 && year < 2010;
  if (decade === '1990s') return year >= 1990 && year < 2000;
  return true;
}

interface ProjectsClientProps {
  projects: ProjectItem[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [active, setActive] = useState<Decade>('Todos');
  const filtered = projects.filter((p) => matchesDecade(p.date, active));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {DECADES.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              d === active
                ? 'bg-primary-600 text-white'
                : 'bg-surface border border-border text-text-secondary hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.id}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-text-primary leading-snug">
                {project.title}
              </h3>
              <span className="shrink-0 text-xs text-text-muted font-mono mt-0.5">
                {project.date}
              </span>
            </div>
            <p className="mt-1 text-xs text-primary-600 dark:text-primary-400 font-medium">
              {project.company}
            </p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-4">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} label={tag} variant="default" />
              ))}
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-sm text-text-muted">
        {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''}
        {active !== 'Todos' ? ` — ${active}` : ' en total'}
      </p>
    </div>
  );
}
