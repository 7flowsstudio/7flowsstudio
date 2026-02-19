import LegalPageLayout from '@/components/LegalPageLayout/LegalPageLayout';
import LegalSection from '@/components/LegalSection/LegalSection';
import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations('Terms');

  return (
    <LegalPageLayout title={t('title')}>
      <LegalSection number="1" title={t('sections.1.title')}>
        <ul>
          <li>{t('sections.1.content.0')}</li>
          <li>
            {t('sections.1.content.1')} <strong>7flows.studio</strong>{' '}
            {t('sections.1.content.2')}{' '}
            <a
              href="mailto:seven.flows.studio@gmail.com"
              className="primary-link"
            >
              seven.flows.studio@gmail.com
            </a>
            .
          </li>
          <li>
            {t('sections.1.content.3')}{' '}
            <a href="https://7flows.studio" className="primary-link">
              https://7flows.studio
            </a>{' '}
            {t('sections.1.content.4')}.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="2" title={t('sections.2.title')}>
        <ul>
          <li>
            <strong>{t('sections.2.content.0')}</strong>{' '}
            {t('sections.2.content.1')}
          </li>
          <li>
            <strong>{t('sections.2.content.2')}</strong>{' '}
            {t('sections.2.content.3')}
          </li>
          <li>
            <strong>{t('sections.2.content.4')}</strong>{' '}
            {t('sections.2.content.5')}
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title={t('sections.3.title')}>
        <ul>
          <li>{t('sections.3.content.0')}</li>
          <li>{t('sections.3.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title={t('sections.4.title')}>
        <ul>
          <li>{t('sections.4.content.0')}</li>
          <li>{t('sections.4.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title={t('sections.5.title')}>
        <ul>
          <li>{t('sections.5.content.0')}</li>
          <li>{t('sections.5.content.1')}</li>
          <li>{t('sections.5.content.2')}</li>
          <li>{t('sections.5.content.3')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="6" title={t('sections.6.title')}>
        <ul>
          <li>{t('sections.6.content.0')}</li>
          <li>{t('sections.6.content.1')}</li>
          <li>{t('sections.6.content.2')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="7" title={t('sections.7.title')}>
        <ul>
          <li>{t('sections.7.content.0')}</li>
          <li>{t('sections.7.content.1')}</li>
          <li>{t('sections.7.content.2')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="8" title={t('sections.8.title')}>
        <ul>
          <li>{t('sections.8.content.0')}</li>
          <li>{t('sections.8.content.1')}</li>
          <li>{t('sections.8.content.2')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="9" title={t('sections.9.title')}>
        <ul>
          <li>{t('sections.9.content.0')}</li>
          <li>{t('sections.9.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="10" title={t('sections.10.title')}>
        <ul>
          <li>{t('sections.10.content.0')}</li>
          <li>{t('sections.10.content.1')}</li>
          <li>{t('sections.10.content.2')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="11" title={t('sections.11.title')}>
        <ul>
          <li>{t('sections.11.content.0')}</li>
          <li>{t('sections.11.content.1')}</li>
          <li>{t('sections.11.content.2')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="12" title={t('sections.12.title')}>
        <ul>
          <li>{t('sections.12.content.0')}</li>
          <li>{t('sections.12.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="13" title={t('sections.13.title')}>
        <ul>
          <li>{t('sections.13.content.0')}</li>
          <li>{t('sections.13.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="14" title={t('sections.14.title')}>
        <ul>
          <li>{t('sections.14.content.0')}</li>
          <li>{t('sections.14.content.1')}</li>
        </ul>
      </LegalSection>

      <LegalSection number="15" title={t('sections.15.title')}>
        <p>{t('sections.15.content.0')}</p>
      </LegalSection>

      <LegalSection number="16" title={t('sections.16.title')}>
        <ul>
          <li>{t('sections.16.content.0')}</li>
          <li>
            {t('sections.16.content.1')}{' '}
            <a
              href="mailto:seven.flows.studio@gmail.com"
              className="primary-link"
            >
              seven.flows.studio@gmail.com
            </a>
            .
          </li>
        </ul>
      </LegalSection>
    </LegalPageLayout>
  );
}
