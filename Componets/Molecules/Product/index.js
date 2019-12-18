import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Product: () => React$Node = ({product, addItemsToCart}) => {
  const addToCart = () => {
    addItemsToCart(product);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://picsum.photos/id/${product.sublevel_id}/200/300`,
        }}
        style={styles.imagen}
      />
      <View style={styles.productDes}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productTotal}>{product.price}</Text>
        <TouchableOpacity onPress={addToCart} style={styles.addBtn}>
          <Text style={styles.text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 10,
    overflow: 'visible',
    elevation: 1,
  },
  productDes: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  addBtn: {
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#689cfc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    padding: 10,
  },
  imagen: {width: 150, height: 150, borderRadius: 10},
  productTitle: {
    fontSize: 20,
  },
  productTotal: {
    fontSize: 18,
    color: '#ffa462',
  },
});

export default Product;
