import React from 'react';
import CustomAppBar from '../components/AppBar/AppBar';
import styles from '../styles/Home.module.css';
// import { withStyles } from '@material-ui/core';
// import { scrollBarStyle } from '../utils/ScrollBar';
import Section1 from '../sections/Section1';

const Home = () => {
  return (
    <div className={styles.container}>
      <CustomAppBar />
      <main className={styles.main}>
        <Section1 />
      </main>
    </div>
  );
};

export default Home;
