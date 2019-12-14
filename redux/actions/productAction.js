import {FETCH_PRODUCTS} from './types';
import {getProducts} from '../../Data/index';

export const fetchProducts = () => dispatch => {
  const products = getProducts();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products.products,
  });
};
