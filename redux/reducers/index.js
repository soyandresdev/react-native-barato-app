import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  order: orderReducer,
});
