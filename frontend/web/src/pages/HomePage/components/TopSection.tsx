import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { docDetailsStore } from '@emedico/shared';

interface TopSectionProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  title: {
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
}));

const TopSection: React.FC<TopSectionProps> = () => {
  const classes = useStyles();
  const docDetails = docDetailsStore((state) => state);

  return (
    <div className={classes.root}>
      <Typography variant='body1'>Home</Typography>
      <Typography variant='h6' className={classes.title}>
        Hello, {docDetails.name}
      </Typography>
      <Typography variant='subtitle1'>Here's some quick information</Typography>
    </div>
  );
};
export default TopSection;
