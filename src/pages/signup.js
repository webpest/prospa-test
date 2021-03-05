import { useState } from 'react';
import Button from 'components/Button';
import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { Step1, Step2 } from 'components/Signup';
import Link from 'components/Link';
import styles from 'styles/Onboarding.module.css';

const steps = ['Step 1', 'Step 2'];
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    default:
      return <div>Not Found</div>;
  }
}

export default function SignUp() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      router.push('/dashboard');
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <Layout title="Sign Up">
      <nav className={styles.nav}>
        <span>
          Don't have an account? <Link href="/">Sign In</Link>
        </span>
      </nav>
      <section className={styles.container}>
        {_renderStepContent(activeStep)}
        <Button type="submit" onClick={() => _handleSubmit()}>
          Next
        </Button>
      </section>
    </Layout>
  );
}
