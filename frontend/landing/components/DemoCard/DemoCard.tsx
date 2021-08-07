import React from 'react';

import { Card, makeStyles } from '@material-ui/core';

import Image from 'next/image';
import MockUp from '../../assets/home.png';

interface DemoCardProps {}

const useStyles = makeStyles(() => ({
  card: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '12%',
    marginRight: '12%',
    boxShadow:
      '-5px 8px 20px 18px rgb(85 108 214 / 20%), 0px 8px 10px 1px rgb(85 108 214 / 14%), 0px 3px 14px 2px rgb(85 108 214 / 12%)',

    borderRadius: '12px',
  },
  grow: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const DemoCard: React.FC<DemoCardProps> = () => {
  const classes = useStyles();
  return (
    <Card elevation={8} className={classes.card}>
      <Image src={MockUp} alt='home' />
    </Card>
  );
};
export default DemoCard;
