import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      tagline: 'Scalable full-stack marketplace',
      problem: 'Built a modern e-commerce platform from scratch to serve merchants with inventory management, payment processing, and customer analytics.',
      approach: 'Used React + TypeScript for frontend, Node.js/Express for backend, PostgreSQL for relational data, and Redis for caching. Implemented lazy-loading for product images and optimized bundle size to 45KB gzipped.',
      decisions: [
        'Selected PostgreSQL over NoSQL for ACID compliance and complex queries',
        'Implemented client-side state with Redux Toolkit to avoid prop drilling across 40+ components',
        'Used Next.js Image component for 3x faster image loading',
        'Debounced search queries to reduce API calls by 80%'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      learning: 'Learned importance of database normalization and query optimization. Discovered that premature optimization is a trap — profiled real user data first.',
      github: 'https://github.com/yourusername/ecommerce-platform',
      status: 'Production'
    },
    {
      id: 2,
      title: 'Real-time Analytics Dashboard',
      tagline: 'Live data visualization with WebSocket',
      problem: 'Needed a dashboard to visualize streaming metrics from multiple services without polling. Existing solutions were either too heavy or too expensive.',
      approach: 'Built with React + Chart.js + WebSocket. Server sends delta updates, not full data snapshots. Frontend reconciles state efficiently using a custom hook for subscriptions.',
      decisions: [
        'Used WebSocket instead of polling to reduce server load by 90%',
        'Implemented message compression to cut bandwidth by 70%',
        'Built custom React hook for subscription management to keep logic isolated',
        'Used Web Worker for heavy chart re-renders'
      ],
      tech: ['React', 'WebSocket', 'Chart.js', 'Node.js', 'AWS EC2'],
      learning: 'Realized that "real-time" doesn\'t always mean instant. Users were happy with 2-second latency vs. pure real-time, saving significant complexity.',
      github: 'https://github.com/yourusername/analytics-dashboard',
      status: 'Production'
    },
    {
      id: 3,
      title: 'Component Library',
      tagline: 'Reusable, accessible UI system',
      problem: 'Teams were rebuilding the same buttons, modals, and inputs across projects. Needed a single source of truth with strict accessibility standards.',
      approach: 'Created component library with Storybook, TypeScript, and CSS Modules. Each component documented with usage patterns, accessibility notes, and visual regression tests.',
      decisions: [
        'Used CSS Modules over CSS-in-JS for better bundle size and dev experience',
        'Enforced Storybook stories as documentation first, code second',
        'Added ARIA labels to every interactive element (WCAG AA)',
        'Versioned with semantic versioning to prevent breaking changes'
      ],
      tech: ['React', 'TypeScript', 'Storybook', 'Vitest', 'CSS Modules'],
      learning: 'Documentation matters more than perfection. Teams adopted it only when we added copy-paste examples to Storybook.',
      github: 'https://github.com/yourusername/component-library',
      status: 'Ongoing'
    }
  ];

  return (
    <section className={styles.projects} id="projects" aria-label="Projects section">
      <div className="container">
        <div className={styles.header}>
          <h2>Projects</h2>
          <p>
            Detailed case studies of work I\'m proud of. Problems solved, decisions made, lessons learned.
          </p>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                </div>
                <span className={`${styles.status} ${styles[project.status.toLowerCase()]}`}>
                  {project.status}
                </span>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Problem</h4>
                <p className={styles.sectionContent}>{project.problem}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Approach</h4>
                <p className={styles.sectionContent}>{project.approach}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Key Decisions</h4>
                <ul className={styles.decisionsList}>
                  {project.decisions.map((decision, idx) => (
                    <li key={idx} className={styles.decisionItem}>{decision}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>What I Learned</h4>
                <p className={styles.sectionContent}>{project.learning}</p>
              </div>

              <div className={styles.footer}>
                <div className={styles.tech}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
