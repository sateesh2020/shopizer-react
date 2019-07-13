import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import categories from './modules/categories';
import products from './modules/products';
import manufactures from './modules/manufactures';

const reducer = combineReducers({
  form,
  categories,
  products,
  manufactures,
});

export default reducer;
