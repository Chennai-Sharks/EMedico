import { Skeleton } from '@material-ui/lab';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxillo</title>
        <meta name='description' content='Maxillo Product Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://www.maxillo.in'>Maxillo</a>
          <Skeleton animation='wave' />
        </h1>
      </main>
    </div>
  );
}
