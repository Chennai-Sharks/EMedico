import React from 'react';

import { GetDashboardData } from '@emedico/shared';
import {
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import TopSection from './components/TopSection';
import CardTile from './components/CardTile';
import RecentPatients from './components/RecentPatients';
import Error from '../../assets/error.svg';
import AllPatients from './components/AllPatients';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const classes = useStyles();
  const { data, isLoading, isError, error } = GetDashboardData();

  console.log(data);

  if (isLoading) {
    return <LinearProgress />;
  }
  if (isError) {
    return (
      <>
        <img src={Error} alt='Error' className={classes.errorImg} />
        <Typography variant='h4' className={classes.centerText}>
          {error?.response?.data.message ?? 'Server Error Please Contact Us'}
        </Typography>
      </>
    );
  }

  const dashboardTiles = {
    ...data?.data.dash,
  };
  return (
    <>
      <TopSection />
      <Grid
        container
        spacing={3}
        // alignItems='center' // use center only for small devices
        className={classes.content}
      >
        <Grid item xs={6} sm={3}>
          <CardTile
            title={'No of total Patients:'}
            values={[data?.data.noOfPatients]}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardTile
            title={'Diabetes:'}
            values={[
              `With: ${dashboardTiles.diabetes.y}`,
              `Without: ${dashboardTiles.diabetes.n}`,
            ]}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardTile
            title={'Covid:'}
            values={[
              `With: ${dashboardTiles.covid.y}`,
              `Without: ${dashboardTiles.covid.n}`,
            ]}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardTile
            title={'Hospitalized:'}
            values={[
              `Yes: ${dashboardTiles.hospitalized.y}`,
              `No: ${dashboardTiles.hospitalized.n}`,
            ]}
          />
        </Grid>

        <Grid
          container
          spacing={3}
          // alignItems='center'
          justify='center'
          className={classes.content}
        >
          <Grid item xs={6} sm={3}>
            <CardTile
              title={'In steriods? :'}
              values={[
                `Yes: ${dashboardTiles.steriods.y}`,
                `No: ${dashboardTiles.steriods.n}`,
              ]}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardTile
              title={'Immuno compromised? :'}
              values={[
                `Yes: ${dashboardTiles.immuno_comp.y}`,
                `No: ${dashboardTiles.immuno_comp.n}`,
              ]}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardTile
              title={'In ventilation? :'}
              values={[
                `Yes: ${dashboardTiles.ventilation.y}`,
                `No: ${dashboardTiles.ventilation.n}`,
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems='center'
          justify='center'
          className={classes.content}
        >
          <Grid item xs={6} sm={3}>
            <CardTile
              title={'Region of complaints:'}
              values={[
                `Eye: ${dashboardTiles.complaints.e}`,
                `Face: ${dashboardTiles.complaints.f}`,
                `Mouth: ${dashboardTiles.complaints.m}`,
                `Nose: ${dashboardTiles.complaints.n}`,
              ]}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecentPatients recentPatients={data?.data.recent} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AllPatients />
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(3),
  },
  centerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  title: {
    margin: '20px 20px',
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  errorImg: {
    width: '100%',
    height: '80vh',
    padding: '10vh',
  },
}));

export default HomePage;

/* {Object.keys(data?.data.dash)
  .filter((item) => item !== 'complaints')
  .map((item, index) => (
    
  ))} */
