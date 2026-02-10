import Image from "next/image";
import Link from "next/link";
import s from "./Logo.module.css";

type LogoProps = {
  variant?: "header" | "footer";
};

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`${s.logo} ${isFooter ? s.logoFooter : ""}`}
      aria-label="7Flows Studio — головна"
      data-testid="header-logo"
    >
      <Image
        src={isFooter ? "/logo.svg" : "/logo.svg"}
        alt="7Flows Studio"
        width={isFooter ? 60 : 116}
        height={isFooter ? 22 : 42}
        priority={!isFooter}
      />
    </Link>
  );
};

export default Logo;
