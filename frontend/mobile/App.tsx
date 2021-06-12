import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { hello } from '@emedico/shared';

const App = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>hello world{hello()}</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;
