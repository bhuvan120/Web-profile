import styles from './Landing.module.css';

const capabilities = ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'LLM Apps', 'RAG'];

export default function Landing() {
  return (
    <section className={styles.landing} id="home" aria-label="Hero section">
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.textBlock}>
            <span className={styles.eyebrow}>Full-Stack Developer · AI Developer</span>
            <h1 className={styles.heading}>Building scalable web applications and intelligent AI experiences.</h1>
            <p className={styles.subtitle}>
              I&apos;m Bhuvanesh, a Full-Stack Developer focused on React, Node.js and AI-powered applications.
              I build modern web products, intelligent chatbots and explore RAG and LLM-based systems.
            </p>

            <div className={styles.ctaRow}>
              <a href="#projects" className={styles.primaryButton}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Let&apos;s Connect
              </a>
              <a
                href="mailto:karanambhuvanesh@gmail.com?subject=Resume%20Request"
                className={styles.ghostButton}
              >
                Download Resume
              </a>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Education</span>
                <span className={styles.metaValue}>B.Tech CSE (AI), Parul University • 2025</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>Full-Stack Intern at SocialTek</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Focus</span>
                <span className={styles.metaValue}>React, APIs, AI apps, RAG</span>
              </div>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.panelTitle}>ai-workspace</span>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeLine}>const stack = [</div>
                <div className={styles.codeLine}>  &apos;React&apos;, &apos;Node.js&apos;, &apos;Spring Boot&apos;,</div>
                <div className={styles.codeLine}>  &apos;MySQL&apos;, &apos;AI integrations&apos;, &apos;RAG&apos;</div>
                <div className={styles.codeLine}>];</div>
              </div>

              <div className={styles.nodeGrid}>
                <div className={styles.node}><span>Frontend</span></div>
                <div className={styles.node}><span>API</span></div>
                <div className={styles.node}><span>DB</span></div>
                <div className={styles.node}><span>LLM</span></div>
              </div>

              <div className={styles.connectionRow}>
                {capabilities.map((capability) => (
                  <span key={capability} className={styles.pill}>{capability}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
