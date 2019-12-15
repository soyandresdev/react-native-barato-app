import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import {connect} from 'react-redux';

const Cart: () => React$Node = ({cartItems, cartTotal, navigation}) => {
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    startAnimation();
  }, [cartItems, startAnimation]);

  const onPress = () => {
    navigation.navigate('Checkout');
  };

  const startAnimation = useCallback(
    event => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        setTimeout(() => {
          endAnimation();
        }, 100);
      });
    },
    [endAnimation, opacity],
  );

  const endAnimation = useCallback(
    event => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }).start();
    },
    [opacity],
  );

  let animatedStyle = {opacity: opacity};
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.cart}>Your cart: {cartItems.length} items</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cart,
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cart: {
    color: 'white',
    fontSize: 14,
  },
});
export default connect(mapStateToProps)(Cart);
