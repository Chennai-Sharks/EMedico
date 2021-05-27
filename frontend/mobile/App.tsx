import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {hello} from '@emedico/shared';

const App = () => {
  return (
    <SafeAreaView>
      <View>hello world{hello()}</View>
    </SafeAreaView>
  );
};

export default App;
