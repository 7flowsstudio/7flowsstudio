import dynamic from 'next/dynamic';
import s from './Hero.module.css';
import ComponentBackground from './ComponentBackground/ComponentBackground';
import HeroContent from './HeroContent/HeroContent';

const HeroImage = dynamic(() => import('./HeroImage/HeroImage'), {
  loading: () => <div className={s.imageWrapLaptop}>Loading...</div>
});

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
