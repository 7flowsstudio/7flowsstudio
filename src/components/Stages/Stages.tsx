import React from "react";
import s from "./Stages.module.css";
import { useTranslations } from "next-intl";

type Card = {
  title: string;
  text: string;
  number: number;
};

const Stages = () => {
  const t = useTranslations("Stages");
  const cards = t.raw("cards") as unknown as Card[];
  return (
    <div>
      <div className={s.contText}>
        <h3 className={s.title}>{t("title")}</h3>
        <h2>{t("text")}</h2>
      </div>
      <ul className={s.list}>
        {cards.map((card, index) => (
          <li key={index} className={s.item}>
            <div className={s.element}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className={s.number}>{card.number}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stages;
