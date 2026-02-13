'use client';
import s from './DesktopFooter.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Logo from '@/components/Header/Logo/Logo';

const DesktopFooter = () => {
  const t = useTranslations('Footer');

  return (
    <>
      <div id="footer-desk" className={s.sideLogo}>
        <div className={s.logo}>
          <h2 className={s.title}>
            {t('title').replaceAll(' ', '\n')}
            <span className={s.icon}>
              <Image
                src="/img/purpose/arrow.svg"
                fill
                alt="icon"
                className={s.iconTitle}
              />
            </span>
          </h2>
        </div>
        <div className={s.copyright}>
          <Logo />
          <h3 className={s.textFooter}>{t('copyright')}</h3>
        </div>
      </div>
      <div className={s.sideInfo}>
        <a href="mailto:seven.flows.studio@gmail.com" className={s.titleEmail}>
          seven.flows.studio@gmail.com
        </a>
        <div className={s.infoBottom}>
          <div className={s.menu}>
            <ul className={s.menuList}>
              <li className={s.menuItem}>
                <a href="#about" className={s.textFooter}>
                  {t('menu.0')}
                </a>
              </li>
              <li className={s.menuItem}>
                <a href="#services" className={s.textFooter}>
                  {t('menu.1')}
                </a>
              </li>
              <li className={s.menuItem}>
                <a href="#portfolio" className={s.textFooter}>
                  {t('menu.2')}
                </a>
              </li>
            </ul>
            <ul className={s.menuPrivatList}>
              <li className={s.menuPrivatItem}>
                <Link href="/policy" className={s.textFooter}>
                  Privacy Policy
                </Link>
              </li>
              <li className={s.menuPrivatItem}>
                <Link href="/terms" className={s.textFooter}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <ul className={s.socMenuList}>
            <li className={s.socMenuItem}>
              <a
                href="https://www.linkedin.com/company/7flows-studio/?viewAsMember=true"
                className={s.linkSoc}
                aria-label="Seven Flows Studio on Linkedin"
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;
