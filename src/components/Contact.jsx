import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-label="Contact section">
      <div className="container">
        <div className={styles.content}>
          <h2>Get in touch</h2>
          <p>
            I'm always interested in talking about engineering challenges, new ideas, or opportunities to build together.
          </p>

          <div className={styles.contactGrid}>
            <a 
              href="mailto:karanambhuvanesh@gmail.com" 
              className={styles.contactCard}
              aria-label="Send email to hello@example.com"
            >
              <span className={styles.contactIcon}>✉</span>
              <div>
                <h3>Email</h3>
                <p>karanambhuvaneh@example.com</p>
              </div>
            </a>

            <a 
              href="https://github.com/bhuvan120" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
              aria-label="Visit GitHub profile"
            >
              <span className={styles.contactIcon}>⚙</span>
              <div>
                <h3>GitHub</h3>
                <p>bhuvan120</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/karanambhuvanesh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
              aria-label="Visit LinkedIn profile"
            >
              <span className={styles.contactIcon}>💼</span>
              <div>
                <h3>LinkedIn</h3>
                <p>Karanam Bhuvanesh</p>
              </div>
            </a>
          </div>

          <div className={styles.footer}>
            <p>Built with React + Vite. No framework bloat, no tracking, just clean code.</p>
            <a href="https://github.com/bhuvan120/Web-profile" target="_blank" rel="noopener noreferrer">
              View source on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
