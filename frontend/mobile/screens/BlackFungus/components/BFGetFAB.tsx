import React from 'react';
import { FAB, Portal } from 'react-native-paper';

interface BFGetFABProps {
  reference: React.MutableRefObject<any>;
  visible: boolean;
}

const BFGetFAB: React.FC<BFGetFABProps> = ({ reference, visible }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: typeof state) => setState({ open });
  const { open } = state;
  return (
    <Portal>
      <FAB.Group
        open={open}
        visible={visible}
        icon={open ? 'close' : 'unfold-more-horizontal'}
        actions={[
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
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  );
};
export default BFGetFAB;
