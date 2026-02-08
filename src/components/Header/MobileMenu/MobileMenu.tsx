'use client';
import React from 'react';
import s from './MobileMenu.module.css';
import { useTranslations } from 'next-intl';
import OrderConsultation from '../OrderConsultation/OrderConsultation';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('Header');

  const navList: { id: number; link: string; name: string }[] = [
    { id: 0, link: '#about', name: t('navigation.0') },
    { id: 1, link: '#services', name: t('navigation.1') },
    { id: 2, link: '#portfolio', name: t('navigation.2') },
    { id: 3, link: '#footer', name: t('navigation.3') },
  ];

  return (
    <div className={`${s.mobileMenu} ${isOpen ? s.open : ''}`}>
      <div className={s.mobileMenu__overlay} onClick={onClose} />
      <div className={s.mobileMenu__content}>
        <nav className={s.mobileMenu__nav}>
          <ul className={s.mobileMenu__list}>
            {navList.map(item => (
              <li key={item.id} className={s.mobileMenu__item}>
                <a
                  href={item.link}
                  className={s.mobileMenu__link}
                  onClick={onClose}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.mobileMenu__actions}>
          <OrderConsultation />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
