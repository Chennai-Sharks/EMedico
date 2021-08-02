import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import DemoCard from '../components/DemoCard/DemoCard';

interface Section1Props {}

const useStyles = makeStyles(() => ({
  subject: {
    paddingTop: '70px',
    paddingBottom: '45px',
  },
  grow: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const Section1: React.FC<Section1Props> = (props) => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.subject}>
        <Typography variant='h2' className={classes.bold} display='inline'>
          Specialised{' '}
          <Typography
            variant='h2'
            className={classes.bold}
            color='primary'
            display='inline'
          >
            Medical Dashboard
          </Typography>
        </Typography>
        <Typography variant='h2' className={classes.bold}>
          for Oral Surgeons
        </Typography>
      </div>
      <Typography variant='h6' className={classes.bold}>
        Explore the dashboard by signing in{' '}
        <a
          style={{ color: '#556cd6', textDecoration: 'underline' }}
          href='https://www.maxillo.in/auth'
        >
          here
        </a>
      </Typography>
      <DemoCard />
    </section>
  );
};
export default Section1;
