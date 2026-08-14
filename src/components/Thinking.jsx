import { useState } from 'react';
import styles from './Thinking.module.css';

export default function Thinking() {
  const focusAreas = [
    {
      id: 1,
      title: 'AI Chatbots',
      excerpt: 'AI-powered chatbot functionality for data-aware product experiences.',
      content: 'I have worked with chatbot-style AI interactions where the system needs to respond in a way that is informed by application context, not just generic model output. This includes conversational experiences and practical user support flows connected to product data.',
      readTime: '4 min',
    },
    {
      id: 2,
      title: 'RAG Systems',
      excerpt: 'Retrieval-augmented generation is where context-aware AI becomes more useful.',
      content: 'User Query → Embedding → Vector Database → Relevant Documents → Context → LLM → AI Response. I am currently exploring how retrieval, embeddings, chunking and vector storage can improve answer quality and relevance in real product workflows.',
      readTime: '5 min',
    },
    {
      id: 3,
      title: 'LLM Applications',
      excerpt: 'Using LLM APIs, prompt engineering and structured outputs in practical product design.',
      content: 'I am exploring LLM APIs, prompt design, context-aware responses and AI application architecture. The goal is to build software that uses AI in a way that is useful, traceable and product-aware rather than purely experimental.',
      readTime: '3 min',
    },
    {
      id: 4,
      title: 'AI Developer Journey',
      excerpt: 'Traditional Web Development → Full Stack → AI Integration → RAG → Intelligent Applications.',
      content: 'My direction is clear: I want to continue growing from full-stack engineering into intelligent software and AI-powered product development, with an emphasis on practical, real-world applications that combine frontend, backend and model-driven capabilities.',
      readTime: '2 min',
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <section className={styles.thinking} id="ai" aria-label="AI and engineering focus section">
      <div className="container">
        <div className="sectionHeader">
          <span className="kicker">AI / GenAI</span>
          <h2>Building with AI.</h2>
          <p>
            Exploring how modern AI can be integrated into real-world software products.
          </p>
        </div>

        <div className={styles.architecture} aria-label="RAG architecture flow">
          <div className={styles.flowRow}>
            <span>User Query</span>
            <span className={styles.arrow}>↓</span>
            <span>Embedding</span>
            <span className={styles.arrow}>↓</span>
            <span>Vector Database</span>
            <span className={styles.arrow}>↓</span>
            <span>Relevant Documents</span>
            <span className={styles.arrow}>↓</span>
            <span>Context</span>
            <span className={styles.arrow}>↓</span>
            <span>LLM</span>
            <span className={styles.arrow}>↓</span>
            <span>AI Response</span>
          </div>
        </div>

        <div className={styles.articlesGrid}>
          {focusAreas.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.articleHeader}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <span className={styles.readTime}>{article.readTime} read</span>
              </div>

              <p className={styles.excerpt}>{article.excerpt}</p>

              <button
                className={styles.expandButton}
                onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                aria-expanded={expanded === article.id}
                aria-label={`${expanded === article.id ? 'Collapse' : 'Expand'} "${article.title}"`}
              >
                {expanded === article.id ? 'Read less' : 'Read more'}
              </button>

              {expanded === article.id && (
                <div className={styles.fullContent}>
                  <p className={styles.contentText}>{article.content}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
