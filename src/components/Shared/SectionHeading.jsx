// src/components/Shared/SectionHeading.jsx
import styles from './SectionHeading.module.css';

/**
 * Reusable section heading with optional highlight word(s)
 * and a subtitle.
 *
 * Usage:
 *   <SectionHeading
 *     highlight="can"
 *     title="What we {can} offer you!"
 *     subtitle="Optional subtitle text"
 *     align="left" | "center"
 *   />
 */
export default function SectionHeading({
  title,
  subtitle,
  highlight,
  align = 'left',
  className = '',
}) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(`{${highlight}}`);
    return (
      <>
        {parts[0]}
        <mark className={styles.mark}>{highlight}</mark>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={[styles.wrapper, styles[align], className].filter(Boolean).join(' ')}
    >
      <h2 className={styles.heading}>{renderTitle()}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
