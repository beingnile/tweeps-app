import styles from '../styles/components/Footer.module.scss';

function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>Locations</h3>
          <a href='#' className={styles.footer__link}>
            Moiben plaza, Baraton, Kenya
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>Quick links</h3>
          <a href='#' className={styles.footer__link}>
            Home
          </a>
          <a href='#' className={styles.footer__link}>
            Menu
          </a>
          <a href='#' className={styles.footer__link}>
            About
          </a>
          <a href='#' className={styles.footer__link}>
            Reviews
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>Contact info</h3>
          <a href='#' className={styles.footer__link}>
            +254794008600
          </a>
          <a href='#' className={styles.footer__link}>
            +254705704788
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>follow us</h3>
          <a href='#' className={styles.footer__link}>
            Twitter
          </a>
          <a href='#' className={styles.footer__link}>
            Instagram
          </a>
          <a href='#' className={styles.footer__link}>
            WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        Copyright @ 2024 by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='#'
        >
          Tweeps
        </a>
      </div>
    </footer>
  );
}

export default Footer;
