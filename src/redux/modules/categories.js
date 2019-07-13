import update from 'immutability-helper';

import CategoryAPI from '../../api/CategoryAPI';

const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

const initialState = {
  categories: [],
  category: {
    children: [],
  },
};

function updateCategories(categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories,
  };
}

function updateCategory(category) {
  return {
    type: GET_CATEGORY_SUCCESS,
    category,
  };
}

export function loadCategories() {
  return function(dispatch) {
    return CategoryAPI.getAllCategories()
      .then(categories => {
        dispatch(updateCategories(categories));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadCategory(id) {
  return function(dispatch) {
    return CategoryAPI.getCategoryDetails(id)
      .then(category => {
        dispatch(updateCategory(category));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return update(state, {
        categories: {
          $set: action.categories,
        },
      });
    case GET_CATEGORY_SUCCESS:
      return update(state, {
        category: {
          $set: action.category,
        },
      });
    default:
      return state;
  }
}
