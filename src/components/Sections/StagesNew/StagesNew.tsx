"use client";
import React, { useRef, useState, useEffect } from 'react';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '50px'
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.section} ref={sectionRef}>
      <div className={s.textCont}>
        <h3 className='sectionTitle'>Як ми працюємо</h3>
        <p className={s.textFirst}>{t('title')}</p>
      </div>

      <div className={`${s.handsContainer} ${isVisible ? s.visible : ''}`}>
        <div className={s.handLeft}>
          <Image
            src="/img/stages/left-hand.png"
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
                  <Image
                    src="/img/image.png"
                    alt=""
                    width={436}
                    height={436}
                    className={s.elementBg}
                  />
                  <div className={s.elementContent}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <div className={s.stars}>
                      {[...Array(7)].map((_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/icon.png"
                          alt="star"
                          width={20}
                          height={20}
                          className={starIndex < card.number ? s.starActive : s.star}
                        />
                      ))}
                    </div>
                  </div>
                  <span className={s.number}>{card.number}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


        <div className={s.handRight}>
          <Image
            src="/img/stages/right-hand.png"
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
