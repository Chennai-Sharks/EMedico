import { useFormikContext } from 'formik';
import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { useFabStore } from '../../../store/FabStore';

interface BFCreateFABProps {
  reference: React.MutableRefObject<any>;
}

const BFCreateFAB: React.FC<BFCreateFABProps> = ({ reference }) => {
  const { validateForm, submitForm } = useFormikContext();
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: typeof state) => setState({ open });
  const { open } = state;
  const visible = useFabStore((state) => state.visible);
  return (
    <Portal>
      <FAB.Group
        open={open}
        style={{
          position: 'absolute',
          paddingBottom: 45,
          right: 0,
          bottom: 0,
        }}
        visible={visible}
        icon={open ? 'close' : 'unfold-more-horizontal'}
        actions={[
          {
            icon: 'check-circle',
            label: 'Validate the form',
            onPress: () => validateForm(),
          },
          {
            icon: 'arrow-down-bold',
            label: 'Scroll to bottom',
            onPress: () =>
              reference.current?.scrollToEnd({
                animated: true,
              }),
            small: false,
          },
          {
            icon: 'arrow-up-bold',
            label: 'Scroll to top',
            onPress: () =>
              reference.current?.scrollTo({
                y: 0,
                animated: true,
              }),
            small: false,
          },
          {
            icon: 'content-save',
            label: 'Save',
            onPress: () => submitForm(),
            small: false,
          },
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  );
};
export default BFCreateFAB;
