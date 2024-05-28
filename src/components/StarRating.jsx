import classNames from 'classnames';
import styles from '../styles/components/StarRating.module.scss';

function StarRating ({ min = 0, max = 5, value }) {
  return (
    <div className={styles['star-rating']}>
      {[...Array(max)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            data-value={ratingValue}
            className={classNames('fas', 'fa-star', styles.star, {
              [styles.marked]: 5 >= ratingValue
            })}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
