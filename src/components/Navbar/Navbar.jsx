// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { useNavScroll } from '../../hooks/useNavScroll';
import { NAV_LINKS } from '../../data/siteData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useNavScroll(60);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            Elementum
          </a>

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.ctaWrap}>
            <a href="#contact" className={styles.ctaBtn}>
              Contact us
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={[styles.burger, open ? styles.open : ''].join(' ')}
            onClick={toggleMenu}
            aria-expanded={open}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[styles.drawer, open ? styles.open : ''].join(' ')}
        aria-hidden={!open}
      >
        <nav>
          <ul className={styles.drawerLinks} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.drawerLink} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.drawerCta}>
            <a
              href="#contact"
              className={styles.ctaBtn}
              onClick={closeMenu}
            >
              Contact us →
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
