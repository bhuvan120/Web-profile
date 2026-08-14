import styles from './Experience.module.css';

export default function Experience() {
  const timeline = [
    {
      year: '2021',
      period: 'Freshman year',
      title: 'Started learning web development',
      description: 'Took first CS course. Built a todo app in vanilla JavaScript. Realized I enjoyed frontend more than algorithms (for now).',
      color: 'blue'
    },
    {
      year: '2022',
      period: 'Junior year',
      title: 'First internship — Frontend developer',
      description: 'Worked on internal tools at a startup. Migrated legacy jQuery to React. Learned the cost of technical debt and why code reviews matter.',
      color: 'purple'
    },
    {
      year: '2023',
      period: 'Summer',
      title: 'Freelance projects',
      description: 'Built 3 client websites. Learned real-world constraints: timelines, scope creep, and communication. Shipped products faster than in larger teams.',
      color: 'green'
    },
    {
      year: '2025',
      period: 'Fall',
      title: 'Graduated ( Computer Science)',
      description: 'Thesis on optimizing React re-renders. Realized frameworks are just tools — fundamentals matter more.',
      color: 'blue'
    },
    {
      year: '2026',
      period: 'Present',
      title: 'Building in public',
      description: 'Exploring full-stack development. Working on personal projects, writing about optimization, and mentoring junior developers.',
      color: 'green'
    }
  ];

  return (
    <section className={styles.experience} id="experience" aria-label="Experience timeline">
      <div className="container">
        <div className={styles.header}>
          <h2>Journey</h2>
          <p>
            Learning path. Real work, real mistakes, real growth.
          </p>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={`${styles.marker} ${styles[item.color]}`} />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.year}>{item.year}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
