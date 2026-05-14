import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectsClient } from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Proyectos — Fernando Camacho',
  description: '20+ proyectos desde 1991 hasta el presente en EdTech, salud, tecnología e innovación',
};

type Props = { params: Promise<{ locale: string }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Proyectos"
          subtitle="20+ proyectos desde 1991 hasta el presente"
        />
        <ProjectsClient projects={sorted} />
      </div>
    </main>
  );
}
