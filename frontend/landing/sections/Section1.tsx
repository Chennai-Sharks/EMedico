import React from 'react';
import { Hidden, makeStyles, Typography } from '@material-ui/core';
import DemoCard from '../components/DemoCard/DemoCard';

interface Section1Props {}

const useStyles = makeStyles(() => ({
  subject: {
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  grow: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bold2: {
    textAlign: 'center',
    paddingBottom: '20px',
  },
}));

const Section1: React.FC<Section1Props> = () => {
  const classes = useStyles();
  return (
    <section id='section1'>
      <div className={classes.subject}>
        <Hidden implementation='css' xsDown>
          <Typography variant='h2' className={classes.bold}>
            Specialised
          </Typography>
          <Typography variant='h2' className={classes.bold} color='primary'>
            Medical Dashboard
          </Typography>
          <Typography variant='h2' className={classes.bold}>
            for Oral Surgeons
          </Typography>
        </Hidden>
        <Hidden implementation='css' only={['lg', 'md', 'xl', 'sm']}>
          <Typography variant='h4' className={classes.bold}>
            Specialised
          </Typography>
          <Typography variant='h4' className={classes.bold} color='primary'>
            Medical Dashboard
          </Typography>
          <Typography variant='h4' className={classes.bold}>
            for Oral Surgeons
          </Typography>
        </Hidden>
      </div>
      <Typography variant='h6' className={classes.bold2}>
        Explore the dashboard by signing in{' '}
        <a
          style={{ color: '#556cd6', textDecoration: 'underline' }}
          href='https://www.maxillo.in/auth'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
      </Typography>
      <DemoCard />
    </section>
  );
};
export default Section1;
