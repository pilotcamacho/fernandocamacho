'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils/cn';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next as (typeof routing.locales)[number] });
  }

  return (
    <div className="flex items-center rounded-md border border-border overflow-hidden text-xs font-medium">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          aria-current={loc === locale ? 'true' : undefined}
          className={cn(
            'px-2 py-1 transition-colors uppercase',
            loc === locale
              ? 'bg-primary-600 text-white'
              : 'text-text-muted hover:bg-surface-muted hover:text-text-primary dark:hover:bg-neutral-800 dark:hover:text-neutral-200'
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
