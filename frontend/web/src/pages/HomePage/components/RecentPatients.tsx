import React from 'react';

import {
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import CustomCard from 'widgets/CustomCard/CustomCard';
import { useHistory } from 'react-router';

interface RecentPatientsProps {
  recentPatients: Array<Record<string, any>>;
}

const useStyles = makeStyles((theme) => ({
  inner: {
    minWidth: '100%',
  },
  title: {
    margin: '20px 20px',
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
}));

const RecentPatients: React.FC<RecentPatientsProps> = (props) => {
  const classes = useStyles();
  const router = useHistory();
  return (
    <CustomCard>
      <Typography className={classes.title} variant='h6'>
        Recently added patients
      </Typography>
      <Divider />
      <Table className={classes.inner}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>DPID</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.recentPatients.map((patient, index) => (
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
          ))}
        </TableBody>
      </Table>
    </CustomCard>
  );
};
export default RecentPatients;
