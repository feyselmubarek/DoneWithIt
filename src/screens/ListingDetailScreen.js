import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}><ListItem
          title="Mosh Hamedani"
          subTitle="5 Listing"
          image={require('../assets/mosh.jpg')}
        /></View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    marginVertical: 10,
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
      marginVertical: 20
  }
});
