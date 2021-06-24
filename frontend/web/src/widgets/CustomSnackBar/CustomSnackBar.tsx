import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';

interface CustomSnackBarProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity: Color;
}

const CustomSnackBar: React.FC<CustomSnackBarProps> = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={props.handleClose}
    >
      <Alert
        variant='filled'
        severity={props.severity}
        onClose={props.handleClose}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};
export default CustomSnackBar;
