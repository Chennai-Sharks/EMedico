import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Card, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px',
    borderTop: '8px solid #5664D2',
    // remove if transition not needed (experimental)
    transition: 'box-shadow 0.2s ease 0s',
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 8%) 0px 15px 15px',
    },
  },
  title: {
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
  imgSize: {
    height: '55px',
    width: '55px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
  },
}));

interface CardTilePropsProps {
  title: string;
  values: string[];
  icon?: any;
}

const CardTile: React.FC<CardTilePropsProps> = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      <div>
        <Typography variant='h6' gutterBottom className={classes.title}>
          {props.title}
        </Typography>

        <div className={classes.details}>
          {props.values.length > 2 ? (
            <Grid container spacing={1}>
              {props.values.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Typography variant='body1'>{item}</Typography>
                </Grid>
              ))}
            </Grid>
          ) : (
            props.values.map((item, index) => (
              <Typography variant='body1' key={index}>
                {item}
              </Typography>
            ))
          )}
        </div>
      </div>
      {/* {props.icon && (
        <img className={classes.imgSize} src={props.icon} alt={props.title} />
      )} */}
    </Card>
  );
};

export default CardTile;
