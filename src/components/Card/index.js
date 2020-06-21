import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText style={styles.subTitleText}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitleText: {
    color: colors.secondary,
    marginVertical: 5,
  },
});
