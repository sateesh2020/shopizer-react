import update from 'immutability-helper';

import ProductsAPI from '../../api/ProductsAPI';

const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
const GET_FEATURE_ITEMS_SUCCESS = 'GET_FEATURE_ITEMS_SUCCESS';
const GET_FEATURE_ITEMS_FAILURE = 'GET_FEATURE_ITEMS_FAILURE';

const initialState = {
  products: [],
  product: {},
  featured: [],
};

function updateProducts(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}

function updateProduct(product) {
  return {
    type: GET_PRODUCT_SUCCESS,
    product,
  };
}

function updateFeatured(featured) {
  return {
    type: GET_FEATURE_ITEMS_SUCCESS,
    featured,
  };
}

export function loadProducts(filters) {
  return function(dispatch) {
    return ProductsAPI.getAllProducts(filters)
      .then(products => {
        dispatch(updateProducts(products));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadProduct(id) {
  return function(dispatch) {
    return ProductsAPI.getProductDetails(id)
      .then(product => {
        dispatch(updateProduct(product));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadFeaturedProducts() {
  return function(dispatch) {
    return ProductsAPI.getFeaturedProducts()
      .then(products => {
        dispatch(updateFeatured(products));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return update(state, {
        products: {
          $set: action.products,
        },
      });
    case GET_PRODUCT_SUCCESS:
      return update(state, {
        product: {
          $set: action.product,
        },
      });
    case GET_FEATURE_ITEMS_SUCCESS:
      return update(state, {
        featured: {
          $set: action.featured,
        },
      });
    default:
      return state;
  }
}
