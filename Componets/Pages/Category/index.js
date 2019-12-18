/**
 * @flow
 */

import React from 'react';
import {filter} from 'lodash';
import {connect} from 'react-redux';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import Accordion from '../../Atoms/Accordion/index';
import styles from './styles';

const Category: NavigationStackScreenComponent = ({categories, products}) => {
  const renderItemAccordion = data => {
    return data.map(item => {
      const filterProductsForCategory = filter(products, {
        sublevel_id: item.id,
      });
      return (
        <Accordion
          key={item.name}
          {...item}
          products={filterProductsForCategory}>
          {item.sublevels && <>{renderItemAccordion(item.sublevels)}</>}
        </Accordion>
      );
    });
  };
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <ImageBackground
            source={{
              uri: 'https://picsum.photos/id/200/200/300',
            }}
            style={styles.imagenBackground}>
            <Text style={styles.title}>List Products</Text>
          </ImageBackground>
        </View>
        <ScrollView>{renderItemAccordion(categories)}</ScrollView>
      </View>
    </>
  );
};

Category.navigationOptions = {
  title: 'Categories',
};

const mapStateToProps = state => ({
  categories: state.categories.items,
  products: state.products.items,
});

export default connect(mapStateToProps, {})(Category);
