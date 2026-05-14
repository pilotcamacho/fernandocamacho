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

  const themes = [
    t('theme1'), t('theme2'), t('theme3'),
    t('theme4'), t('theme5'), t('theme6'),
  ];

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        {/* Synopsis */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold text-text-primary">{t('bookTitle')}</h2>
          <p className="mt-1 text-sm text-text-muted">Fernando Camacho Ospina · 2026</p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
            <p>{t('synopsis1')}</p>
            <p>{t('synopsis2')}</p>
            <p>{t('synopsis3')}</p>
          </div>

          {/* Pull quote from the preface */}
          <blockquote className="mt-6 border-l-4 border-primary-300 dark:border-primary-700 pl-4">
            <p className="text-sm italic leading-relaxed text-text-secondary">{t('keyQuote')}</p>
            <cite className="mt-2 block text-xs text-text-muted not-italic">{t('keyQuoteAttrib')}</cite>
          </blockquote>

          <div className="mt-8">
            {/* TODO: replace href with the actual Kindle URL once published */}
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

        {/* Six-element model */}
        <Card className="mb-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            {t('themesTitle')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {themes.map((theme, i) => (
              <span
                key={i}
                className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300"
              >
                {theme}
              </span>
            ))}
          </div>
        </Card>

        {/* Two-part structure */}
        <Card className="mb-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            {t('structureTitle')}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <h3 className="text-sm font-semibold text-text-primary">{t('part1')}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">{t('part1desc')}</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h3 className="text-sm font-semibold text-text-primary">{t('part2')}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">{t('part2desc')}</p>
            </div>
          </div>
        </Card>

        {/* Author bio */}
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
