import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';

const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitile}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subTitile: {
    fontSize: 16,
    color: colors.meduim,
  },
});
