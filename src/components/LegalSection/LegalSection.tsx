import styles from './LegalSection.module.css'

interface LegalSectionProps {
  number?: string
  title: string
  children: React.ReactNode
}

const LegalSection = ({ number, title, children }: LegalSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {number && <span className={styles.number}>{number}.</span>}
        {title}
      </h2>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

export default LegalSection
