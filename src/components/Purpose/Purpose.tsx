'use client';
import Image from 'next/image';
import s from './Purpose.module.css';
import { useTranslations } from 'next-intl';

const Purpose = () => {
  const t = useTranslations('Purpose');
  return (
    <div className={s.section}>
      <div className={s.container}>
        <p className={s.text_1}>
          {t('text_1')}
          <Image
            className={s.iconEmpty}
            src="/img/purpose/empty.svg"
            alt="Empty icon"
            width={134}
            height={122}
          />
        </p>
        <p className={s.text_2}>
          <Image
            className={s.iconArrow}
            src="/img/purpose/arrow.svg"
            alt="Arrow icon"
            width={135}
            height={122}
          />
          {t('text_2')}
        </p>
        <div className={s.wrappText}>
          <p className={s.textSmall}>{t('text_4')}</p>
          <p className={s.text_3}>{t('text_3')}</p>
        </div>
        <button
          className={s.primaryBtn}
          onClick={() => {
            const contactsSection = document.getElementById('form');
            if (contactsSection) {
              contactsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>{t('button')}</span>
          <div className={s.primaryWrapIcon}>
            <svg className={s.iconPrimary} aria-hidden="true" focusable="false">
              <use href="/sprite.svg#icon-arrow-top-right"></use>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Purpose;
