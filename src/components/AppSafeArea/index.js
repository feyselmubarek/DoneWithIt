import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';

const AppSafeArea = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
  );
};

export default AppSafeArea;

const styles = StyleSheet.create({
  safeArea: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
