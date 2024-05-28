import classNames from 'classnames';
import styles from '../styles/components/Dish.module.scss';

function Dish ({ title, img, rating, price, description}) {
  return (
    <div className={styles.dish}>
      <img className={styles.dish__image} src={img} alt={title} />
      <h3 className={styles.dish__title}>{title}</h3>
      {description
        ? (
          <p className={styles.dish__description}>{description}</p>
          )
        : null}
      <span className={styles.dish__price}>{`Ksh${price}`}</span>
    </div>
  );
}

export default Dish;
