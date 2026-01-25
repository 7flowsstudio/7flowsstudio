'use client';

import { useParams } from 'next/navigation';
import { useState, useRef, useEffect, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import s from './LocaleSwitcher.module.css';

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('LocaleSwitcher');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function onLocaleChange(nextLocale: Locale) {
    setIsOpen(false);

    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  }

  return (
    <div className={s.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={s.dropdown__button}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-haspopup="listbox"
        {...(isOpen && { 'aria-expanded': 'true' })}
      >
        <span className={s.dropdown__current}>
          {t('locale', { locale: defaultValue })}
        </span>
      </button>

      {isOpen && (
        <ul
          className={s.dropdown__list}
          role="listbox"
          aria-label={t('label')}
        >
          {routing.locales.map(locale => (
            <li
              key={locale}
              className={s.dropdown__item}
              role="option"
              {...(locale === defaultValue && { 'aria-selected': 'true' })}
              tabIndex={0}
              onClick={() => onLocaleChange(locale)}
              onKeyDown={e =>
                (e.key === 'Enter' || e.key === ' ') && onLocaleChange(locale)
              }
            >
              <span
                className={`${s.dropdown__option} ${
                  locale === defaultValue ? s.dropdown__option_active : ''
                }`}
              >
                {t('locale', { locale })}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
