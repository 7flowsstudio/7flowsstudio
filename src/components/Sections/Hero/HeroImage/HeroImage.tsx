import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import s from './HeroImage.module.css';

const HeroImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setTransform] = useState('translate(-2%, 5%) scale(1.1)');
  const [, setDesktopTransform] = useState('translateY(20%) scale(1.0)');
  const [isDesktop, setIsDesktop] = useState(false);
  const [autoTransform, setAutoTransform] = useState({ x: 0, y: 0 });
  const throttleRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - throttleRef.current < 16) return;
    throttleRef.current = now;

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (!isDesktop) {
      const deltaX = (mouseX - centerX) / rect.width;
      const deltaY = (mouseY - centerY) / rect.height;

      const cursorMoveX = deltaX * 12;
      const cursorMoveY = deltaY * 12;

      const totalMoveX = autoTransform.x + cursorMoveX;
      const totalMoveY = autoTransform.y + cursorMoveY;

      const newTransform = `translate(calc(-2% + ${totalMoveX}px), calc(5% + ${totalMoveY}px)) scale(1.1)`;
      setTransform(newTransform);
    } else {
      const deltaX = (mouseX - centerX) / rect.width;
      const deltaY = (mouseY - centerY) / rect.height;

      const cursorMoveX = deltaX * 20;
      const cursorMoveY = deltaY * 20;

      const totalMoveX = autoTransform.x + cursorMoveX;
      const totalMoveY = autoTransform.y + cursorMoveY;

      const newDesktopTransform = `translate(calc(0% + ${totalMoveX}px), calc(20% + ${totalMoveY}px)) scale(1.0)`;
      setDesktopTransform(newDesktopTransform);
    }
  };

  const getTransformStyle = () => {
    if (isDesktop) {
      return {
        transform: `translate(calc(0% + ${autoTransform.x}px), calc(20% + ${autoTransform.y}px)) scale(1.0)`,
      };
    } else {
      return {
        transform: `translate(calc(-2% + ${autoTransform.x}px), calc(5% + ${autoTransform.y}px)) scale(1.1)`,
      };
    }
  };

  return (
    <div
      className={s.blockImage}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={s.wraperImage}>
        <Image
          loading="eager"
          fetchPriority="high"
          src="/img/hero/Abstract_smooth_x22.webp"
          width={1503}
          height={1379}
          alt="image_abstact"
          sizes="100vw"
          className={s.image}
          style={getTransformStyle()}
        />
      </div>
    </div>
  );
};

export default HeroImage;
