import React from 'react';
import { Snackbar } from 'react-native-paper';

interface CustomSnackbarProps {
  open: boolean;
  handleClose: () => void;
  message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = (props) => {
  return (
    <Snackbar
      visible={props.open}
      onDismiss={props.handleClose}
      action={{
        label: 'Close',
        color: '#fff',
        onPress: () => {
          props.handleClose();
        },
      }}
    >
      {props.message}
    </Snackbar>
  );
};
export default CustomSnackbar;
