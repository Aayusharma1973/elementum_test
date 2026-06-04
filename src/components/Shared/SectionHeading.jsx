import styles from './SectionHeading.module.css';


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
