import Image from "next/image";
import s from "./ComponentBackground.module.css";

const ComponentBackground = () => {
  return (
    <div className={s.visualFirstScreen}>
      <Image
        src="/img/hero/Visual_First_Screen_x1.webp"
        alt="Hero background visual"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 767px) 100vw, 1440px"
        className={s.image}
      />
    </div>
  );
};

export default ComponentBackground;
