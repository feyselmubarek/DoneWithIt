import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});
