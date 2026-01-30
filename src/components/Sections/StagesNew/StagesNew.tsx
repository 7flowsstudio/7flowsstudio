"use client";
import React from 'react';
import s from './StagesNew.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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

const StagesNew = () => {
  const t = useTranslations('Stages');
   const cards = t.raw('cards') as unknown as Card[];
  return (
    <div className={s.section}>
      <div className={s.textCont}>
        <h3 className={s.logo}>Як ми працюємо</h3>
        <p className={s.textFirst}>{t('title')}</p>
      </div>

      <div className={s.handsContainer}>
        <div className={s.handLeft}>
          <Image
            src="/img/stages/left.png"
            alt="Hand Left"
            width={758}
            height={648}
            className={s.handImg}
          />
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


        <div className={s.handRight}>
          <Image
            src="/img/stages/right.png"
            alt="Hand Right"
            width={700}
            height={624}
            className={s.handImg}
          />
        </div>
      </div>
    </div>
  );
};

export default StagesNew;
