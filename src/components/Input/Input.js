import styles from './Input.module.css';

const Input = ({ label, name, type, ...rest }) => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        {...rest}
      />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
