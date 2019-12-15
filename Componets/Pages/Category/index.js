/**
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, ImageBackground} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import styles from './styles';

const Category: NavigationStackScreenComponent = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <ImageBackground
            source={{
              uri: 'https://picsum.photos/id/200/200/300',
            }}
            style={{width: '100%', height: '100%'}}>
            <Text style={styles.title}>Categories</Text>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

Category.navigationOptions = {
  title: 'Categories',
};

const mapStateToProps = state => ({
  products: state.products.items,
});

export default connect(mapStateToProps, {})(Category);
