import styles from './Landing.module.css';

export default function Landing() {
  return (
    <section className={styles.landing} aria-label="Hero section">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>
              Building products that scale.
              <br />
              Thinking in systems.
            </h1>

            <p className={styles.subtitle}>
              CS graduate. Full-stack engineer with focus on frontend. Built production systems
              serving users. Learn fast, ship thoughtfully.
            </p>

            <div className={styles.cta}>
              <a href="#projects" className={styles.primaryButton}>
                See my work
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get in touch
              </a>
            </div>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Skills</span>
              <span className={styles.metaValue}>React, Express.js, Node.js,SQL, MongoDB,  Full-stack</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Based in</span>
              <span className={styles.metaValue}>Remote</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Currently</span>
              <span className={styles.metaValue}>Building in public</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
