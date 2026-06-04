
import { FOOTER_LINKS } from '../../data/siteData';
import styles from './Footer.module.css';

export default function Footer() {
  const { company, termsLeft, social, contact } = FOOTER_LINKS;
  const year = new Date().getFullYear();

  return (
    <footer id="faqs" className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.col}>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.colList} role="list">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.colLink}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Terms &amp; Policies</p>
            <ul className={styles.colList} role="list">
              {termsLeft.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.colLink}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Follow Us</p>
            <ul className={styles.colList} role="list">
              {social.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.colLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Terms &amp; Policies</p>
            <address className={`${styles.contact}`} style={{ fontStyle: 'normal' }}>
              <span className={styles.contactLine}>{contact.address}</span>
              <a href={`tel:${contact.phone}`} className={styles.contactLink}>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
            </address>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <a href="#home" className={styles.logo}>Elementum</a>
          <span>© {year} Elementum. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
