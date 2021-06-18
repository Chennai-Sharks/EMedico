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
// import { toHeaderCase } from 'js-convert-case';

import CustomDashboardCard from '../../widgets/CustomDashboardCard/CustomDashboardCard';
// import { useHistory } from 'react-router-dom';

interface BFSection1GetProps {}

const DashboardGet: React.FC<BFSection1GetProps> = (props: any) => {
  const classes = useStyles();

  const { data, isLoading, isError, error } = GetDashboardData();

  const dashboardData = {
      patientCount: data?.data?.noOfPatients,
      recent: data?.data?.recent,
      dash: data?.data?.dash
  }

  console.log(dashboardData);


  if (isLoading) {
    return <LinearProgress />;
  }

  if(isError) {
      return (
          <>
            <Typography>
                Error had occured!
            </Typography>
          </>
      )
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
          <Typography>
              No. of Patients: {dashboardData.patientCount}
          </Typography>

          <Divider/>
          
          {(dashboardData.recent as any[]).map((item, index) => {
            return(
              <Typography>
                  {item.name}
                  <br />
                  {/* {console.log(item.name)} */}
              </Typography>
            )
              
          })}        

          <Divider/>

          {Object.keys(dashboardData.dash).map((item, index) => {
            return(
              <>
                <CustomDashboardCard head = {item} key = {index} />
                <br />
               {/* {console.log(key)}
               {console.log(dashboardData.dash[key])} */}
              </>
              
            )
            
          })}
          
      </Grid>
      
    </CustomCard>
  );
};

const useStyles = makeStyles((theme) => ({
  
}));

export default DashboardGet;
