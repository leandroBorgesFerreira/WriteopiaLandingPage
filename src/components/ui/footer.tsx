import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400">© {year} {t('footer_branch')}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {/* <a className="text-xs hover:underline underline-offset-4" href="/">
          Terms of Service
        </a> */}
        <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
        {t('footer_privacy')}
        </Link>
      </nav>
    </footer>
  );
}
