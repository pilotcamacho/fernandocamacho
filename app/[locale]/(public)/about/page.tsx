import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { settings } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const paragraphs = settings.bioFull.split('\n\n');

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t('title')} subtitle={settings.tagline} />

        <Card className="mb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="shrink-0">
              <Image
                src="/images/fcoOK_new.jpg"
                alt="Fernando Camacho Ospina"
                width={100}
                height={100}
                className="rounded-full object-cover ring-4 ring-primary-100 dark:ring-primary-900"
              />
            </div>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-text-secondary">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Card>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {t('languages')}
            </h2>
            <ul className="space-y-2.5">
              {settings.languages.map(({ lang, level }) => (
                <li key={lang} className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-text-primary">{lang}</span>
                  <span className="text-xs text-text-muted">{level}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {t('interests')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {settings.hobbies.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                >
                  {h}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {t('location')}
              </dt>
              <dd className="mt-1 text-sm text-text-primary">{settings.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {t('nationalities')}
              </dt>
              <dd className="mt-1 text-sm text-text-primary">{settings.nationalities}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {t('contact')}
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href={`mailto:${settings.email}`}
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  {settings.email}
                </a>
              </dd>
            </div>
          </dl>
        </Card>
      </div>
    </main>
  );
}
