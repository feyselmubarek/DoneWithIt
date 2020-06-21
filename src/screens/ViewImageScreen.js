import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={30}
        color="white"
      />

      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        color="white"
        style={styles.deleteIcon}
      />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
