import { StyleSheet } from 'react-native';

export const authScreenStyles = StyleSheet.create({
  background: {
    display: 'flex',
    minHeight: '100%',
    minWidth: '100%',
    flexDirection: 'column',
    backgroundColor: '#ECF0FD',
  },
  loginButtonLayout: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  signInButton: {
    width: '60%',
    marginTop: 20,
    height: 50,
  },
  titleStyle: {
    paddingLeft: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30,
  },
  image: {
    height: '60%',
    width: '100%',
  },
  loginBox: {
    height: '40%',

    width: '100%',
  },
  loginTitleLayout: {
    marginTop: 30,
    display: 'flex',
    paddingLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imgLogo: {
    maxHeight: 50,
    width: 50,
  },
});
