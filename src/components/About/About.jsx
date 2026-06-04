// src/components/About/About.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">

        {/* Row 1 — Tomorrow should be better */}
        <div className={`${styles.row} reveal`}>
          {/* Text */}
          <div className={styles.textSide}>
            <h2 className={styles.heading}>
              <em>Tomorrow</em> should<br />
              be better than{' '}
              <span className={styles.headingHighlight}>today</span>
            </h2>
            <p className={styles.body}>
              We are a team of strategists, designers, communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>
            <a href="#services" className={styles.readMore} aria-label="Read more about our approach">
              Read more <span className={styles.readMoreLine} />
            </a>
          </div>

          {/* Image */}
          <div className={styles.imageSide}>
            <div className={styles.blobBg} aria-hidden="true" />
            <div className={styles.imageCircleWrap}>
              <div className={styles.decorSquare} aria-hidden="true" />
              <div className={styles.imageCircle}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaborating in a meeting"
                  loading="lazy"
                  decoding="async"
                  width={380}
                  height={380}
                />
              </div>
              <div className={styles.decorTriangle} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Row 2 — See how we can help you progress */}
        <div className={`${styles.row} ${styles.reversed} reveal reveal-delay-1`}>
          {/* Image */}
          <div className={styles.imageSide}>
            <div className={styles.imageCircleWrap}>
              <div className={styles.imageCircle}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team members working together at laptops"
                  loading="lazy"
                  decoding="async"
                  width={380}
                  height={380}
                />
              </div>
              <div className={styles.decorTriangle} aria-hidden="true" />
              <span className={styles.imageNameTag}>David</span>
            </div>
          </div>

          {/* Text */}
          <div className={styles.textSide}>
            <h2 className={styles.heading}>
              <em>See</em> how we can<br />
              help you progress
            </h2>
            <p className={styles.body}>
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#services" className={styles.readMore} aria-label="Read more about our services">
              Read more <span className={styles.readMoreLine} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
