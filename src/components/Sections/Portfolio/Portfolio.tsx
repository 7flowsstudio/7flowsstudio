import { useTranslations } from "next-intl";
import React from "react";
import s from "./Portfolio.module.css";

const Portfolio = () => {
  const t = useTranslations("Portfolio");
  return (
    <div className={`${s.contPortfolio} container`}>
      <h2 className={s.titlePortfolio}>{t("title")}</h2>
      <ul className={s.frameList}>
        <li className={`${s.first} ${s.frame}`}>
          <svg className={s.iconLogo}>
            <use href="/sprite.svg#icon-logo"></use>
          </svg>
        </li>
        <li className={`${s.second} ${s.frame}`}>
          <svg className={s.iconLogo}>
            <use href="/sprite.svg#icon-logo"></use>
          </svg>
        </li>
        <li className={`${s.third} ${s.frame}`}>
          <svg className={s.iconLogo}>
            <use href="/sprite.svg#icon-logo"></use>
          </svg>
        </li>
      </ul>
      <div className={s.buttonWrapp}>
        <button className={s.button}>{t("button")}</button>
      </div>
    </div>
  );
};

export default Portfolio;
