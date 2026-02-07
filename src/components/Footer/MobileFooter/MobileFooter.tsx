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
          <a href="mailto:seven.flows.studio@gmail.com" className={s.titleEmail}>seven.flows.studio@gmail.com</a>
        </div>

        <div className={s.socMenuBlock}>
          <ul className={s.socListMenu}>
            <li className={s.socItemMenu}>
              <a href="#about" className={s.textFooter}>
                {t('menu.0')}
              </a>
            </li>
            <li className={s.socItemMenu}>
              <a href="#services" className={s.textFooter}>
                {t('menu.1')}
              </a>
            </li>
            <li className={s.socItemMenu}>
              <a href="#portfolio" className={s.textFooter}>
                {t('menu.2')}
              </a>
            </li>
            <li className={s.socItemMenu}>
              <Link href="/policy" className={s.textFooter}>
                Privacy Policy
              </Link>
            </li>
            <li className={s.socItemMenu}>
              <Link href="/terms" className={s.textFooter}>
                Terms of Service
              </Link>
            </li>
          </ul>

          <ul className={s.socMenuIconList}>
            <li className={s.socMenuItem}>
              <a
                href="https://www.linkedin.com/company/7flows-studio/?viewAsMember=true"
                className={s.linkSoc}
              >
                <svg className={s.iconSoc}>
                  <use href="/sprite.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li className={s.socMenuItem}>
              <a
                href="https://www.instagram.com/seven.flows.studio"
                className={s.linkSoc}
              >
                <svg className={s.iconSoc}>
                  <use href="/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className={s.socMenuItem}>
              <a
                href="https://www.facebook.com/profile.php?id=61587178511191"
                className={s.linkSoc}
              >
                <svg className={s.iconSoc}>
                  <use href="/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyright}>
        <Logo variant="footer" />
        <h5 className={s.textFooter}>{t('copyright')}</h5>
      </div>
    </div>
  );
};

export default MobileFooter;
