import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children, title = 'Prospa Test' }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.pageWrapper}>
        <aside className={styles.sideBar}>
          <header>
            <img src="/images/prospa-logo.svg" alt="" />
          </header>
          <h1>Create multiple sub-account</h1>
          <p>
            Organise your business finances easily with multiple accounts. No
            limits!
          </p>
          <img src="/images/login_bg.png" alt="" />
          <footer>© 2020 Prospa Inc</footer>
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
