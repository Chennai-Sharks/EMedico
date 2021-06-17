import { GetDashboardData } from '@emedico/shared';
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
// import CustomCard from 'widgets/CustomCard/CustomCard';

import CustomCard from '../../widgets/CustomCard/CustomCard';


import Error404 from '../../assets/404.svg';
import Error from '../../assets/error.svg';
import { toHeaderCase } from 'js-convert-case';
// import CustomButton from 'widgets/CustomButton/CustomButton';
// import { useHistory } from 'react-router-dom';

interface BFSection1GetProps {}

const DashboardGet: React.FC<BFSection1GetProps> = (props: any) => {
  const classes = useStyles();

  const { data, isLoading, isError, error } = GetDashboardData();

  console.log(data);

  if (isLoading) {
    return <LinearProgress />;
  }

//   if (isError) {
//     return (
//       <>
//         <img src={Error} alt='Error' className={classes.errorImg} />
//         <Typography variant='h4' className={classes.centerText}>
//           {error?.response?.data.message ?? 'Invalid Patient'}
//         </Typography>
//       </>
//     );
//   }

//   const section1Data = {
//     name: props.location.state.name,
//     dpid: props.location.state.dpid,
//     ...data?.data,
//   };

  return (
    <CustomCard
      customStyle={{
        marginTop: '20px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      
      <Divider />
      <Typography>
          Dashboard
      </Typography>
      <Grid container style={{ width: '100%' }}>
        {/* {section1FormModel.map((item, index) => {
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
                {index !== 0 && <Divider />}
                <Typography
                  className={classes.title}
                  style={{
                    textAlign: 'center',
                  }}
                  variant='h4'
                >
                  {item.label}
                </Typography>
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
                    {section1Data[item.name]}
                  </Box>
                </div>
              </Grid>
            );
          }
        })} */}
      </Grid>
      
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

export default DashboardGet;
