import WrapperForComponents from "@/lib/utils/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <WrapperForComponents paddingTop={100} paddingBottom={100}>
      <h3>{t("title")}</h3>
      <p>
        {t("greeting")}
        <span>, 7FLOWS!</span>
      </p>
      <p>{t("name")}</p>
      <p>
        <span>&</span>
        {t("me")}
      </p>
      <p>{t("interest")}</p>
      <p>{t("write")}</p>
      <button>{t("btn")}</button>
    </WrapperForComponents>
  );
};
export default Contact;
