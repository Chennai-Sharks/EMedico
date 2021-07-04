import React from 'react';

import { GetBFSection4Data, section4FormModel } from '@emedico/shared';
import {
  Divider,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
  useMediaQuery,
  ListItem,
  ListItemIcon,
  Box,
} from '@material-ui/core';
import CustomCard from 'widgets/CustomCard/CustomCard';
import Error404 from '../../assets/404.svg';
import Error from '../../assets/error.svg';
import { useLocation, useParams } from 'react-router-dom';
import BFSectionTabs from './components/BFSectionTabs';
import { List } from '@material-ui/core';

interface BFSection4GetProps {}

const BFSection4Get: React.FC<BFSection4GetProps> = (props: any) => {
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

  return <BFSection4GetAllowed {...props} />;
};

const BFSection4GetAllowed: React.FC<any> = () => {
  const classes = useStyles();
  const location = useLocation<Record<string, any>>();
  const params = useParams<{ patientid: string }>();

  const { data, isLoading, isError, error } = GetBFSection4Data(
    params.patientid
  );

  if (isLoading) {
    return <LinearProgress />;
  }
  console.log(data);

  if (isError) {
    return (
      <>
        <BFSectionTabs location={location.state} params={params} section={4} />

        <img src={Error} alt='Error' className={classes.errorImg} />
        <Typography variant='h4' className={classes.centerText}>
          {error?.response?.data.message ??
            'No surgical plan found for this patient.'}
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
      <BFSectionTabs location={location.state} params={params} section={4} />
      <Divider />

      <Typography className={classes.title} variant='h5'>
        Surgical Plan
      </Typography>
      <Divider />
      <Grid container style={{ width: '100%' }}>
        {section4FormModel.map((item, index) => {
          if (item.type === 'checkbox') {
            return (
              <Grid item xs={12} key={index}>
                <List
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {(data?.data.surgicalPlan as Array<string>).length === 0 ? (
                    <Typography
                      variant='h5'
                      style={{ fontWeight: 'bold', margin: '30px' }}
                    >
                      No surgical plan found for this patient.
                    </Typography>
                  ) : (
                    (data?.data.surgicalPlan as Array<string>).map(
                      (eachPlan, num) => {
                        return (
                          <ListItem>
                            <ListItemIcon
                              style={{
                                backgroundColor: '#5664D2',
                                borderRadius: '20px',
                                height: '30px',
                                minWidth: '30px',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '10px',
                                marginRight: '10px',
                              }}
                            >
                              {num + 1}
                            </ListItemIcon>
                            <div style={{ fontSize: '1.3rem' }}>{eachPlan}</div>
                            <Box m={3} />
                          </ListItem>
                        );
                      }
                    )
                  )}
                </List>
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
      <Divider />
      <BFSectionTabs location={location.state} params={params} section={4} />
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
    height: '70vh',
    padding: '10vh',
  },
}));

export default BFSection4Get;
