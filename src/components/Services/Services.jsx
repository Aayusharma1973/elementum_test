import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SERVICES } from '../../data/siteData';
import styles from './Services.module.css';

export default function Services() {
  const ref = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="services" className={styles.services} ref={ref}>
      <svg
        className={styles.curveLine}
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 60 C360 -20, 720 100, 1440 20"
          stroke="#e84343"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
        />
      </svg>

      <div className="container">
        <div className={`${styles.headingBlock} reveal`}>
          <div className={styles.headingBorder}>
            <h2 className={styles.title}>
              What we{' '}
              <span className={styles.titleHighlight}>can</span>
              <br />
              offer you!
            </h2>
          </div>
        </div>

        <ul
          className={`${styles.list} reveal reveal-delay-1`}
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((svc) => (
            <li
              key={svc.id}
              className={[styles.item, expanded === svc.id ? styles.expanded : ''].join(' ')}
              onClick={() => toggle(svc.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggle(svc.id)}
              aria-expanded={expanded === svc.id}
              aria-label={`Service: ${svc.title}`}
            >
              <span className={styles.itemClient}>{svc.client}</span>
              <span className={styles.itemTitle}>{svc.title}</span>
              <span className={styles.itemArrow} aria-hidden="true">
                →
              </span>
              <p className={styles.itemDesc}>{svc.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
