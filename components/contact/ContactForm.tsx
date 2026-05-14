'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('nameRequired')),
        email: z.string().email(t('emailInvalid')),
        subject: z.string().optional(),
        message: z.string().min(10, t('messageTooShort')),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950">
        <p className="text-green-700 dark:text-green-300 font-medium text-base">
          {t('successTitle')}
        </p>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          {t('successText')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          {t('nameLbl')} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          placeholder={t('namePlaceholder')}
          className="input-base"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          {t('emailLbl')} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder={t('emailPlaceholder')}
          className="input-base"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          {t('subjectLbl')}
        </label>
        <input
          {...register('subject')}
          placeholder={t('subjectPlaceholder')}
          className="input-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          {t('messageLbl')} <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="input-base resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">{t('errorText')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 disabled:opacity-60 transition-colors"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
