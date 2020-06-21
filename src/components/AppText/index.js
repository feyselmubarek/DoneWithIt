import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const AppText = ({children, style}) => {
  return <Text style={[styles.appText, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  appText: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
