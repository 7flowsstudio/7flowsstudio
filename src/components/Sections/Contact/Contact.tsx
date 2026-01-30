'use client';
import WrapperForComponents from '@/lib/utils/WrapperForComponents/WrapperForComponents';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('Contact');
  return (
    <WrapperForComponents paddingTop={100} paddingBottom={100}>
      <div id="contacts">
        <h3>{t('title')}</h3>
        <p>
          {t('greeting')}
          <span>, 7FLOWS!</span>
        </p>
        <p>{t('name')}</p>
        <p>
          <span>&</span>
          {t('me')}
        </p>
        <p>{t('interest')}</p>
        <p>{t('write')}</p>
        <button
          onClick={() => {
            window.location.href =
              'mailto:info@7flows.studio?subject=Обговорити проект';
          }}
        >
          {t('btn')}
        </button>
      </div>
    </WrapperForComponents>
  );
};
export default Contact;
