import update from 'immutability-helper';

import ProductsAPI from '../../api/ProductsAPI';

const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

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

export function loadProducts() {
  return function(dispatch) {
    return ProductAPI.getAllProducts()
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
    return ProductAPI.getProductDetails(id)
      .then(product => {
        dispatch(updateProduct(product));
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
    default:
      return state;
  }
}
