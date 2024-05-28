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
          <a href='#home' className={styles.footer__link}>
            Home
          </a>
          <a href='#menu' className={styles.footer__link}>
            Menu
          </a>
          <a href='#about' className={styles.footer__link}>
            About
          </a>
          <a href='#reviews' className={styles.footer__link}>
            Reviews
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>Contact info</h3>
          <a href='tel:+254794008600' className={styles.footer__link}>
            +254794008600
          </a>
          <a href='tel:+254705704788' className={styles.footer__link}>
            +254705704788
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>follow us</h3>
          <a href='https://twitter.com/tweeps_2024' className={styles.footer__link}>
            Twitter
          </a>
          <a href='https://www.instagram.com/tweeps_fastfood' className={styles.footer__link}>
            Instagram
          </a>
          <a href='https://chat.whatsapp.com/FwbHnAsSLBxHRFtIdGds2t' className={styles.footer__link}>
            WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        Copyright @ 2024 by {'Tweeps™'}
      </div>
    </footer>
  );
}

export default Footer;
