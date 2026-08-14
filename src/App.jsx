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
        <Experience />
        <Thinking />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="siteFooter">
        <p>© 2026 Karanam Bhuvanesh. Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
