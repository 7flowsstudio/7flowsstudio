'use client';
import React from 'react';
import s from './BurgerMenu.module.css';

type ButtonProps = {
  openMenu: boolean;
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: React.FC<ButtonProps> = ({ openMenu, closeMenu }) => {
  return (
    <div
      className={`${s.burgerWrapper} ${openMenu ? s.active : ''}`}
      onClick={() => closeMenu(!openMenu)}
    >
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </div>
  );
};

export default BurgerMenu;
