import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={7}
      source={require('../assets/background.jpg')}
      style={styles.backgorund}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell What You Don't Need!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log('login')} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgorund: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
});
