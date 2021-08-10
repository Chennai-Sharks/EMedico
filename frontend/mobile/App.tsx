import React from 'react';
import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider as PaperProvider } from 'react-native-paper';

import AuthScreen from './screens/AuthScreen/AuthScreen';
import { theme } from './theme/Theme';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { QueryClient, QueryClientProvider } from '@emedico/shared';
import { credentialStore } from '@emedico/shared';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  const cred = credentialStore((state) => state);
  useEffect(() => {
    configureGoogleLogin();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {cred.token ? (
              <>
                <Stack.Screen
                  name='Home'
                  component={HomeScreen}
                  options={{
                    headerTitle: 'Dashboard',
                  }}
                />
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
      </PaperProvider>
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
