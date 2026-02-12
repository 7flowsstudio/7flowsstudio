'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { getMergedReviews } from '@/lib/getMergedReviews';

import styles from './ReviewsSlider.module.css';

interface Review {
  id: number;
  name: string;
  avatar: string;
  role: string;
  text: string;
}

export default function ReviewsSlider() {
  const t = useTranslations('Reviews');

  const mergedComments = getMergedReviews(t.raw('comments'));
  const shouldLoop = mergedComments.length > 3;

  return (
    <section className={styles.section}>
      <h2 className="title">{t('title')}</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 'auto',
          },
          420: {
            slidesPerView: 1.1,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        loop={shouldLoop}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `
    <span class="${className}">
   <svg class="star" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ii_542_682)">
<path d="M14.5624 0C16.2998 3.67253e-05 17.7873 2.14814 18.4046 5.19542C20.9872 3.5133 23.533 3.05895 24.7501 4.26674C25.9768 5.48416 25.5013 8.04099 23.7731 10.625C26.8394 11.2386 29 12.7142 29 14.437C28.9999 16.4526 26.0424 18.1294 22.1372 18.4837C24.1339 21.225 24.7495 24.027 23.4473 25.3194C21.8275 26.9268 17.8545 25.5898 14.5731 22.3332C14.5103 22.2708 14.4483 22.208 14.3868 22.1452C11.1269 25.3238 7.22366 26.6142 5.62179 25.0245C4.36428 23.7765 4.89519 21.1207 6.73105 18.4713C2.89124 18.0917 0 16.4296 0 14.4367C0.000120006 12.7151 2.15785 11.2404 5.22079 10.6261C3.49213 8.04186 3.01671 5.48429 4.24354 4.26674C5.47869 3.041 8.08232 3.5276 10.7042 5.27173C11.312 2.18398 12.8104 0 14.5624 0Z" fill="url(#paint0_linear_542_682)"/>
</g>
<defs>
<filter id="filter0_ii_542_682" x="-2.53963" y="-2.39854" width="36.9011" height="31.9258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2.53963" dy="3.52727"/>
<feGaussianBlur stdDeviation="7.05454"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_542_682"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="5.36145" dy="-2.39854"/>
<feGaussianBlur stdDeviation="7.05454"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_542_682" result="effect2_innerShadow_542_682"/>
</filter>
<linearGradient id="paint0_linear_542_682" x1="32.0588" y1="-6.3152" x2="-0.251494" y2="22.9858" gradientUnits="userSpaceOnUse">
<stop stop-color="#BFFF00"/>
<stop offset="1" stop-color="#FBE95C"/>
</linearGradient>
</defs>
</svg>
    </span>
  `,
        }}
      >
        {mergedComments.map((item: Review) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <Image
                src="/img/reviews/clip.svg"
                alt=""
                className={styles.clip}
                width="65"
                height="66"
              />
              <Image
                src="/img/reviews/clip2.svg"
                alt=""
                className={styles.clipTop}
                width="65"
                height="66"
              />
              <div className={styles.header}>
                <Image
                  src={item.avatar}
                  className={styles.avatar}
                  alt={item.name}
                  width="60"
                  height="60"
                />

                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>

              <p className={styles.text}>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
