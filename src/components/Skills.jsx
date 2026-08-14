import styles from './Skills.module.css';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Frontend',
      description: 'Interface design and user experiences built for performance and usability.',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend',
      description: 'Server-side logic, APIs and product infrastructure.',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
    },
    {
      category: 'Programming',
      description: 'Core software development capabilities across modern product workflows.',
      skills: ['JavaScript', 'Java', 'Python', 'SQL'],
    },
    {
      category: 'Databases',
      description: 'Schema design, optimization and working with relational systems.',
      skills: ['MySQL', 'PostgreSQL', 'SQL Optimization'],
    },
    {
      category: 'AI / GenAI',
      description: 'Exploring real-world AI application architecture and product integration.',
      skills: ['LLM Applications', 'AI Chatbots', 'RAG', 'Prompt Engineering', 'AI API Integration'],
    },
    {
      category: 'Tools',
      description: 'Development workflows and delivery practices used in real projects.',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
  ];

  const principles = [
    { title: 'Build', description: 'Create clean and scalable applications.' },
    { title: 'Integrate', description: 'Connect frontend, backend, APIs and databases.' },
    { title: 'Optimize', description: 'Improve performance, reliability and maintainability.' },
    { title: 'Explore', description: 'Experiment with AI, LLMs and RAG to build smarter applications.' },
  ];

  const exploring = [
    'Retrieval-Augmented Generation',
    'Vector Databases',
    'Embeddings',
    'LLM Application Architecture',
    'AI Agents',
    'AI-powered developer tools',
  ];

  return (
    <section className={styles.skills} id="skills" aria-label="Skills section">
      <div className="container">
        <div className="sectionHeader">
          <span className="kicker">Technical Skills</span>
          <h2>Build systems. Integrate APIs. Explore AI.</h2>
          <p>
            My work spans frontend engineering, backend services, database work and AI-powered product experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => (
            <div key={idx} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <p className={styles.groupDesc}>{group.description}</p>
              <div className={styles.skillList}>
                {group.skills.map((skill, sidx) => (
                  <span key={sidx} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.principlesCard}>
            <span className="kicker">How I Build</span>
            <div className={styles.principlesWrap}>
              {principles.map((item) => (
                <div key={item.title} className={styles.principle}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.exploringCard}>
            <span className="kicker">Currently Exploring</span>
            <ul>
              {exploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
