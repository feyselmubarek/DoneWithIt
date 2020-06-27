import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import AppSafeArea from '../components/AppSafeArea';
import AppIcon from '../components/AppIcon/AppIcon';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Separator from '../components/Separator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <AppSafeArea style={styles.safeArea}>
      <View style={styles.container}>
        <ListItem
          title="Feysel Mubarek"
          subTitle="feyselmubarek@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={
            <AppIcon
              name="logout"
              iconColor={colors.dark}
              backgroundColor="#ffe66d"
            />
          }
        />
      </View>
    </AppSafeArea>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  safeArea: {
    backgroundColor: colors.light,
  },
});
