import { useTranslations } from 'next-intl';
import Image from 'next/image';
import s from './About.module.css';

const About = () => {
  const t = useTranslations('Flows');
  return (
    <>
      <div className={s.about} id="about">
        <div className={s.textCont}>
          <h3 className="sectionTitle">7 FLOWS</h3>
          <p className={s.textFirst}>{t('text_1')}</p>
          <p className={s.textSec}>{t('text_2')}</p>
        </div>
      </div>
    </>
  );
};

export default About;
