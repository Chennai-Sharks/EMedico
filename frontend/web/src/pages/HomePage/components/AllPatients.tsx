import React from 'react';

import {
  Button,
  Divider,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
} from '@material-ui/core';

import { GetBFAllPatients } from '@emedico/shared';
import { useHistory } from 'react-router';
import CustomCard from 'widgets/CustomCard/CustomCard';

const useStyles = makeStyles((theme) => ({
  inner: {
    minWidth: '100%',
  },
  container: {
    maxHeight: 400,
  },
  title: {
    margin: '20px 20px',
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(3),
  },
}));

interface AllPatientsProps {}

const AllPatients: React.FC<AllPatientsProps> = () => {
  const classes = useStyles();
  const router = useHistory();
  const { data, isLoading, isError, error } = GetBFAllPatients();

  return (
    <CustomCard>
      <Typography className={classes.title} variant='h6'>
        All Patients
      </Typography>
      <Divider />
      {isLoading ? (
        <LinearProgress />
      ) : isError ? (
        <Typography align='center' variant='h6' className={classes.margin}>
          {error?.response?.data ? error?.response?.data?.message : 'No Data'}
        </Typography>
      ) : (
        <TableContainer className={classes.container}>
          <Table className={classes.inner}>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>DPID</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(data?.data as Array<Record<string, any>>).map(
                (patient, index) => (
                  <TableRow hover key={index}>
                    <TableCell align='center'>
                      <Typography variant='body1' style={{ fontWeight: 500 }}>
                        {patient.name}
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>{patient.dpid}</TableCell>
                    <TableCell align='center'>
                      <Button
                        color='primary'
                        variant='outlined'
                        onClick={() => {
                          router.push(
                            `black-fungus/get-patient/section1/${patient._id}`,
                            {
                              ...patient,
                            }
                          );
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </CustomCard>
  );
};
export default AllPatients;
