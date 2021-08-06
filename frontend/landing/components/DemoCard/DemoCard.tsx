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
      <Image
        src={MockUp}
        // height={500}
        // width={766}

        alt='home'
      />
    </Card>
  );
};
export default DemoCard;
