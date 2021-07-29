import { makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Error404 from '../../assets/404.svg';
interface PageNotFoundProps {}

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  const match = useMediaQuery('(min-width:1200px)');
  const classes = useStyles();
  return (
    <>
      {match && (
        <img
          src={Error404}
          alt='404'
          style={{
            width: '100%',
            height: '80vh',
          }}
        />
      )}
      <Typography
        variant='h4'
        className={classes.centerText}
        style={{
          height: !match ? '90vh' : undefined,
        }}
      >
        Page Not Found.{' '}
        <a style={{ fontSize: '16px' }} href='/'>
          Go Back Home
        </a>
      </Typography>
    </>
  );
};

const useStyles = makeStyles(() => ({
  centerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
}));
export default PageNotFound;
