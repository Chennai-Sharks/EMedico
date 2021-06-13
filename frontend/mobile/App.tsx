import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name=' ' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#ECF0FD',
		display: 'flex',
		height: '100%',
	},
});

export default App;
