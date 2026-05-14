'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface BioToggleProps {
  brief: string;
  full: string;
}

export function BioToggle({ brief, full }: BioToggleProps) {
  const t = useTranslations('bio');
  const [expanded, setExpanded] = useState(false);
  const paragraphs = full.split('\n\n');

  return (
    <div>
      {expanded ? (
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-text-secondary leading-relaxed">{brief}</p>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
      >
        {expanded ? t('readLess') : t('readMore')}
      </button>
    </div>
  );
}
