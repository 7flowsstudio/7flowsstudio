'use client';
import s from './MobileFooter.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Logo from '@/components/Header/Logo/Logo';

const MobileFooter = () => {
  const t = useTranslations('Footer');

  return (
    <div id="footer" className={s.footerMobWrapper}>
      <div className={s.footerHead}>
        <div className={s.footerTop}>
          <h2 className={s.title}>{t('title')}</h2>
          <div className={s.wrapperIcon}>
            <Image
              src="/img/purpose/arrow_bottom.svg"
              fill
              alt="icon"
              className={s.iconTitle}
            />
          </div>
          <a
            href="mailto:seven.flows.studio@gmail.com"
            className={s.titleEmail}
          >
            seven.flows.studio@gmail.com
          </a>
        </div>

        <div className={s.socMenuBlock}>
          <ul className={s.socListMenu}>
            <li className={s.socItemMenu}>
              <Link
                href={{ pathname: '/', hash: 'about' }}
                className={s.textFooter}
              >
                {t('menu.0')}
              </Link>
            </li>
            <li className={s.socItemMenu}>
              <Link
                href={{ pathname: '/', hash: 'services' }}
                className={s.textFooter}
              >
                {t('menu.1')}
              </Link>
            </li>
            <li className={s.socItemMenu}>
              <Link
                href={{ pathname: '/', hash: 'portfolio' }}
                className={s.textFooter}
              >
                {t('menu.2')}
              </Link>
            </li>
            <li className={s.socItemMenu}>
              <Link href="/policy" className={s.textFooter}>
                {t('privacyPolicy')}
              </Link>
            </li>
            <li className={s.socItemMenu}>
              <Link href="/terms" className={s.textFooter}>
                {t('termsOfService')}
              </Link>
            </li>
          </ul>

          <ul className={s.socMenuIconList}>
            <li className={s.socMenuItem}>
              <a
                href="https://www.linkedin.com/company/7flows-studio/?viewAsMember=true"
                className={s.linkSoc}
                aria-label="Seven Flows Studio on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={s.iconSoc} aria-hidden="true" focusable="false">
                  <use href="/sprite.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li className={s.socMenuItem}>
              <a
                href="https://www.instagram.com/seven.flows.studio"
                className={s.linkSoc}
                aria-label="Seven Flows Studio on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={s.iconSoc} aria-hidden="true" focusable="false">
                  <use href="/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className={s.socMenuItem}>
              <a
                href="https://www.facebook.com/profile.php?id=61587178511191"
                className={s.linkSoc}
                aria-label="Seven Flows Studio on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={s.iconSoc} aria-hidden="true" focusable="false">
                  <use href="/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className={s.socMenuItem}>
              <a
                href="https://t.me/Vitalii_Barabash"
                className={s.linkSoc}
                aria-label="Seven Flows Studio on Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={s.iconSoc}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M21.944 4.268a1.5 1.5 0 0 0-1.59-.236L2.457 10.98a1.5 1.5 0 0 0 .09 2.83l4.82 1.54 1.87 5.87a1.5 1.5 0 0 0 2.63.47l2.68-3.27 4.87 3.56a1.5 1.5 0 0 0 2.37-.9l2.9-15.23a1.5 1.5 0 0 0-.74-1.58ZM9.96 14.8l-.84 3.63-1.16-3.64 9.67-7.6-7.67 7.6Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyright}>
        <Logo variant="footer" />
        <h3 className={s.textFooter}>{t('copyright')}</h3>
      </div>
    </div>
  );
};

export default MobileFooter;
