import React from 'react';
import { Image, StyleSheet, View, Text, Linking } from 'react-native';
import { Button } from 'react-native-paper';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ECF0FD',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },

  titleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },

  imgLogo: {
    maxHeight: 70,
    width: 70,
  },
});

interface AboutScreenProps {}

const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <View style={styles.background}>
      <Image source={require('../../assets/logo.png')} style={styles.imgLogo} />
      <Text style={styles.titleStyle}>Maxillo</Text>
      <Text style={styles.subtitle}>Version 1.0.0</Text>
      <Text
        style={[
          styles.subtitle,
          {
            fontWeight: '700',
          },
        ]}
        onPress={() => {
          //   Linking.openURL('https://github.com/Chennai-Sharks');
        }}
      >
        By Team Maxillo
      </Text>
      <Text
        style={{
          margin: 20,
        }}
      >
        {' '}
      </Text>

      <Button
        style={styles.subtitle}
        onPress={() => {
          Linking.openURL('https://product.maxillo.in');
        }}
      >
        View the product page
      </Button>
      <Button
        style={styles.subtitle}
        onPress={() => {
          Linking.openURL('https://www.maxillo.in/auth');
        }}
      >
        To use the website dashboard
      </Button>
      <Button
        style={styles.subtitle}
        onPress={() => {
          Linking.openURL(
            'https://github.com/Chennai-Sharks/EMedico/releases/download/v1.0.0/Maxillo-Setup-1.0.0.exe'
          );
        }}
      >
        Use the desktop (windows) app
      </Button>
    </View>
  );
};
export default AboutScreen;
