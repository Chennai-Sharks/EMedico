import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { docDetailsStore } from '@emedico/shared';

interface TopSectionProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const TopSection: React.FC<TopSectionProps> = (props) => {
  const classes = useStyles();
  const docDetails = docDetailsStore((state) => state);

  return (
    <div className={classes.root}>
      <Typography variant='body1' gutterBottom>
        Home
      </Typography>
      <Typography gutterBottom variant='h6'>
        Hello, {docDetails.name}
      </Typography>
      <Typography variant='subtitle1'>Here's some quick information</Typography>
    </div>
  );
};
export default TopSection;
