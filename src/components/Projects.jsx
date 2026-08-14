import styles from './Projects.module.css';

export default function Projects() {
  const projectGroups = [
    {
      category: 'AI / GenAI',
      items: [
        {
          title: 'AI Chatbot',
          description: 'Conversational AI project focused on practical product interactions and assistant-style experiences.',
          problem: 'Generic chat flows often fail to feel useful when they are not connected to product context or real user intent.',
          solution: 'Built an LLM-based chatbot experience with a clear product-oriented interaction model, focused on useful and context-aware replies.',
          tech: ['React', 'Node.js', 'LLM API', 'AI Chatbot'],
          github: 'https://github.com/bhuvan120/AI-bot',
          demo: 'https://github.com/bhuvan120/AI-bot',
          status: 'AI Project',
        },
        {
          title: 'RAG Application — In Progress',
          description: 'Currently exploring Retrieval-Augmented Generation using LLMs, embeddings and vector databases.',
          problem: 'Static prompt-based AI responses can miss relevant document context from real business data.',
          solution: 'Experimenting with document ingestion, chunking, embeddings, retrieval and context-aware generation for LLM-powered answers.',
          tech: ['Python', 'Embeddings', 'Vector DB', 'LLM', 'RAG'],
          github: 'https://github.com/bhuvan120/AI-bot',
          demo: 'https://github.com/bhuvan120/AI-bot',
          status: 'In Progress',
        },
      ],
    },
    {
      category: 'Full-Stack',
      items: [
        {
          title: 'ClientEV',
          description: 'Client-focused full-stack web application built to deliver a responsive product experience and usable business workflow.',
          problem: 'The client needed a polished product interface with an efficient, maintainable web application behind it.',
          solution: 'Developed a full-stack front end and application structure designed for responsiveness, usability and client-facing delivery.',
          tech: ['React', 'Full-Stack', 'Web App', 'Responsive UI'],
          github: 'https://github.com/bhuvan120/ClientEV-',
          demo: 'https://github.com/bhuvan120/ClientEV-',
          status: 'Client Project',
        },
        {
          title: 'SocialTek Internship Work',
          description: 'Built and maintained full-stack features using React, Spring Boot and MySQL during a professional internship.',
          problem: 'The product needed responsive interfaces, reliable backend endpoints and efficient data handling for operational workflows.',
          solution: 'Developed reusable UI components, optimized SQL queries and improved backend response performance while shipping features in Agile sprints.',
          tech: ['React', 'Spring Boot', 'MySQL', 'Java', 'Git'],
          github: 'https://github.com/bhuvan120',
          demo: 'https://github.com/bhuvan120',
          status: 'Internship',
        },
      ],
    },
    {
      category: 'Frontend / Freelance',
      items: [
        {
          title: 'Restaurant Website — resta',
          description: 'Responsive restaurant website designed for a food brand with strong menu visibility and mobile-friendly browsing.',
          problem: 'A local restaurant needed a cleaner digital presence and a website that communicated its offerings clearly.',
          solution: 'Implemented a polished frontend experience tailored for menu browsing, branding and easy mobile access.',
          tech: ['React', 'Responsive Design', 'UI', 'CSS'],
          github: 'https://github.com/bhuvan120/resta',
          demo: 'https://github.com/bhuvan120/resta',
          status: 'Freelance',
        },
        {
          title: 'Ice Cream Store — Bussin Scoops',
          description: 'Client website focused on brand presentation, menu accessibility and mobile usability.',
          problem: 'The business wanted a more professional digital identity with a smoother customer experience.',
          solution: 'Implemented a visually appealing storefront and responsive front-end tailored for browsing on mobile and desktop.',
          tech: ['React', 'Frontend', 'CSS', 'UX'],
          github: 'https://github.com/bhuvan120/the-bussin-scoop-site',
          demo: 'https://github.com/bhuvan120/the-bussin-scoop-site',
          status: 'Freelance',
        },
      ],
    },
  ];

  return (
    <section className={styles.projects} id="projects" aria-label="Project portfolio section">
      <div className="container">
        <div className="sectionHeader">
          <span className="kicker">Projects</span>
          <h2>Full-stack applications and AI projects.</h2>
          <p>
            I build products with a clear purpose: solve user problems, connect interfaces and data, and explore useful AI integrations.
          </p>
        </div>

        <div className={styles.groupedProjects}>
          {projectGroups.map((group) => (
            <div key={group.category} className={styles.groupBlock}>
              <div className={styles.groupTitleRow}>
                <h3>{group.category}</h3>
              </div>

              <div className={styles.grid}>
                {group.items.map((project) => (
                  <article key={project.title} className={styles.projectCard}>
                    <div className={styles.cardTop}>
                      <span className={styles.projectTag}>{project.status}</span>
                    </div>

                    <h4>{project.title}</h4>
                    <p className={styles.summary}>{project.description}</p>

                    <div className={styles.block}>
                      <span className={styles.blockLabel}>Problem</span>
                      <p>{project.problem}</p>
                    </div>

                    <div className={styles.block}>
                      <span className={styles.blockLabel}>Solution</span>
                      <p>{project.solution}</p>
                    </div>

                    <div className={styles.techList}>
                      {project.tech.map((item) => (
                        <span key={item} className={styles.techChip}>{item}</span>
                      ))}
                    </div>

                    <div className={styles.cardActions}>
                      <a href={project.demo} className={styles.primaryAction}>View Project</a>
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.secondaryAction}>GitHub</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
