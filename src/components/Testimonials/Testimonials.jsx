import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TESTIMONIALS, TEAM_MEMBERS } from '../../data/siteData';
import styles from './Testimonials.module.css';

const SIDE_AVATARS = TEAM_MEMBERS.slice(0, 7);
const avatarPositions = [
  'avatar-tl', 'avatar-ml', 'avatar-bl',
  'avatar-tr', 'avatar-mr', 'avatar-br', 'avatar-br2',
];

export default function Testimonials() {
  const ref = useScrollReveal();
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
      <div className="container">

        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>
            What our customer<br />
            says{' '}
            <span className={styles.headingUnderline}>About Us</span>
          </h2>
        </div>

        <div className={`${styles.floatAvatars} reveal reveal-delay-1`}>
          {SIDE_AVATARS.map((m, i) => (
            <div
              key={m.id}
              className={`${styles.floatAvatar} ${styles[avatarPositions[i]]}`}
            >
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                decoding="async"
                width={64}
                height={64}
              />
            </div>
          ))}

          <div className={styles.cardOuter} role="region" aria-label="Customer testimonial">
            <div className={styles.cardInner}>
              <div className={styles.mainAvatar}>
                <img
                  src={current.image}
                  alt={current.name}
                  loading="lazy"
                  decoding="async"
                  width={100}
                  height={100}
                />
                <span className={styles.nameTag}>{current.name.split(' ')[0]}</span>
              </div>

              <div className={styles.quoteBlock}>
                <span className={styles.openQuote} aria-hidden="true">"</span>
                <p className={styles.quoteText}>{current.quote}</p>
                <span className={styles.closeQuote} aria-hidden="true">"</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.controls}
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              className={[styles.dot, i === active ? styles.active : ''].join(' ')}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`View testimonial from ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
