import {FETCH_PRODUCTS} from '../actions/types';
import {getProducts} from '../../Data/index';

const products = getProducts();
const initialState = {
  items: products.products,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
