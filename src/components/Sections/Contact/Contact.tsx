"use client";
import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaContact } from "@/lib/utils/validationSchema";
import s from "./Contact.module.css";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <WrapperForComponents paddingTop={100} paddingBottom={100}>
      <h3>{t("title")}</h3>
      <Formik
        initialValues={{ name: "", interest: "", email: "" }}
        validationSchema={ValidationSchemaContact}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <p>
            {t("greeting")}
            <span>, 7FLOWS!</span>
          </p>

          <p>{t("name")}</p>
          <Field name="name" />

          <p>
            <span>&</span>
            {t("me")}
          </p>

          <p>{t("interest")}</p>
          <Field name="interest" />

          <p>{t("write")}</p>
          <Field name="email" type="email" />

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
export default Contact;
