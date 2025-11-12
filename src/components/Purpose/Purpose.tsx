import React from "react";
import s from "./Purpose.module.css";
import { useTranslations } from "next-intl";

const Purpose = () => {
  const t = useTranslations("Purpose");
  return (
    <div className={s.section}>
      <div>
        <p>
          {t("text_1")}
          <svg className={s.iconEmpty}>
            <use href="/img/purpose/empty.svg"></use>
          </svg>
        </p>
        <p>
          <svg className={s.iconArrow}>
            <use href="/img/purpose/arrow.svg"></use>
          </svg>
          {t("text_2")}
        </p>
        <p>{t("text_4")}</p>
        <button className={s.primaryBtn}>
          <span>{t("button")}</span>
          <div className={s.primaryWrapIcon}>
            <svg className={s.iconPrimary}>
              <use href="/sprite.svg#icon-arrow-top-right"></use>
            </svg>
          </div>
        </button>
        <p>{t("text_3")}</p>
      </div>
    </div>
  );
};

export default Purpose;
