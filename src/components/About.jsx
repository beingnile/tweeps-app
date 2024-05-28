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
            At Tweeps, you get top notch snacks and dishes at sweet prices.
          </p>
          <p className={styles.about__description}>
            Your satisfaction is our priority.
          </p>
          <a href='https://www.instagram.com/tweeps_fastfood' className='button'>
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
