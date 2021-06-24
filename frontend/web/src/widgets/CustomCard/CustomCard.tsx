import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

type CustomCardProps = {
  customStyle?: React.CSSProperties | undefined;
};

const CustomCard: React.FC<CustomCardProps> = (props) => {
  const useStyles = makeStyles(() => ({
    cardStyle: {
      borderRadius: '16px',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.cardStyle} style={props.customStyle} elevation={1}>
      {props.children}
    </Card>
  );
};
export default CustomCard;
