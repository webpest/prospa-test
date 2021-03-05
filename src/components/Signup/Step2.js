import React from 'react';
import styles from 'styles/Onboarding.module.css';
import RadioCard from 'components/RadioCard';

const Step2 = () => {
  return (
    <React.Fragment>
      <h2 className={styles.heading}>Open a new business account</h2>
      <p className={styles.desc}>A short description comes here</p>
      <RadioCard
        name="option"
        label="I have a registered business / charity with CAC"
        desc={
          <ul className={styles.radioList}>
            <li>Account in your business name</li>
            <li>Send to and receive transfers from all Nigerian banks</li>
            <li>Tools for business management</li>
          </ul>
        }
      />
      <RadioCard
        name="option"
        label="My business is not yet registered, I would like to register it"
        desc={
          <ul className={styles.radioList}>
            <li>Account in your business name</li>
            <li>Send to and receive transfers from all Nigerian banks</li>
            <li>Tools for business management</li>
          </ul>
        }
      />
      <RadioCard
        name="option"
        label="I'm a freelancer I do business in my personal name"
        desc={
          <ul className={styles.radioList}>
            <li>Account in your business name</li>
            <li>Send to and receive transfers from all Nigerian banks</li>
            <li>Tools for business management</li>
          </ul>
        }
      />
    </React.Fragment>
  );
};

export default Step2;
