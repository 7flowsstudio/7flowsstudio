import React from "react";
import s from "./Purpose.module.css";
import { useTranslations } from "next-intl";

const Purpose = () => {
  const t = useTranslations("Purpose");
  return (
    <div className={s.section}>
      <div className={s.container}>
        <p className={s.text_1}>
          {t("text_1")}
          <svg className={s.iconEmpty}>
            <use href="/img/purpose/empty.svg"></use>
          </svg>
        </p>
        <p className={s.text_2}>
          <svg className={s.iconArrow}>
            <use href="/img/purpose/arrow.svg"></use>
          </svg>
          {t("text_2")}
        </p>
        <div className={s.wrappText}>
        <p>{t("text_4")}</p>
        <p className={s.text_3}>{t("text_3")}</p>
        </div>
        <button className={s.primaryBtn}>
          <span>{t("button")}</span>
          <div className={s.primaryWrapIcon}>
            <svg className={s.iconPrimary}>
              <use href="/sprite.svg#icon-arrow-top-right"></use>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Purpose;
