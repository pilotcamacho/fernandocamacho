import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'book' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function BookPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('book');

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-text-primary">{t('bookTitle')}</h2>
          <p className="mt-1 text-sm text-text-muted">Fernando Camacho Ospina</p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
            <p>{t('synopsis1')}</p>
            <p>{t('synopsis2')}</p>
            <p>{t('synopsis3')}</p>
          </div>

          {/* TODO: replace href with the actual Kindle/Amazon URL */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {t('viewOnKindle')}
            </a>
          </div>
        </Card>

        <Card>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
            {t('aboutAuthor')}
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">{t('authorBio')}</p>
        </Card>
      </div>
    </main>
  );
}
