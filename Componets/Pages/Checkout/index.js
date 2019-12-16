import React from 'react';
import {StatusBarIOS} from 'react-native';
import {connect} from 'react-redux';
import CheckoutItems from '../../Organisms/CheckoutItems/index';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

const Checkout: NavigationStackScreenComponent<Props> = ({
  cartItems,
  navigation,
  cartTotal,
  countCart,
}) => {
  return (
    <>
      <CheckoutItems
        cartItems={cartItems}
        cartTotal={cartTotal}
        countCart={countCart}
        navigation={navigation}
      />
    </>
  );
};

Checkout.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Checkout',
  };
};

const mapStateToProps = state => ({
  cartItems: state.cart.cart,
  countCart: state.cart.countCart,
  cartTotal: state.cart.total,
});
export default connect(mapStateToProps)(Checkout);
