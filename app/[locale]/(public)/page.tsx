import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getSettings, type Locale } from '@/lib/data/settings';
import { BioToggle } from '@/components/home/BioToggle';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const s = getSettings(locale as Locale);
  return {
    title: t('metaTitle'),
    description: s.bioBrief,
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const s = getSettings(locale as Locale);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <div className="shrink-0">
              <Image
                src="/images/fcoOK_new.jpg"
                alt="Fernando Camacho Ospina"
                width={120}
                height={120}
                className="rounded-full object-cover ring-4 ring-primary-100 dark:ring-primary-900"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
                {s.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-primary-600 dark:text-primary-400">
                {s.tagline}
              </p>
              <p className="mt-1 text-sm text-text-muted">{s.location}</p>
              <div className="mt-5">
                <BioToggle brief={s.bioBrief} full={s.bioFull} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:border-primary-200 hover:shadow-elevated dark:hover:border-primary-800"
              >
                <h2 className="text-base font-semibold text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {card.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
