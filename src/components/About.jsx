import styles from '../styles/components/About.module.scss';

function About () {
  return (
    <section className={styles.about} id='about'>
      <h3 className='sub-heading'>About us</h3>
      <h1 className='heading'>Why choose us?</h1>

      <div className={styles.about__row}>
        <div className={styles.about__image}>
          <img src='/images/about-lawson.jpg' alt='Tweeps staff' />
        </div>

        <div className={styles.about__content}>
          <h3 className={styles.about__title}>best food in the area</h3>
          <p className={styles.about__description}>
            Food is what brings people together. At Tweeps™, we ensure top-notch customer service and also get to know each other not only as customers but also as a network, building a sense of family.
          </p>
          <p className={styles.about__description}>
            Our focus is on creating good moments. At Tweeps™ fast food kitchen, we achieve this by offering a variety of nutritious meals at affordable prices. We infuse an African touch into our recipes, menu, and spices, embracing a natural feeling in our delicacies.
          </p>
          <p className={styles.about__description}>
	  		Surrounded by a serene environment filled with people of great diversity and culture, we aim to make you feel at home, even when you’re far away from home.
          </p>
          <p className={styles.about__description}>
	  		So, have you been served yet? ‘Usisonge hapo!’
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
