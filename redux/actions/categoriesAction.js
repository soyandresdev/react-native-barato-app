import {FETCH_PRODUCTS} from './types';
import {getCategories} from '../../Data/index';

export const fetchCategories = () => dispatch => {
  const categories = getCategories();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: categories.categories,
  });
};
