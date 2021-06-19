import React from 'react';
import { Text, View } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
export default HomeScreen;
