import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import s from "./Flows.module.css";

const Flows = () => {
  const t = useTranslations("Flows");
  return (
    <div>
      <h3>7 FLOWS</h3>
      <p className={s.textFirst}>{t("text_1")}</p>
      <p className={s.textSec}>{t("text_2")}</p>
      <div className={s.contImgs}>
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

        {/* <picture>
          <source
            srcSet="/img/flows/hand-2-mob.png"
            media="(max-width: 480px)"
          />
          <Image
            src="/img/flows/hand-2-desc.png"
            alt="Photo 2"
            width={700}
            height={624}
            className={s.imgSec}
            style={{ objectFit: "cover" }}
            priority
          />
        </picture> */}
      </div>
    </div>
  );
};

export default Flows;
