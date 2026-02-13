'use client';
import React, { useState, useEffect, useRef } from 'react';
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import OrderConsultation from './OrderConsultation/OrderConsultation';
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  const [openMobMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMobileMenu = () => setOpenMobileMenu(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && openMobMenu) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (openMobMenu) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMobMenu]);

  return (
    <>
      {isScrolled && <div className={s.headerBackground}></div>}
      <header ref={headerRef} className={s.header}>
        <nav className={s.leftNav}>
          <Logo />
          <Navigation />
        </nav>
        <div className={s.rightNav}>
          <LocaleSwitcher />
          <OrderConsultation />
          <BurgerMenu openMenu={openMobMenu} closeMenu={setOpenMobileMenu} />
        </div>
      </header>
      <MobileMenu isOpen={openMobMenu} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
