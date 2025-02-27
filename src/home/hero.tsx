import React, { Suspense } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="subheader">    
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-200 tracking-tighter p-8'>{t('hero1')}<span className="highlight">{t('hero2')}</span></p>        
        <p className="max-w-[440px] text-gray-500 dark:text-gray-400 font-semibold text-xl pb-20 px-8">{t('subhero')}</p>
        
        <img src="/hero_light.png" alt="Screenshot of Writeopia" className="responsive-image object-cover dark:hidden" />
        <img src="/hero_dark.png" alt="Screenshot of Writeopia" className="responsive-image object-cover hidden dark:block" />
      </div>
    </Suspense>
  );
}
