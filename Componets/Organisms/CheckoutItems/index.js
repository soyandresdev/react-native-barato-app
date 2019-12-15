import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CartItems from '../../Molecules/CartItems/index';

const CheckoutItems: () => React$Node = ({cartItems, cartTotal, countCart}) => {
  const total = cartItems.reduce((act, item) => {
    const plus =
      Number(item.price.replace(/[^0-9\.]+/g, '')) * countCart[item.id];
    return act + plus;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.annouc}>
        <Text style={styles.anncText}>
          Please confirm your order and checkout your cart.
        </Text>
      </View>
      <View style={styles.ckitems}>
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => (
            <CartItems countCart={countCart} item={item} index={index} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.3, backgroundColor: '#34495e90'}} />
          )}
        />
        <Text style={styles.text}>Total: $ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  custForm: {
    flex: 1,
  },
  ckitems: {
    flex: 1,
  },
  annouc: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#34495e90',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'red',
  },
  anncText: {
    textAlign: 'center',
    color: '#fff',
  },
});
export default CheckoutItems;
