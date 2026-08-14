import styles from './Experience.module.css';

const timeline = [
  {
    year: '2025',
    title: 'B.Tech — Computer Science (AI)',
    detail: 'Parul University',
    description: 'Completed a Computer Science degree with AI specialization, building the foundation for software engineering, data-driven systems and intelligent applications.',
    color: 'blue',
  },
  {
    year: 'Sep 2025 – Mar 2026',
    title: 'Full-Stack Developer Intern — SocialTek',
    detail: 'React · Spring Boot · MySQL',
    description: 'Developed and maintained full-stack web features, built reusable React components and worked on API and database optimizations across product workflows.',
    color: 'purple',
  },
  {
    year: '2026 – Present',
    title: 'Freelance Development + AI Exploration',
    detail: 'React · Node.js · AI Apps',
    description: 'Working independently on client projects while expanding into AI-powered software, LLM integrations and RAG-focused experimentation.',
    color: 'green',
  },
];

const strengths = [
  'AI-focused full-stack developer exploring LLMs, RAG and intelligent applications.',
  'Hands-on React and Node.js experience with API and database integration.',
  'Freelance experience building websites and application interfaces for clients.',
  'Strong interest in modern AI product development and practical GenAI workflows.',
];

export default function Experience() {
  return (
    <section className={styles.experience} id="about" aria-label="About and career experience">
      <div className="container">
        <div className={styles.topGrid}>
          <div className={styles.aboutCard}>
            <span className="kicker">About</span>
            <h2>Full-stack developer building modern products and AI experiences.</h2>
            <p>
              I am a B.Tech graduate in Computer Science with AI specialization from Parul University, currently positioning myself as a
              Full-Stack Developer and AI Developer focused on React, Node.js, API design, databases and intelligent product experiences.
            </p>
            <p>
              My work blends frontend engineering with backend development, database optimization and AI-powered functionality. I enjoy building
              practical software products and experimenting with LLM-based systems, chatbots, and retrieval-augmented generation workflows.
            </p>
          </div>

          <div className={styles.snapshotCard}>
            <h3>Career Snapshot</h3>
            <ul>
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.timelineWrap} id="experience">
          <div className="sectionHeader">
            <span className="kicker">Experience</span>
            <h2>Professional journey.</h2>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={`${styles.marker} ${styles[item.color]}`} />
                <div className={styles.content}>
                  <div className={styles.metaRow}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.detail}>{item.detail}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.educationCard}>
          <div>
            <span className={styles.label}>Education</span>
            <h3>B.Tech — Computer Science (AI)</h3>
            <p>Parul University</p>
          </div>

          <div className={styles.educationMeta}>
            <span>2025</span>
            <strong>CGPA: 7.32/10</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
