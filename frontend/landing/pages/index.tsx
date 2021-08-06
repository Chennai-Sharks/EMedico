import React from 'react';
import CustomAppBar from '../components/AppBar/AppBar';
import styles from '../styles/Home.module.css';

import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';

const Home = () => {
  return (
    <div className={styles.container}>
      <CustomAppBar />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
};

export default Home;
