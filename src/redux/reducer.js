import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import categories from './modules/categories';
import products from './modules/products';

const reducer = combineReducers({
  form,
  categories,
  products,
});

export default reducer;