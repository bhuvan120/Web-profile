import React from 'react';
import styles from './Thinking.module.css';

export default function Thinking() {
  const articles = [
    {
      id: 1,
      title: 'How I approach debugging',
      excerpt: 'The best debuggers don\'t jump to fixes. They ask questions first.',
      content: `Debugging is detective work. When something breaks, my first instinct is not to search Stack Overflow. Instead, I:

1. **Reproduce the issue consistently** — If I can't recreate it, I can't fix it.
2. **Isolate the variable** — Does it happen in development but not production? On Chrome but not Firefox? This tells me where to look.
3. **Add constraints** — Use console logs, browser DevTools, and network tabs. Let the data speak instead of guessing.
4. **Never assume** — The bug is rarely where I think it is. A missing \`await\`, a stale closure, a race condition hiding in async code.
5. **Write a test** — Once fixed, I write a test that would have caught this. Future me will thank present me.

The mental model: Every bug is a system failure. The code didn't write itself wrong — my assumptions about how it works were incomplete.`,
      readTime: '4 min'
    },
    {
      id: 2,
      title: 'How I learn new tech',
      excerpt: 'Learning frameworks is overrated. Understanding principles is underrated.',
      content: `New tech gets announced every week. The mistake is trying to learn everything. Instead, I use this framework:

1. **Start with the problem it solves** — Why does this technology exist? What does it fix? If I don't know the problem, I can't evaluate if it's worth learning.
2. **Build something small** — Not a tutorial. A small project where I'm forced to read docs and hit errors.
3. **Read the source or docs** — Tutorials hide implementation. I want to understand why decisions were made.
4. **Steal patterns, not code** — What mental models does this tech introduce? How is error handling done? State management?
5. **Teach it** — Writing about something or explaining it to someone else reveals gaps in my understanding.

Example: Instead of learning "Next.js," I asked "Why would I choose Next.js over Create React App?" The answer (SSR, static generation, API routes) framed my entire learning approach.`,
      readTime: '5 min'
    },
    {
      id: 3,
      title: 'Optimizing React (re-renders, hooks)',
      excerpt: 'Most React is not slow. Bad React is really obvious when you profile.',
      content: `React performance is often blamed for being slow. Usually, it's not React. It's how React is used.

**Understanding re-renders:**
- React components re-render when their state or props change. This is fine.
- React re-renders smartly — Virtual DOM diffing is incredibly fast for most use cases.
- Real problems come from:
  - **Inline functions** — \`onClick={() => doSomething()}\` creates a new function every render, breaking memoization.
  - **Derived state** — Recalculating values from props on every render instead of memoizing with \`useMemo\`.
  - **Missing dependencies** — Forgetting a dependency in \`useEffect\` causes stale closures and unexpected behavior.

**My workflow:**
1. **Profile first** — Use React DevTools Profiler. Don't optimize by gut feeling.
2. **Use \`React.memo\` cautiously** — Only if a component re-renders unnecessarily with stable props.
3. **Extract state down** — Move state as low as possible in the tree. Local state doesn't trigger parent re-renders.
4. **Lazy load components** — Use \`React.lazy()\` for code splitting. Load only what the user sees.
5. **Use keys correctly** — Keys should be unique and stable. Never use array index as a key.

The best optimization is not rendering at all. If you don't need a component to re-render, don't render it.`,
      readTime: '6 min'
    }
  ];

  const [expanded, setExpanded] = React.useState(null);
  return (
    <section className={styles.thinking} id="thinking" aria-label="Engineering thinking section">
      <div className="container">
        <div className={styles.header}>
          <h2>How I think</h2>
          <p>
            Not just what I've built. How I approach problems, learn, and make decisions.
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {articles.map((article) => (
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
