import { GetBFSection3Data, section3FormModel } from '@emedico/shared';
import {
  Divider,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import CustomCard from 'widgets/CustomCard/CustomCard';
import Error404 from '../../assets/404.svg';
import Error from '../../assets/error.svg';
import { toHeaderCase } from 'js-convert-case';
import { useLocation, useParams } from 'react-router-dom';
import BFSectionTabs from './components/BFSectionTabs';

interface BFSection3GetProps {}

const BFSection3Get: React.FC<BFSection3GetProps> = (props: any) => {
  const classes = useStyles();
  const match = useMediaQuery('(min-width:1100px)');
  const params = useParams<{ patientid: string }>();

  if (!params.patientid) {
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
          Page Not Found
        </Typography>
      </>
    );
  }

  return <BFSection3GetAllowed {...props} />;
};

const BFSection3GetAllowed: React.FC<any> = (props) => {
  const classes = useStyles();
  const location = useLocation<Record<string, any>>();
  const params = useParams<{ patientid: string }>();

  const { data, isLoading, isError, error } = GetBFSection3Data(
    params.patientid
  );

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <>
        <img src={Error} alt='Error' className={classes.errorImg} />
        <Typography variant='h4' className={classes.centerText}>
          {error?.response?.data.message ?? 'Invalid Patient'}
        </Typography>
      </>
    );
  }

  return (
    <CustomCard
      customStyle={{
        marginTop: '20px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <BFSectionTabs location={location.state} params={params} section={3} />
      <Divider />

      <Typography className={classes.title} variant='h5'>
        Section 3
      </Typography>
      <Divider />
      <Grid container style={{ width: '100%' }}>
        {section3FormModel.map((item, index) => {
          if (item.type === 'title') {
            return (
              <Grid
                item
                xs={12}
                className={classes.title}
                key={index}
                style={{ marginTop: '0px' }}
              >
                {index !== 0 && <Divider />}
                <Typography
                  className={classes.title}
                  style={{
                    textAlign: 'center',
                  }}
                  variant='h5'
                >
                  {item.label}
                </Typography>
                <Divider />
              </Grid>
            );
          } else if (item.type === 'bigtitle') {
            return (
              <Grid item xs={12} className={classes.title} key={index}>
                <Typography
                  className={classes.title}
                  style={{
                    textAlign: 'center',
                    margin: '0px',
                    marginTop: '0px',
                  }}
                  variant='h4'
                >
                  {item.label}
                </Typography>
              </Grid>
            );
          } else if (item.type === 'checkbox') {
            return (
              <Grid item xs={12} key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className={classes.title} variant='h6'>
                    {toHeaderCase(item.label)}:
                  </Typography>
                  <Box className={classes.subtitle} fontWeight={500}>
                    {(data?.data[item.name] as string[]).length === 0
                      ? 'Nil'
                      : data?.data[item.name].toString()}
                  </Box>
                </div>
              </Grid>
            );
          } else {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className={classes.title} variant='h6'>
                    {toHeaderCase(item.label)}:
                  </Typography>
                  <Box className={classes.subtitle} fontWeight={500}>
                    {data?.data[item.name]}
                  </Box>
                </div>
              </Grid>
            );
          }
        })}
      </Grid>
      <Divider />
      <BFSectionTabs location={location.state} params={params} section={3} />
    </CustomCard>
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

export default BFSection3Get;
