import React from 'react';
import PageLayout from '../src/components/layout/PageLayout'

import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <PageLayout>
      <div className={styles.main_container}>
        <div className={styles.main_body}>
          <h1>Home Page</h1>
        </div>
      </div>
    </PageLayout>
  )
};

export default Home;
