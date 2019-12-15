import {FETCH_CATEGORIES} from '../actions/types';
import {getCategories} from '../../Data/index';

const categories = getCategories();
const initialState = {
  items: categories.categories,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
