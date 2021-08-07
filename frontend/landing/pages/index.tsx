import React from 'react';

import CustomAppBar from '../components/AppBar/AppBar';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Footer from '../components/Footer/Footer';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <CustomAppBar />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
