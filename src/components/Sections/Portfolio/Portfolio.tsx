import { useTranslations } from "next-intl";
import React from "react";
import s from "./Portfolio.module.css";

const Portfolio = () => {
  const t = useTranslations("Portfolio");
  return (
    <div className={`${s.contPortfolio} container`}>
      <h2 className={s.titlePortfolio}>{t("title")}</h2>
      <ul className={s.frameList}>
        <li className={`${s.first} ${s.frame}`}></li>
        <li className={`${s.second} ${s.frame}`}></li>
        <li className={`${s.third} ${s.frame}`}></li>
      </ul>
    </div>
  );
};

export default Portfolio;
