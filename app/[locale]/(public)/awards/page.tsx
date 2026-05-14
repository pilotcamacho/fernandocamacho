import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAwards } from '@/lib/data/awards';
import type { Locale } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'awards' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function AwardsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('awards');

  const sorted = [...getAwards(locale as Locale)].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

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
