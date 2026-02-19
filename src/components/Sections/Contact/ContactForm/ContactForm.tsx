'use client';
import WrapperForComponents from '@/lib/utils/WrapperForComponents/WrapperForComponents';
import { useTranslations } from 'next-intl';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { ValidationSchemaContact } from '@/lib/utils/validationSchema';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import SuccessModdal from './SuccessModdal/SuccessModdal';

import s from './ContactForm.module.css';

type InitialValuesType = {
  name: string;
  interest: string;
  email: string;
};

const ContactForm = () => {
  const t = useTranslations('Contact');
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hundlerSubmit = async (
    values: InitialValuesType,
    { resetForm }: FormikHelpers<InitialValuesType>,
  ) => {
    const data = {
      name: values.name,
      interest: values.interest,
      email: values.email,
    };

    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage(true);
        resetForm();
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <WrapperForComponents paddingTop={100} paddingBottom={100}>
      <h3 className={s.title}>{t('title')}</h3>
      <Formik
        initialValues={{ name: '', interest: '', email: '' }}
        validationSchema={ValidationSchemaContact}
        onSubmit={hundlerSubmit}
      >
        <Form className={s.form}>
          <p className={s.text}>
            {t('greeting')}
            <span>, 7FLOWS!</span>
          </p>

          <div className={s.wrappInput}>
            <label htmlFor="name" className={s.text}>
              {t('name')}
            </label>

            <Field id="name" name="name" className={s.input} />

            <p className={s.text}>
              <span>&</span>
              {t('me')}
            </p>
          </div>

          <div className={s.wrappInput}>
            <label htmlFor="interest" className={s.text}>
              {t('interest')}
            </label>

            <Field id="interest" name="interest" className={s.input} />

            <span className={s.text}>.</span>
          </div>

          <div className={s.wrappInput}>
            <label htmlFor="email" className={s.text}>
              {t('write')}
            </label>

            <Field id="email" name="email" type="email" className={s.input} />

            <span className={s.text}>.</span>
          </div>

          <button type="submit" className={s.primaryBtn}>
            <span>{isLoading ? t('btn_1') : t('btn')}</span>
            <div className={s.primaryWrapIcon}>
              <svg className={s.iconPrimary}>
                <use href="/sprite.svg#icon-arrow-top-right"></use>
              </svg>
            </div>
          </button>
        </Form>
      </Formik>
      {successMessage && (
        <SuccessModdal setSuccessMessage={setSuccessMessage} />
      )}
      <p className={s.consent}>
        {t('consent')}{' '}
        <Link className={s.link} href="/policy">
          {t('link')}
        </Link>
      </p>
    </WrapperForComponents>
  );
};
export default ContactForm;
