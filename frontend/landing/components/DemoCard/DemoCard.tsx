import React from 'react';

import { Card, makeStyles } from '@material-ui/core';

import Image from 'next/image';

interface DemoCardProps {}

const useStyles = makeStyles(() => ({
  card: {
    marginTop: '20px',
    marginBottom: '20px',
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
    <Card elevation={4} className={classes.card}>
      hello
      {/* <Image src='/home2.jpg' height={800} width={800} alt='home' /> */}
    </Card>
  );
};
export default DemoCard;
