"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaContact } from "@/lib/utils/validationSchema";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const t = useTranslations("Contact");
  return (
    <WrapperForComponents paddingTop={100} paddingBottom={100}>
      <h3 className={s.title}>{t("title")}</h3>
      <Formik
        initialValues={{ name: "", interest: "", email: "" }}
        validationSchema={ValidationSchemaContact}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className={s.form}>
          <p className={s.text}>
            {t("greeting")}
            <span>, 7FLOWS!</span>
          </p>
          <div className={s.wrappInput}>
            <p className={s.text}>{t("name")}</p>
            <Field name="name" className={s.input} />

            <p className={s.text}>
              <span className={s.text}>&</span>
              {t("me")}
            </p>
          </div>
          <div className={s.wrappInput}>
            <p className={s.text}>{t("interest")}</p>
            <Field name="interest" className={s.input} />
            <span className={s.text}>.</span>
          </div>
          <div className={s.wrappInput}>
            <p className={s.text}>{t("write")}</p>
            <Field name="email" type="email" className={s.input} />
            <span className={s.text}>.</span>
          </div>
          <button type="submit" className={s.primaryBtn}>
            <span>{t("btn")}</span>
            <div className={s.primaryWrapIcon}>
              <svg className={s.iconPrimary}>
                <use href="/sprite.svg#icon-arrow-top-right"></use>
              </svg>
            </div>
          </button>
        </Form>
      </Formik>
    </WrapperForComponents>
  );
};
export default ContactForm;
