import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';

import type { AppProps } from 'next/app';
import theme from '../theme/Theme';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Maxillo | Product</title>
        <meta name='description' content='Maxillo Product Page' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
