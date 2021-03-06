import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import { Image, View } from 'react-native';

import { Snackbar, Title } from 'react-native-paper';

import { authScreenStyles } from './AuthScreenStyles';

import {
  snackBarStore,
  docDetailsStore,
  credentialStore,
  AuthProvider,
} from '@emedico/shared';

interface AuthScreenProps {}

const AuthScreen: React.FC<AuthScreenProps> = () => {
  const snackBar = snackBarStore();
  const docDetails = docDetailsStore();
  const cred = credentialStore();
  const auth = AuthProvider();

  return (
    <View style={authScreenStyles.background}>
      <Image
        source={require('../../assets/login.jpg')}
        style={authScreenStyles.image}
      />
      <View style={authScreenStyles.loginBox}>
        <View style={authScreenStyles.loginTitleLayout}>
          <Image
            source={require('../../assets/logo.png')}
            style={authScreenStyles.imgLogo}
          />
          <Title style={authScreenStyles.titleStyle}>Maxillo</Title>
        </View>
        {!cred.token ? (
          <View style={authScreenStyles.loginButtonLayout}>
            <Title>Login in to your account</Title>

            <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              style={authScreenStyles.signInButton}
              onPress={async () => {
                try {
                  console.log('ehhho');
                  await GoogleSignin.hasPlayServices();
                  const userInfo = await GoogleSignin.signIn();

                  const response = await auth.mutateAsync({
                    email: userInfo.user.email,
                    name: userInfo.user.name!,
                    userId: userInfo.user.id,
                  });

                  cred.setDocId(response.data.did);
                  cred.setToken(response.data.jwt);

                  docDetails.setEmail(userInfo.user.email);
                  docDetails.setProfileUrl(userInfo.user.photo!);
                  docDetails.setName(userInfo.user.name!);
                  console.log(docDetails.email);
                } catch (error) {
                  console.log(error);
                  snackBar.setmessage(error);
                }
              }}
            />
          </View>
        ) : null}
      </View>
      <Snackbar
        visible={snackBar.open}
        onDismiss={() => snackBar.setOpen(false)}
      >
        {snackBar.message}
      </Snackbar>
    </View>
  );
};

export default AuthScreen;
