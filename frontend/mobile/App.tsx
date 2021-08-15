import React from 'react';
import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider as PaperProvider } from 'react-native-paper';

import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';

import AuthScreen from './screens/AuthScreen/AuthScreen';
import { theme } from './theme/Theme';
import { QueryClient, QueryClientProvider } from '@emedico/shared';
import { credentialStore } from '@emedico/shared';
import RootScreen from './navigation/DrawerNavigation';

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
                  name='Root'
                  component={RootScreen}
                  options={{ headerShown: false }}
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
    webClientId: GOOGLE_CLIENT_ID,
    offlineAccess: false,
  });
};

export default App;
