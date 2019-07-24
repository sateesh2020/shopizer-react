import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import categoriesStore from './modules/categories';
import productsStore from './modules/products';
import manufacturesStore from './modules/manufactures';
import cartStore from './modules/cart';

const reducer = combineReducers({
  form,
  categoriesStore,
  productsStore,
  manufacturesStore,
  cartStore,
});

export default reducer;
