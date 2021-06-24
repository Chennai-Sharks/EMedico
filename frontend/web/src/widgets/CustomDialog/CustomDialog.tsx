import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import React from 'react';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onOkHandled: React.MouseEventHandler<HTMLButtonElement>;
  okButtonText: string | undefined;
  notOkButtonText: string | undefined;
}

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color='primary'>
          {props.notOkButtonText}
        </Button>
        <Button onClick={props.onOkHandled} color='primary' autoFocus>
          {props.okButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialog;
