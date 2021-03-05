import styles from './Avatar.module.css';

const Avatar = ({ children }) => {
  return <span className={styles.avatar}>{children}</span>;
};

export default Avatar;
