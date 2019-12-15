import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_PRODUCT_COUNT,
  REMOVE_PRODUCT_COUNT,
} from './types';

export const addToCart = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
export const removeItem = item => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};
export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART,
  });
};

export const addCountCart = item => dispatch => {
  dispatch({
    type: ADD_PRODUCT_COUNT,
    payload: item,
  });
};

export const removeCountCart = item => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_COUNT,
    payload: item,
  });
};
