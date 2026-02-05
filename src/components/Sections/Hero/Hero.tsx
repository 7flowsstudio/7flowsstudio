'use client';
import s from './Hero.module.css';
import ComponentBackground from './ComponentBackground/ComponentBackground';
import HeroContent from './HeroContent/HeroContent';
import HeroImage from './HeroImage/HeroImage';

const Hero = () => {
  return (
    <div id="hero" className={s.heroWrapper}>
      <ComponentBackground />
      <HeroContent />
      <div className={s.imageWrapLaptop}>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
