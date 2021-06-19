import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({    
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }),
);

type CustomTooltip = any;

const CustomTooltip: React.FC<CustomTooltip> = (props) => {
  const classes = useStyles();

  return (
    <div>         
      
      <Tooltip {...props} title="Click here to Add Patient" aria-label="add" placement="right-end" >
        <Fab color="primary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default CustomTooltip;