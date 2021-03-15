import Button from 'components/Button';
import { InnerLayout } from 'components/Layout';
import StatCard from 'components/StatCard';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import styles from 'styles/Dashboard.module.css';
import Link from 'components/Link';
import Chart from 'components/Chart';

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
      <section className={styles.chartGrid}>
        <Card title="June Summary">
          <div className={styles.chartDetail}>
            <div>
              <h3>Money In</h3>
              <p>N5,650,000</p>
            </div>
            <div>
              <h3>Money Out</h3>
              <p>N5,650,000</p>
            </div>
            <div>
              <h3>Money Difference</h3>
              <p>N5,650,000</p>
            </div>
          </div>
          <Chart />
        </Card>
        <Card title="Cash Flow">
          <div className={styles.cardFlow}>
            <span>
              <img src="/images/bank-icon.svg" alt="" />
            </span>
            <span>Bank Fees</span>
            <ProgressBar color="#FFCF56" progress={80} label="N225,000" />
          </div>

          <div className={styles.cardFlow}>
            <span>
              <img src="/images/internet-icon.svg" alt="" />
            </span>
            <span>Internet</span>
            <ProgressBar color="#FFCF56" progress={50} label="N225,000" />
          </div>

          <div className={styles.cardFlow}>
            <span>
              <img src="/images/marketing-icon.svg" alt="" />
            </span>
            <span>Marketing</span>
            <ProgressBar color="#FFCF56" progress={25} label="N225,000" />
          </div>

          <div className={styles.cardFlow}>
            <span>
              <img src="/images/transfer-icon.svg" alt="" />
            </span>
            <span>Transfer</span>
            <ProgressBar color="#FFCF56" progress={15} label="N225,000" />
          </div>
        </Card>
      </section>
    </InnerLayout>
  );
}
