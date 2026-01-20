'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './FAQSection.module.css';

const faqKeys = ['time', 'noCode', 'instagram', 'update', 'price'];

export default function FAQSection() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>FAQ</p>
        <h2 className="title">{t('title')}</h2>

        <div className={styles.list}>
          {faqKeys.map((key, index) => (
            <div key={key} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{t(`${key}.q`)}</span>
                <span className={styles.icon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.chevron} ${open === index ? styles.chevronOpen : ''}`}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {open === index && (
                <div className={styles.answer}>{t(`${key}.a`)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
