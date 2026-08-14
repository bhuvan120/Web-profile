import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#experience' },
    { label: 'Thinking', href: '#thinking' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} aria-label="Home">
          Karanam Bhuvanesh
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
