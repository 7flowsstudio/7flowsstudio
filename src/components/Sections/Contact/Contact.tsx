import ContactForm from "./ContactForm/ContactForm";
import s from "./Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="form" className={s.wrappContact}>
      <Image
        src="/img/contact/backk.png"
        alt="Background"
        fill
        priority
        className={s.imgBack}
      />
      <ContactForm />
    </div>
  );
};
export default Contact;
