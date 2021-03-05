import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress = '30', color = 'red', label }) => {
  return (
    <div>
      <span className={styles.label}>{label}</span>
      <div className={styles.progress}>
        <div
          className={styles.bar}
          style={{ width: `${progress}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
