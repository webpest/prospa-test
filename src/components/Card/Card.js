import cn from 'classnames';
import styles from './Card.module.css';

const Card = ({ children, className }) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
};

export default Card;
