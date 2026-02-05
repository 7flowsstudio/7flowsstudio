import Image from 'next/image';
import { Link } from '@/i18n/routing';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link
      href="/#hero"
      className={s.logo}
      aria-label="7Flows Studio — головна"
      data-testid="header-logo"
    >
      <Image
        src="/logo.svg"
        alt="7Flows Studio"
        width={116}
        height={42}
        priority
      />
    </Link>
  );
};

export default Logo;
