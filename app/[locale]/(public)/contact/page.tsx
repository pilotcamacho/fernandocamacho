import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { settings } from '@/lib/data/settings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto — Fernando Camacho',
  description: 'Escríbeme, con gusto respondo',
};

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <SectionHeader title="Contacto" subtitle="Escríbeme, con gusto respondo" />

        <Card className="mb-6">
          <ContactForm />
        </Card>

        <p className="text-center text-sm text-text-muted">
          También puedes escribirme directamente a{' '}
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
