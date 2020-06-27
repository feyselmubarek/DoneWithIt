import React from 'react';
import AppSafeArea from '../components/AppSafeArea';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';

const listing = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 100,
    image: require('../assets/couch.jpg'),
  },
];

const ListingScreen = () => {
  return (
    <AppSafeArea style={styles.appSafeArea}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </AppSafeArea>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  appSafeArea: {
    padding: 10,
  },
});
