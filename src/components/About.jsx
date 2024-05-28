import styles from '../styles/components/About.module.scss';

function About () {
  return (
    <section className={styles.about} id='about'>
      <h3 className='sub-heading'>About us</h3>
      <h1 className='heading'>Why choose us?</h1>

      <div className={styles.about__row}>
        <div className={styles.about__image}>
          <img src='/images/about-img.JPG' alt='' />
        </div>

        <div className={styles.about__content}>
          <h3 className={styles.about__title}>best food in the area</h3>
          <p className={styles.about__description}>
            Have you been served yet? At Tweeps we make sure you leave the stall satisfied. You get top notch snacks and dishes at sweet prices.
          </p>
          <p className={styles.about__description}>
            At Tweeps you get a mouthful of tasty bites and smiles. Visit us today for endless vibes and inshallah. #GrillsHotAt420.
          </p>
          <a href='#' className='button'>
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
