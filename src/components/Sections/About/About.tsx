import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import s from "./About.module.css";

const About = () => {
  const t = useTranslations("Flows");
  return (
    <div className={s.about} id="about">
      <div className={s.textCont}>
        <h3 className={s.logo}>7 FLOWS</h3>
        <p className={s.textFirst}>{t("text_1")}</p>
        <p className={s.textSec}>{t("text_2")}</p>
      </div>
      {/* <div className={s.contImgs}>
        <picture>
          <source srcSet="/img/flows/imgs-mob.png" media="(max-width: 480px)" />
          <Image
            src="/img/flows/imgs-desc.png"
            alt="Photo 1"
            width={1440}
            height={975}
            className={s.imgHands}
            style={{ objectFit: "cover" }}
            priority
          />
        </picture>
      </div> */}
    </div>
  );
};

export default About;
