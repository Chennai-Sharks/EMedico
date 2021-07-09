import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { credentialStore } from '@emedico/shared';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const cred = credentialStore((state) => state);
  return (
    <View
      style={{
        display: 'flex',
        minHeight: '100%',
        minWidth: '100%',
        flexDirection: 'column',
        backgroundColor: '#ECF0FD',
      }}
    >
      <Text>Home screen</Text>
      <Button
        title='logout'
        onPress={() => {
          console.log('hello');
          cred.deleteEverything();
        }}
      />
    </View>
  );
};
export default HomeScreen;
