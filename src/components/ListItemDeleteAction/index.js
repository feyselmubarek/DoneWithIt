import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={25} color={colors.white} />
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
    width: 60,
    height: '100%',
  },
});
