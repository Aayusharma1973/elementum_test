// src/components/Hero/Hero.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TEAM_MEMBERS } from '../../data/siteData';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className={styles.hero} ref={ref}>
      {/* Decorative shapes */}
      <div className={styles.shapePurple} aria-hidden="true" />
      <div className={styles.shapeBoxLeft} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* Red-bordered headline card */}
          <div className={`${styles.headlineWrap} reveal`}>
            <h1 className={styles.headline}>
              <span className={styles['hl-plain']}>The </span>
              <span className={styles['hl-underline']}>thinkers</span>
              <span className={styles['hl-plain']}> and</span>
              <br />
              <span className={styles['hl-plain']}>doers were changing</span>
              <br />
              <span className={styles['hl-plain']}>the </span>
              <span className={styles['hl-pill']}>status</span>
              <span className={styles['hl-plain']}> Quo with</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`${styles.subtitle} reveal reveal-delay-1`}>
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to play
            things safe.
          </p>

          {/* Team member images */}
          <div
            className={`${styles.teamRow} reveal reveal-delay-2`}
            role="list"
            aria-label="Team members"
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className={[
                  styles.teamAvatar,
                  member.highlighted ? styles.featured : '',
                ].join(' ')}
                role="listitem"
                title={member.name}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={120}
                />
                {member.highlighted && (
                  <span className={styles.nameTag}>{member.name.split(' ')[0]}</span>
                )}
                <span className={styles.badge}>{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
