'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import styles from './LegalPageLayout.module.css';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  const t = useTranslations('Footer');
  return (
    <div className={styles.container}>
      {/* Purple gradient orbs */}
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            <Image src="/logo.svg" alt="7Flows Studio" width={90} height={35} />
          </Link>

          <nav className={styles.nav}>
            <Link href="/policy" className={styles.navLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.navLink}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>
          <span className={styles.accent}>•</span> {title}
        </h1>
        <div className={styles.content}>{children}</div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>© 2026 7flows.studio</span>
          <a
            href="mailto:seven.flows.studio@gmail.com"
            className={styles.footerLink}
          >
            seven.flows.studio@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LegalPageLayout;
