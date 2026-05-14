import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getProjects } from '@/lib/data/projects';
import type { Locale } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectsClient } from '@/components/projects/ProjectsClient';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  const sorted = [...getProjects(locale as Locale)].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />
        <ProjectsClient projects={sorted} />
      </div>
    </main>
  );
}
