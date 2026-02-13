'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import s from './HeroImage.module.css';

const HeroImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [autoTransform, setAutoTransform] = useState({ x: 0, y: 0 });
  const rectRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        rectRef.current = {
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        };
      }
    };

    const checkIsDesktop = () => {
      const newIsDesktop = window.innerWidth >= 768;
      setIsDesktop(newIsDesktop);
      updateRect();
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      const amplitude = isDesktop ? 8 : 6;
      const speedX = 0.001;
      const speedY = 0.0008;

      const x = Math.sin(elapsed * speedX) * amplitude;
      const y = Math.cos(elapsed * speedY) * amplitude;

      setAutoTransform({ x, y });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDesktop]);

  useEffect(() => {
    if (imageRef.current) {
      if (isDesktop) {
        imageRef.current.style.transform = `translate3d(calc(0% + ${autoTransform.x}px), calc(20% + ${autoTransform.y}px), 0) scale(1.0)`;
      } else {
        imageRef.current.style.transform = `translate3d(calc(-2% + ${autoTransform.x}px), calc(5% + ${autoTransform.y}px), 0) scale(1.1)`;
      }
    }
  }, [autoTransform, isDesktop]);

  return (
    <div className={s.blockImage} ref={containerRef}>
      <div className={s.wraperImage} ref={imageRef}>
        <Image
          loading="eager"
          fetchPriority="high"
          src="/img/hero/Abstract_smooth_x22.webp"
          width={1503}
          height={1379}
          alt="image_abstact"
          className={s.image}
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/vAA=" // Minimal blur data URL
        />
      </div>
    </div>
  );
};

export default HeroImage;
