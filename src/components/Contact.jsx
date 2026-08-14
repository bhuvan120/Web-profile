import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-label="Contact section">
      <div className="container">
        <div className={styles.content}>
          <span className="kicker">Contact</span>
          <h2>Let&apos;s build something intelligent.</h2>
          <p>
            Whether you&apos;re looking for a developer to build a web application, integrate AI into a product, or explore an intelligent application idea, I&apos;d be happy to connect.
          </p>

          <div className={styles.contactGrid}>
            <a
              href="mailto:karanambhuvanesh@gmail.com"
              className={styles.contactCard}
              aria-label="Send email to Karanam Bhuvanesh"
            >
              <span className={styles.contactIcon}>✉</span>
              <div>
                <h3>Email</h3>
                <p>karanambhuvanesh@gmail.com</p>
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
            <p>Based in Hyderabad, India. Open to product, web and AI-focused opportunities.</p>
            <a href="https://github.com/bhuvan120/Web-profile" target="_blank" rel="noopener noreferrer">
              View source on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
