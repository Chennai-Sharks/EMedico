import { Box, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

import DashBoard from '../assets/dashboard.jpg';
import FormImg from '../assets/form.png';
import SurgeryFormImg from '../assets/surgery_form.png';

interface Section3Props {}

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
    marginTop: '20px',
    textAlign: 'center',
    paddingBottom: '50px',
  },
  bold3: {
    marginTop: '20px',
    textAlign: 'center',
    paddingBottom: '50px',
    fontWeight: 'bold',
  },
  iconSize: {
    height: '96px',
    width: '96px',
  },
  flex: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10%',
    marginRight: '10%',
    boxShadow:
      '-5px 8px 20px 18px rgb(85 108 214 / 20%), 0px 8px 10px 1px rgb(85 108 214 / 14%), 0px 3px 14px 2px rgb(85 108 214 / 12%)',

    borderRadius: '12px',
  },
}));

const Section3: React.FC<Section3Props> = () => {
  const classes = useStyles();
  return (
    <section id='section3'>
      <Grid container>
        <Grid
          xs={12}
          sm={4}
          style={{
            padding: '30px',
            paddingLeft: '50px',
          }}
          className={classes.flex}
        >
          <Typography variant='h5' className={classes.bold}>
            Informative Dashboard
          </Typography>
          <Typography variant='h6' className={classes.bold2}>
            Quick and informative data about the patients are listed in the
            dashboard. More features coming soon.
          </Typography>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card elevation={8} className={classes.card}>
            <Image src={DashBoard} alt='Dashboard' />
          </Card>
        </Grid>
      </Grid>
      <Box m={5} />
      <Grid container>
        <Grid xs={12} sm={8}>
          <Card elevation={8} className={classes.card}>
            <Image src={FormImg} alt='Form image' />
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          style={{
            padding: '30px',
            // paddingRight: '70px',
          }}
          className={classes.flex}
        >
          <Typography variant='h5' className={classes.bold}>
            Specialised Form
          </Typography>
          <Typography variant='h6' className={classes.bold2}>
            An extensive form specially made to store details and cover all
            aspects of a patient coming to an oral surgeon.
          </Typography>
        </Grid>
      </Grid>
      <Box m={5} />
      <Grid container>
        <Grid
          xs={12}
          sm={4}
          style={{
            padding: '30px',
            // paddingLeft: '50px',
          }}
          className={classes.flex}
        >
          <Typography variant='h5' className={classes.bold}>
            Surgical Management
          </Typography>
          <Typography variant='h6' className={classes.bold2}>
            Manage all the surgery details for a patient. Covers almost all the
            parameters.
          </Typography>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card elevation={8} className={classes.card}>
            <Image src={SurgeryFormImg} alt='Form image' />
          </Card>
        </Grid>
      </Grid>
      <Box m={5} />
      <Typography variant='h6' className={classes.bold3}>
        Get started for free{' '}
        <a
          style={{ color: '#556cd6' }}
          href='https://www.maxillo.in/auth'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        . As of today, only mucormycosis dashboard is available*
      </Typography>
    </section>
  );
};
export default Section3;
