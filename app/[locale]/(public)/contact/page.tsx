import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { settings } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/contact/ContactForm';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('metaTitle'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <Card className="mb-6">
          <ContactForm />
        </Card>

        <p className="text-center text-sm text-text-muted">
          {t('directEmail')}{' '}
          <a
            href={`mailto:${settings.email}`}
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            {settings.email}
          </a>
        </p>
      </div>
    </main>
  );
}
