import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import categories from './modules/categories';

const reducer = combineReducers({
  form,
  categories,
});

export default reducer;
