import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_COUNT,
  REMOVE_PRODUCT_COUNT,
} from '../actions/types';

const initialState = {
  cart: [],
  total: 0,
  countCart: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        total:
          state.total + Number(action.payload.price.replace(/[^0-9\.]+/g, '')),
        countCart: {...state.countCart, ...{[action.payload.id]: 1}},
      };
    case ADD_PRODUCT_COUNT:
      return {
        ...state,
        countCart: {...state.countCart, ...action.payload},
      };
    case REMOVE_PRODUCT_COUNT:
      return {
        ...state,
        countCart: {...state.countCart, ...action.payload},
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.payload.index),
        total: state.total - action.payload.item.cost,
      };
    default:
      return state;
  }
}
