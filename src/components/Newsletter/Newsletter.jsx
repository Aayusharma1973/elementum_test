import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const ref = useScrollReveal();

  const handleSubscribe = () => {
    alert('Thanks! We\'ll be in touch.');
  };

  return (
    <section id="contact" className={styles.newsletter} ref={ref}>
      <div className={styles.frameSketch} aria-hidden="true" />
      <div className={styles.blobPurple} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className="reveal">
          <h2 className={styles.heading}>
            Subscribe to<br />our newsletter
          </h2>
          <p className={styles.sub}>
            To make your stay special and even more memorable
          </p>
          <button
            className={styles.btn}
            onClick={handleSubscribe}
            aria-label="Subscribe to Elementum newsletter"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
