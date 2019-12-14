/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  NavigationStackScreenComponent,
  createStackNavigator,
} from 'react-navigation-stack';
import categories from '../../../Data/categories.json';

const Category: NavigationStackScreenComponent = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>
      </View>
    </>
  );
};

Category.navigationOptions = {
  title: 'Categories',
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
});

const CategoryStack = createStackNavigator(
  {Category},
  {
    initialRouteName: 'Category',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#111d5e',
      },
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold',
      },
    },
  },
);

export default CategoryStack;
