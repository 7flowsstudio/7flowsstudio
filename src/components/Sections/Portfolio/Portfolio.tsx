import { useTranslations } from "next-intl";
import React from "react";
import s from "./Portfolio.module.css";

const Portfolio = () => {
  const t = useTranslations("Portfolio");
  return (
    <div>
      <h2>{t("title")}</h2>
      <ul>
        <li className={s.frame}></li>
        <li className={s.frame}></li>
        <li className={s.frame}></li>
      </ul>
    </div>
  );
};

export default Portfolio;
