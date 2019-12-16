/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Animated} from 'react-native';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Cart from '../Componets/Molecules/Cart/index';
import CartItems from '../Componets/Molecules/CartItems/index';
import Product from '../Componets/Molecules/Product/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers();

const mockStore = configureMockStore();
const store = mockStore({
  cart: {
    cart: [],
    total: 0,
    countCart: {'58b5a5b1b6b6c7aacc25b3fb': 1},
  },
});

describe('Renders correctly Molecules', () => {
  it('Renders correctly Cart', () => {
    renderer.create(
      <Provider store={store}>
        <Cart
          cartItems={[
            {
              quantity: 308,
              price: '$8,958',
              available: false,
              sublevel_id: 3,
              name: 'aute',
              id: '58b5a5b1b6b6c7aacc25b3fb',
            },
            {
              quantity: 891,
              price: '$5,450',
              available: true,
              sublevel_id: 3,
              name: 'mollit 2',
              id: '58b5a5b117bf36cf8aed54ab',
            },
          ]}
        />
      </Provider>,
    );
  });
  it('Renders correctly CartItems', () => {
    renderer.create(
      <Provider store={store}>
        <CartItems
          item={{
            quantity: 308,
            price: '$8,958',
            available: false,
            sublevel_id: 3,
            name: 'aute',
            id: '58b5a5b1b6b6c7aacc25b3fb',
          }}
          countCart={{'58b5a5b1b6b6c7aacc25b3fb': 1}}
        />
      </Provider>,
    );
  });
  it('Renders correctly Product', () => {
    renderer.create(
      <Product
        product={{
          quantity: 308,
          price: '$8,958',
          available: false,
          sublevel_id: 3,
          name: 'aute',
          id: '58b5a5b1b6b6c7aacc25b3fb',
        }}
      />,
    );
  });
});
