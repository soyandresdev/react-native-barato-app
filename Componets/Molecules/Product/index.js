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
        style={{width: 150, height: 150}}
      />
      <View style={styles.productDes}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
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
    margin: 10,
    flexDirection: 'row',
  },
  productDes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
  },
  addBtn: {
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#00d',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
});

export default Product;
