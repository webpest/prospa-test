import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children, title = 'Prospa Test' }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.pageWrapper}>
        <aside className={styles.sideBar}>2</aside>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
