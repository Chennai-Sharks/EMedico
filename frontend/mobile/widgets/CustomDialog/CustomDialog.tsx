import React from 'react';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onOkHandled: () => void;
  okButtonText: string | undefined;
}

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  return (
    <Portal>
      <Dialog
        visible={props.open}
        onDismiss={props.onClose}
        theme={{ roundness: 16 }}
      >
        <Dialog.Title>{props.title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{props.content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.onOkHandled}>{props.okButtonText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
export default CustomDialog;
