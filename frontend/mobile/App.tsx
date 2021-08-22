import React from 'react';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeBaseProvider } from 'native-base';

import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';

import AuthScreen from './screens/AuthScreen/AuthScreen';
import { theme } from './theme/Theme';
import { QueryClient, QueryClientProvider } from '@emedico/shared';
import { credentialStore } from '@emedico/shared';
import RootScreen from './navigation/DrawerNavigation';
import BFSectionGet from './screens/BlackFungus/BFSectionGet';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  const cred = credentialStore((state) => state);
  useEffect(() => {
    configureGoogleLogin();
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
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
                  <Stack.Screen
                    name='BF-PatientDetails'
                    component={BFSectionGet}
                    options={{
                      headerTitle: 'Mucormycosis - Patient Detials',
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
      </NativeBaseProvider>
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
