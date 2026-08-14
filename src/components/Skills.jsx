import styles from './Skills.module.css';

export default function Skills() {
  const skillGroups = [
    {
      category: 'What I build',
      description: 'Modern, performant user experiences',
      skills: ['React', 'TypeScript', 'CSS/Tailwind', 'Express.js' 'Responsive Design', 'Web Performance']
    },
    {
      category: 'What I understand',
      description: 'Core concepts, not just frameworks',
      skills: ['JavaScript fundamentals', 'Component architecture', 'State management', 'REST APIs', 'Database design']
    },
    {
      category: 'What I\'m improving',
      description: 'Actively learning and practicing',
      skills: ['Next.js & SSR', 'GraphQL', 'Testing (Jest, Vitest)', 'DevOps basics', 'System design']
    }
  ];

  return (
    <section className={styles.skills} id="skills" aria-label="Skills section">
      <div className="container">
        <div className={styles.header}>
          <h2>Skills</h2>
          <p>
            Not a exhaustive list. Focused on what I've built with, and what I understand deeply.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => (
            <div key={idx} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <p className={styles.groupDesc}>{group.description}</p>
              <ul className={styles.skillList}>
                {group.skills.map((skill, sidx) => (
                  <li key={sidx} className={styles.skillItem}>
                    <span className={styles.skillDot} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
