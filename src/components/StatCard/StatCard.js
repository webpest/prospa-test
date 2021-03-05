import Card from 'components/Card';
import styles from './StatCard.module.css';

const StatCard = ({ title, subTitle, amount, icon }) => {
  return (
    <Card className={styles.statCard}>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <span>{icon}</span>
      </div>
      <h4 className={styles.amount}>{amount}</h4>
    </Card>
  );
};

export default StatCard;
