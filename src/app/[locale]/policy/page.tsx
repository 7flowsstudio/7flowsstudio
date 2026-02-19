import { useTranslations } from 'next-intl';
import LegalPageLayout from '@/components/LegalPageLayout/LegalPageLayout';
import LegalSection from '@/components/LegalSection/LegalSection';

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy');
  return (
    <LegalPageLayout title={t('title')}>
      <LegalSection number="1" title={t('sections.1.title')}>
        <ul>
          <li>
            {t('sections.1.content.0')} <strong>7flows.studio</strong>{' '}
            {t('sections.1.content.1')}
          </li>
          <li>
            {t('sections.1.content.2')}{' '}
            <a href="https://7flows.studio" className="primary-link">
              https://7flows.studio
            </a>
          </li>
          <li>
            {t('sections.1.content.3')}{' '}
            <a
              href="mailto:seven.flows.studio@gmail.com"
              className="primary-link"
            >
              seven.flows.studio@gmail.com
            </a>
          </li>
        </ul>
        <p>{t('sections.1.description')}</p>
      </LegalSection>

      <LegalSection number="2" title={t('sections.2.title')}>
        <p>{t('sections.2.description')}</p>
        <ul>
          <li>
            <strong>{t('sections.2.content.0')}</strong>{' '}
            {t('sections.2.content.1')}
          </li>
          <li>
            <strong>{t('sections.2.content.2')}</strong>{' '}
            {t('sections.2.content.3')}
          </li>
        </ul>
        <p>{t('sections.2.processorNote')}</p>
      </LegalSection>

      <LegalSection number="3" title={t('sections.3.title')}>
        <h3>{t('sections.3.websiteData.title')}</h3>
        <ul>
          <li>{t('sections.3.websiteData.items.0')}</li>
          <li>{t('sections.3.websiteData.items.1')}</li>
          <li>{t('sections.3.websiteData.items.2')}</li>
          <li>{t('sections.3.websiteData.items.3')}</li>
          <li>{t('sections.3.websiteData.items.4')}</li>
          <li>{t('sections.3.websiteData.items.5')}</li>
        </ul>
        <p className="note">{t('sections.3.websiteData.note')}</p>

        <h3>{t('sections.3.clientData.title')}</h3>
        <ul>
          <li>{t('sections.3.clientData.items.0')}</li>
          <li>{t('sections.3.clientData.items.1')}</li>
          <li>{t('sections.3.clientData.items.2')}</li>
          <li>т{t('sections.3.clientData.items.3')}</li>
          <li>{t('sections.3.clientData.items.4')}</li>
        </ul>
        <p>{t('sections.3.clientData.note')}</p>
      </LegalSection>

      <LegalSection number="4" title={t('sections.4.title')}>
        <ul>
          <li>
            <strong>{t('sections.4.items.0')}</strong> {t('sections.4.items.1')}
          </li>
          <li>
            <strong>{t('sections.4.items.2')}</strong> {t('sections.4.items.3')}
          </li>
          <li>
            <strong>{t('sections.4.items.4')}</strong> {t('sections.4.items.5')}
          </li>
          <li>
            <strong>{t('sections.4.items.6')}</strong>
            {t('sections.4.items.7')}
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title={t('sections.5.title')}>
        <p>{t('sections.5.description')}</p>
        <p className="bold">{t('sections.5.categories.title')}</p>
        <ul>
          <li>{t('sections.5.categories.items.0')}</li>
          <li>{t('sections.5.categories.items.1')}</li>
          <li>{t('sections.5.categories.items.2')}</li>
          <li>{t('sections.5.categories.items.3')}</li>
        </ul>
        <p>{t('sections.5.control')}</p>
      </LegalSection>

      <LegalSection number="6" title={t('sections.6.title')}>
        <p>{t('sections.6.description')}</p>
        <ul>
          <li>{t('sections.6.providers.0')}</li>
          <li>{t('sections.6.providers.1')}</li>
          <li>{t('sections.6.providers.2')}</li>
          <li>{t('sections.6.providers.3')}</li>
          <li>{t('sections.6.providers.4')}</li>
        </ul>
        <p>{t('sections.6.contracts')}</p>
      </LegalSection>

      <LegalSection number="7" title={t('sections.7.title')}>
        <p>{t('sections.7.description')}</p>
      </LegalSection>

      <LegalSection number="8" title={t('sections.8.title')}>
        <ul>
          <li>
            <strong>{t('sections.8.items.0')}</strong> {t('sections.8.items.1')}
          </li>
          <li>
            <strong>{t('sections.8.items.2')}</strong> {t('sections.8.items.3')}
          </li>
          <li>
            <strong>{t('sections.8.items.4')}</strong> {t('sections.8.items.5')}
          </li>
          <li>
            <strong>{t('sections.8.items.6')}</strong>
            {t('sections.8.items.7')}
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="9" title={t('sections.9.title')}>
        <p>{t('sections.9.description.0')}</p>
        <p className="note">{t('sections.9.description.1')}</p>
      </LegalSection>

      <LegalSection number="10" title={t('sections.10.title')}>
        <p>{t('sections.10.description')}</p>
        <ul>
          <li>{t('sections.10.rights.0')}</li>
          <li>{t('sections.10.rights.1')}</li>
          <li>{t('sections.10.rights.2')}</li>
          <li>{t('sections.10.rights.3')}</li>
          <li>{t('sections.10.rights.4')}</li>
        </ul>
        <p>
          {t('sections.10.requests.0')}
          <a
            href="mailto:seven.flows.studio@gmail.com"
            className="primary-link"
          >
            seven.flows.studio@gmail.com
          </a>
          . {t('sections.10.requests.1')}
        </p>
      </LegalSection>

      <LegalSection number="11" title={t('sections.11.title')}>
        <h3>{t('sections.11.instructions.title')}</h3>
        <p>{t('sections.11.instructions.description')}</p>

        <h3>{t('sections.11.subprocessors.title')}</h3>
        <p>{t('sections.11.subprocessors.description')}</p>

        <h3>{t('sections.11.incidents.title')}</h3>
        <p>{t('sections.11.incidents.description')}</p>

        <h3>{t('sections.11.termination.title')}</h3>
        <p>{t('sections.11.termination.description')}</p>
      </LegalSection>

      <LegalSection number="12" title={t('sections.12.title')}>
        <p>{t('sections.12.description')}</p>
      </LegalSection>

      <LegalSection number="13" title={t('sections.13.title')}>
        <p>{t('sections.13.description')}</p>
      </LegalSection>

      <LegalSection number="14" title={t('sections.14.title')}>
        <p>{t('sections.14.description')}</p>
      </LegalSection>

      <LegalSection number="" title={t('legalNote.title')}>
        <p>
          {t('legalNote.description')}
          <a
            href="mailto:seven.flows.studio@gmail.com"
            className="primary-link"
          >
            seven.flows.studio@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
