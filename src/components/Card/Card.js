import cn from 'classnames';
import styles from './Card.module.css';

const Card = ({ children, className, title }) => {
  return (
    <div className={cn(styles.card, className)}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
