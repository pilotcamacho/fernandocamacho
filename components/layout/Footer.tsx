import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="border-t border-border bg-surface-muted mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:f.camacho@peopleart.co"
              className="hover:text-primary-600 transition-colors"
            >
              f.camacho@peopleart.co
            </a>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Contacto
            </Link>
            <Link href="/book" className="hover:text-primary-600 transition-colors">
              Propiología
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
