import styles from './RadioCard.module.css';
import Card from 'components/Card';

const RadioCard = ({ name, label, desc, ...rest }) => {
  return (
    <label className={styles.cardRadioButton}>
      <input
        type="radio"
        name={name}
        className={styles.inputElement}
        {...rest}
      />
      <Card className={styles.card}>
        <h3>{label}</h3>
        <p>{desc}</p>
      </Card>
    </label>
  );
};

export default RadioCard;
