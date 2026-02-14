import Image from 'next/image';
import s from './ComponentBackground.module.css';

const ComponentBackground = () => {
  return (
    <div className={s.visualFirstScreen}>
      <Image
        src="/img/hero/Visual_First_Screen_x1.webp"
        alt="Hero background visual"
        fill
        priority={false}
        fetchPriority="low"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 80vw,
         1200px"
        className={s.image}
        quality={75} 
      />
    </div>
  );
};

export default ComponentBackground;
