import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import DevicesIcon from '@material-ui/icons/Devices';
import WebIcon from '@material-ui/icons/Web';

interface Section2Props {}

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
    width: '50%',
    textAlign: 'center',
    paddingBottom: '50px',
  },
  iconSize: {
    height: '96px',
    width: '96px',
  },
}));

const Section2: React.FC<Section2Props> = () => {
  const classes = useStyles();
  return (
    <section
      id='section2'
      style={{
        textAlign: 'center',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
      }}
    >
      <Typography variant='h4' className={classes.bold}>
        Key Features
      </Typography>
      <Typography variant='h6' className={classes.bold2}>
        We believe we have created the first Medical dashboard existing on the
        market this time for Oral Surgeons. Dashboard pages with features that
        will convince you to use it for your Medical business.
      </Typography>

      <Grid container>
        <Grid xs={12} sm={6}>
          <DevicesIcon color='primary' className={classes.iconSize} />
          <Typography variant='h5' className={classes.bold}>
            Mobile Ready
          </Typography>
          <Typography variant='h6' style={{ padding: '10px 10% 0% 10%' }}>
            Responsive design that makes the dashboard <br /> page look good on
            all devices <br />
            (desktops, tablets, and phones).
          </Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <WebIcon color='primary' className={classes.iconSize} />
          <Typography variant='h5' className={classes.bold}>
            Unique Medical Sections
          </Typography>
          <Typography variant='h6' style={{ padding: '10px 10% 0% 10%' }}>
            A perfect structure created after we analized
            <br /> trends for oral surgeons. Analysis made to the <br /> most
            popular Medical businesses.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};
export default Section2;
