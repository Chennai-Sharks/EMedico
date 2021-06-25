import React from 'react';

import { LinearProgress, makeStyles, Typography } from '@material-ui/core';

import { GetBFAllPatients } from '@emedico/shared';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import { useHistory } from 'react-router-dom';

import SearchImg from '../../assets/search.svg';
import ErrorImg from '../../assets/error.svg';

interface BFSearchPatientProps {}

const BFSearchPatient: React.FC<BFSearchPatientProps> = () => {
  // maybe make it to async autocomplete
  const classes = useStyles();
  const router = useHistory();
  const { data, isLoading, isError, error } = GetBFAllPatients();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <>
        <img src={ErrorImg} alt='Error' className={classes.errorImg} />
        <Typography variant='h4' style={{ fontWeight: 600 }} align='center'>
          {error?.response?.data ? error?.response?.data?.message : 'No Data'}
        </Typography>
      </>
    );
  }

  return (
    <div className={classes.content}>
      <CustomAutoComplete
        label='Enter Patient name'
        data={(data?.data as Array<Record<string, any>>).reverse()}
        onChange={(_: any, value: any) => {
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
  errorImg: {
    width: '100%',
    height: '80vh',
    padding: '10vh',
  },
}));
export default BFSearchPatient;
