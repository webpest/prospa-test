import Head from 'next/head';
import styles from './Layout.module.css';
import cn from 'classnames';
import Avatar from 'components/Avatar';
import Link from 'components/Link';

const InnerLayout = ({ children, title = 'Prospa Test' }) => {
  return (
    <div className={cn(styles.layout, styles.innerLayout)}>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <section className={styles.headerSection}>
            <h1>{title}</h1>
            <div className={styles.headerSectionRight}>
              <button>
                <img src="/images/notification_icon.svg" alt="" />
              </button>
              <Avatar>
                <img src="/images/profile_pic.png" alt="" />
              </Avatar>
            </div>
          </section>
        </div>
      </header>
      <aside className={styles.innerSideBar}>
        <header className={styles.sidebarHeader}>
          <Avatar>AB</Avatar>
          <div className={styles.clientInfo}>
            <h3>Clayvant Inc</h3>
            <span>Manage Account</span>
          </div>
          <button>
            <img src="/images/arrow_down.svg" alt="" />
          </button>
        </header>
        <div className={styles.sidebarContainer}>
          <nav className={styles.sideMenu}>
            <Link href="/">
              {' '}
              <img src="/images/MenuIcon.svg" alt="" /> Invoice
            </Link>
            <Link href="/">
              <img src="/images/MenuIcon.svg" alt="" />
              Management
            </Link>
            <Link href="/">
              <img src="/images/MenuIcon.svg" alt="" />
              Security
            </Link>
            <Link href="/">
              <img src="/images/MenuIcon.svg" alt="" />
              Support
            </Link>
          </nav>
          <footer>
            <img src="/images/logo_alt.svg" alt="" />
          </footer>
        </div>
      </aside>
      <main className={styles.innerMain}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default InnerLayout;
