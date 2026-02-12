'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Team.module.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  quote: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export default function Team() {
  const t = useTranslations('Team');
  const members = t.raw('members') as TeamMember[];
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (members.length === 0) return;

    let currentIndex = 0;
    let isAnimating = false;

    const animateCard = () => {
      if (isAnimating) return;
      isAnimating = true;

      setTimeout(() => {
        setFlippedCards(prev => {
          const newSet = new Set(prev);
          newSet.add(members[currentIndex].id);
          return newSet;
        });

        setTimeout(() => {
          setFlippedCards(prev => {
            const newSet = new Set(prev);
            newSet.delete(members[currentIndex].id);
            return newSet;
          });

          setTimeout(() => {
            currentIndex = (currentIndex + 1) % members.length;
            isAnimating = false;
          }, 800);
        }, 2500);
      }, 1000);
    };

    const interval = setInterval(animateCard, 5000);

    animateCard();

    return () => clearInterval(interval);
  }, [members]);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <h3 className="sectionTitle">{t('label')}</h3>
        <h2 className={styles.title}>{t('title')}</h2>

        {/* Desktop Grid */}
        <div className={styles.grid}>
          {members.map(member => (
            <div key={member.id} className={styles.memberWrapper}>
              {/* Desktop Version - Hover Card */}
              <div className={styles.desktopCard}>
                {/* Photo Container with Hover Effect */}
                <div className={styles.photoContainer}>
                  {/* Circle Photo (default state) */}
                  <div className={styles.circlePhoto}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={styles.photoImage}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Full Photo with Quote (hover state) */}
                  <div className={styles.hoverCard}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={styles.fullPhoto}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.quoteOverlay}>
                      {/* <span className={styles.quoteMark}>"</span> */}
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.66667 0C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V4.16667C0 4.60869 0.175595 5.03262 0.488155 5.34518C0.800716 5.65774 1.22464 5.83333 1.66667 5.83333H4.16667C4.16667 6.49637 3.90327 7.13226 3.43443 7.6011C2.96559 8.06994 2.32971 8.33333 1.66667 8.33333H0.833333C0.61232 8.33333 0.400358 8.42113 0.244078 8.57741C0.0877975 8.73369 0 8.94565 0 9.16667C0 9.38768 0.0877975 9.59964 0.244078 9.75592C0.400358 9.9122 0.61232 10 0.833333 10H1.66667C2.77174 10 3.83154 9.56101 4.61294 8.77961C5.39435 7.99821 5.83333 6.9384 5.83333 5.83333V1.66667C5.83333 1.22464 5.65774 0.800716 5.34518 0.488155C5.03262 0.175595 4.60869 0 4.16667 0H1.66667ZM9.16667 0C8.72464 0 8.30072 0.175595 7.98816 0.488155C7.67559 0.800716 7.5 1.22464 7.5 1.66667V4.16667C7.5 4.60869 7.67559 5.03262 7.98816 5.34518C8.30072 5.65774 8.72464 5.83333 9.16667 5.83333H11.6667C11.6667 6.49637 11.4033 7.13226 10.9344 7.6011C10.4656 8.06994 9.82971 8.33333 9.16667 8.33333H8.33333C8.11232 8.33333 7.90036 8.42113 7.74408 8.57741C7.5878 8.73369 7.5 8.94565 7.5 9.16667C7.5 9.38768 7.5878 9.59964 7.74408 9.75592C7.90036 9.9122 8.11232 10 8.33333 10H9.16667C10.2717 10 11.3315 9.56101 12.1129 8.77961C12.8943 7.99821 13.3333 6.9384 13.3333 5.83333V1.66667C13.3333 1.22464 13.1577 0.800716 12.8452 0.488155C12.5326 0.175595 12.1087 0 11.6667 0H9.16667Z"
                          fill="#9747FF"
                        />
                      </svg>

                      <p className={styles.quoteText}>{member.quote}</p>
                    </div>
                  </div>
                </div>

                {/* Member Info - Outside hover area */}
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <div className={styles.socials}>
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M18.52 0H1.477C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.477 20h17.04c.819 0 1.483-.645 1.483-1.44V1.44C20 .645 19.336 0 18.52 0zM5.934 17.043H2.965V7.496h2.969v9.547zM4.449 6.195a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm12.593 10.848h-2.965v-4.64c0-1.107-.02-2.532-1.543-2.532-1.544 0-1.78 1.206-1.78 2.45v4.722H7.789V7.496h2.844v1.305h.04c.396-.75 1.364-1.543 2.807-1.543 3.003 0 3.558 1.977 3.558 4.548v5.237h.004z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 1.802c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.228 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.168 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Version - Flip Card - Hidden on Desktop */}
              <div className={styles.mobileCard}>
                <div
                  className={`${styles.flipContainer} ${flippedCards.has(member.id) ? styles.flipped : ''}`}
                  onClick={() => toggleFlip(member.id)}
                >
                  <div className={styles.flipCardInner}>
                    {/* Front - Circle Photo */}
                    <div className={styles.flipCardFront}>
                      <div className={styles.mobileCirclePhoto}>
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className={styles.photoImage}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>

                    {/* Back - Circle Quote */}
                    <div className={styles.flipCardBack}>
                      <div className={styles.quoteCircle}>
                        <span className={styles.quoteMarkMobile}>"</span>
                        <p className={styles.quoteTextMobile}>{member.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info - Outside flip area */}
                <div className={styles.mobileInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <div className={styles.socials}>
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M18.52 0H1.477C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.477 20h17.04c.819 0 1.483-.645 1.483-1.44V1.44C20 .645 19.336 0 18.52 0zM5.934 17.043H2.965V7.496h2.969v9.547zM4.449 6.195a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm12.593 10.848h-2.965v-4.64c0-1.107-.02-2.532-1.543-2.532-1.544 0-1.78 1.206-1.78 2.45v4.722H7.789V7.496h2.844v1.305h.04c.396-.75 1.364-1.543 2.807-1.543 3.003 0 3.558 1.977 3.558 4.548v5.237h.004z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 1.802c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.228 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.168 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className={styles.mobileSwiper}>
          <Swiper
            spaceBetween={8}
            slidesPerView={1.1}
            centeredSlides={false}
            className={styles.mySwiper}
            modules={[Autoplay]}
            speed={900}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {members.map(member => (
              <SwiperSlide key={member.id} className={styles.slide}>
                <div className={styles.memberWrapper}>
                  <div className={styles.mobileCard}>
                    <div
                      className={`${styles.flipContainer} ${flippedCards.has(member.id) ? styles.flipped : ''}`}
                      onClick={() => toggleFlip(member.id)}
                    >
                      <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                          <div className={styles.mobileCirclePhoto}>
                            <Image
                              src={member.photo}
                              alt={member.name}
                              fill
                              className={styles.photoImage}
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>

                        {/* Back - Circle Quote */}
                        <div className={styles.flipCardBack}>
                          <div className={styles.quoteCircle}>
                            <Image
                              width={29}
                              height={22}
                              src="/img/team/quote.svg"
                              alt="quote"
                              className={styles.quoteImg}
                            />
                            <p className={styles.quoteTextMobile}>
                              {member.quote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Member Info - Outside flip area */}
                    <div className={styles.mobileInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                      <div className={styles.socials}>
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M18.52 0H1.477C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.477 20h17.04c.819 0 1.483-.645 1.483-1.44V1.44C20 .645 19.336 0 18.52 0zM5.934 17.043H2.965V7.496h2.969v9.547zM4.449 6.195a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm12.593 10.848h-2.965v-4.64c0-1.107-.02-2.532-1.543-2.532-1.544 0-1.78 1.206-1.78 2.45v4.722H7.789V7.496h2.844v1.305h.04c.396-.75 1.364-1.543 2.807-1.543 3.003 0 3.558 1.977 3.558 4.548v5.237h.004z" />
                            </svg>
                          </a>
                        )}
                        {member.socials.facebook && (
                          <a
                            href={member.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                            </svg>
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 1.802c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.228 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.168 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
