import { useRouter } from 'next/router';
import Button from 'components/Button';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Link from 'components/Link';
import styles from 'styles/Onboarding.module.css';

export default function SignIn() {
  const router = useRouter();
  return (
    <Layout title="Home">
      <nav className={styles.nav}>
        <span>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </span>
      </nav>
      <section className={styles.container}>
        <h2 className={styles.heading}>Welcome back to Prospa</h2>
        <p className={styles.desc}>
          An account, with powerful, personalised tools all in one place
        </p>
        <Input label="Email Address" />
        <Input label="Enter Password" />
        <Button onClick={() => router.push('/dashboard')}>Next</Button>
      </section>
    </Layout>
  );
}
