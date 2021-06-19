import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  })
);

// make this type safe later
type CustomFabProps = any;

const CustomFab: React.FC<CustomFabProps> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Tooltip
        {...props}
        title='Click here to Add Patient'
        aria-label='add'
        placement='right-end'
      >
        <Fab color='primary' className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default CustomFab;
