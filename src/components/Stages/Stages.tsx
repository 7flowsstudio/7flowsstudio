"use client";

import React from "react";
import s from "./Stages.module.css";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Card = {
  title: string;
  text: string;
  number: number;
};

const Stages = () => {
  const t = useTranslations("Stages");
  const cards = t.raw("cards") as unknown as Card[];

  return (
    <div className={s.section}>
      <div className={s.contText}>
        <h3 className={s.title}>{t("title")}</h3>
      </div>

      <div className={s.swiperContainer}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={s.mySwiper}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <div className={s.item}>
                <div className={s.element}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className={s.number}>{card.number}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stages;
