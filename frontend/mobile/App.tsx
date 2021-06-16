import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen/AuthScreen';
import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { QueryClient, QueryClientProvider } from '@emedico/shared';
import AuthProvider, { AuthContext } from './context/AuthContext';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    configureGoogleLogin();
  }, []);
  const context = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {context.isAuth ? (
              <>
                <Stack.Screen name='Home' component={HomeScreen} />
              </>
            ) : (
              <Stack.Screen
                name='Login'
                component={AuthScreen}
                options={{
                  headerShown: false,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
};

const configureGoogleLogin = async () => {
  GoogleSignin.configure({
    webClientId:
      '373451025957-0un7stu5blrn47pr8vj240uu5i4u7ap7.apps.googleusercontent.com',
    offlineAccess: false,
  });
};

export default App;
