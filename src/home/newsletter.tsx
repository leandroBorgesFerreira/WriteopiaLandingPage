import React, { Suspense } from 'react';
import '../App.css';
import DefaultLink from '../components/ui/default-link';
import { useTranslation } from 'react-i18next';

export default function NewsletterSection() {
  const { t } = useTranslation();
  
  return (
    <Suspense fallback="loading">
      <section className="w-screen pt-12 md:pt-24 lg:pt-32 pb-52 pl-8 pr-8 flex flex-col space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('newsletter_title')}</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
          {t('newsletter_subtitle')}
        </p>  
        <div className="space-y-2 space-x-2 pt-3">              
          <DefaultLink to='https://forms.gle/QFoewRrehmkXWuMo8'>{t('newsletter_subscribe')}</DefaultLink>
        </div>
      </section>
    </Suspense>
  )
}