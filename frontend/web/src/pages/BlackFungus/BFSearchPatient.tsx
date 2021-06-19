import React from 'react';

import { LinearProgress, makeStyles, Typography } from '@material-ui/core';

import { GetBFAllPatients } from '@emedico/shared';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import { useHistory } from 'react-router-dom';

import SearchImg from '../../assets/search.svg';

interface BFSearchPatientProps {}

const BFSearchPatient: React.FC<BFSearchPatientProps> = () => {
  const classes = useStyles();
  const router = useHistory();
  const allPatients = GetBFAllPatients();

  return (
    <>
      {allPatients.isLoading && <LinearProgress />}
      {allPatients.isError && (
        <Typography className={classes.centerText} variant='h2'>
          No Patients there
        </Typography>
      )}

      {!allPatients.isLoading && !allPatients.isError && (
        <div className={classes.content}>
          <CustomAutoComplete
            label='Enter Patient name'
            data={allPatients.data?.data}
            onChange={(_: any, value: any) => {
              // console.log('value', value);
              router.push(`get-patient/section1/${value._id}`, {
                ...value,
              });
            }}
          />
          <img
            src={SearchImg}
            alt='Search Patient'
            style={{
              width: '100%',
              height: '80%',
            }}
          />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      height: '100%',
    },
  },
  centerText: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '20px 20px',
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
}));
export default BFSearchPatient;
