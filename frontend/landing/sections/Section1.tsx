import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface Section1Props {}

const useStyles = makeStyles((theme) => ({
  subject: {
    paddingTop: '70px',
    paddingBottom: '70px',
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
    <section className={classes.subject}>
      <Typography variant='h2' className={classes.bold} display='inline'>
        Creative{' '}
        <Typography
          variant='h2'
          className={classes.bold}
          color='primary'
          display='inline'
        >
          Medical Dashboard
        </Typography>
      </Typography>
    </section>
  );
};
export default Section1;
