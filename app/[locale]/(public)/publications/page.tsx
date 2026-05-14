import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPublications } from '@/lib/data/publications';
import type { Locale } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'publications' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('publications');

  const sorted = [...getPublications(locale as Locale)].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

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
                  <div className="mt-2.5 flex flex-wrap items-center gap-3">
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
                    {pub.pdfPath && (
                      <a
                        href={pub.pdfPath}
                        download
                        className="inline-flex items-center gap-1 text-xs text-primary-600 hover:underline dark:text-primary-400"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {t('downloadPdf')}
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
