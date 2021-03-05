import Button from 'components/Button';
import { InnerLayout } from 'components/Layout';
import StatCard from 'components/StatCard';
import styles from 'styles/Dashboard.module.css';
import Link from 'components/Link';

export default function Dashboard() {
  return (
    <InnerLayout title="Dashboard">
      <section className={styles.pageHeader}>
        <h2>
          Welcome back, Kathy
          <p>
            Here is what have been happening in the last{' '}
            <Link href="/">7 days</Link>
          </p>
        </h2>
        <Button>Add a sub account</Button>
      </section>
      <section className={styles.statGrid}>
        <StatCard
          title="Current Account"
          subTitle="PROVIDUS BANK - 9906533917"
          amount="N814,800.45"
          icon={<img src="/images/stat1.svg" />}
        />
        <StatCard
          title="Savings Account"
          subTitle="SUB ACCOUNT - 12346789"
          amount="N39,342.45"
          icon={<img src="/images/stat2.svg" />}
        />
      </section>
      <section>Hello</section>
    </InnerLayout>
  );
}
