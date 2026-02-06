import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Thinking from './components/Thinking';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './styles/globals.css';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Landing />
        <Skills />
        <Projects />
        <Experience />
        <Thinking />
        <Contact />
      </main>
      <footer style={{ 
        padding: 'var(--space-lg)', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        color: 'var(--text-tertiary)',
        fontSize: 'var(--text-sm)'
      }}>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
