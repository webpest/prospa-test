import React from 'react';
import styles from 'styles/Onboarding.module.css';
import Input from 'components/Input';

const Step1 = () => {
  return (
    <React.Fragment>
      <h2 className={styles.heading}>Create your account</h2>
      <p className={styles.desc}>A short description about account types</p>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Email Address" />
    </React.Fragment>
  );
};

export default Step1;
