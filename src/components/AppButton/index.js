import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const AppButton = ({title, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity
      style={[styles.appButton, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  appButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  title: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
