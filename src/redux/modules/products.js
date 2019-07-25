import update from 'immutability-helper';
import {
  merge,
  filter,
  find,
  inRange,
  map,
  includes,
  cloneDeep,
  keys,
} from 'lodash';

import ProductsAPI from '../../api/ProductsAPI';

import { PRICE_FILTERS, FILTERS } from '../../config/constants';

const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
const GET_FEATURE_ITEMS_SUCCESS = 'GET_FEATURE_ITEMS_SUCCESS';
const GET_FEATURE_ITEMS_FAILURE = 'GET_FEATURE_ITEMS_FAILURE';
const FILTER_PRODUCTS_SUCCESS = 'FILTER_PRODUCTS_SUCCESS';
const UPDATE_FILTERS = 'UPDATE_FILTERS';
const GET_RELATED_ITEMS_SUCCESS = 'GET_RELATED_ITEMS_SUCCESS';
const GET_RELATED_ITEMS_FAILURE = 'GET_RELATED_ITEMS_FAILURE';

const initialState = {
  products: [],
  product: {},
  featured: [],
  productsCopy: [],
  filters: {},
  related: [],
};

function updateProducts(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}

function updateFiltered(products) {
  return {
    type: FILTER_PRODUCTS_SUCCESS,
    products,
  };
}

function updateFilters(filters) {
  return {
    type: UPDATE_FILTERS,
    filters,
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

function updateRelated(related) {
  return {
    type: GET_RELATED_ITEMS_SUCCESS,
    related,
  };
}

function filterByCategory(allProducts, filterVal) {
  if (!filterVal) {
    return allProducts;
  }
  let _filtered = filter(allProducts, product => {
    let allProductCategs = map(product.categories, category => {
      return category.code;
    });
    return includes(allProductCategs, filterVal);
  });
  return _filtered;
}
function filterByManufacturer(allProducts, filterVal) {
  if (!filterVal) {
    return allProducts;
  }
  let _filtered = filter(allProducts, product => {
    return product.manufacturer.code === filterVal;
  });
  return _filtered;
}
function filterByPrice(allProducts, filterVal) {
  if (!filterVal) {
    return allProducts;
  }
  let priceFil = find(PRICE_FILTERS, { id: filterVal });
  let _filtered = filter(allProducts, product => {
    return inRange(product.price, priceFil.min, priceFil.max);
  });
  return _filtered;
}

function filterProductsPromise(newFilters, state) {
  let { filters, productsCopy } = state;
  let _filteredProducts = cloneDeep(productsCopy);
  let _filters = merge(filters, newFilters);
  let _keys = keys(_filters);
  return new Promise((resolve, reject) => {
    try {
      _keys.forEach((value, index) => {
        switch (value) {
          case FILTERS.CATEGORY:
            _filteredProducts = filterByCategory(
              _filteredProducts,
              _filters[value]
            );
            break;
          case FILTERS.PRICE:
            _filteredProducts = filterByPrice(
              _filteredProducts,
              _filters[value]
            );
            break;
          case FILTERS.MANUFACTURER:
            _filteredProducts = filterByManufacturer(
              _filteredProducts,
              _filters[value]
            );
            break;
          default:
            console.log('No Filter');
            break;
        }
        if (index === _keys.length - 1) {
          resolve({ filters: _filters, products: _filteredProducts });
        }
      });
    } catch (e) {
      reject({ message: 'Error while filtering products', error: e });
    }
  });
}

export function filterProducts(newFilters) {
  return function(dispatch, getState) {
    const state = getState();
    return filterProductsPromise(newFilters, state.productsStore)
      .then(response => {
        dispatch(updateFiltered(response.products));
        dispatch(updateFilters(response.filters));
      })
      .catch(error => {
        throw error;
      });
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

export function loadRelatedProducts(productID) {
  return function(dispatch) {
    return ProductsAPI.getRelatedProducts(productID)
      .then(products => {
        dispatch(updateRelated(products));
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
        productsCopy: {
          $set: action.products,
        },
      });
    case FILTER_PRODUCTS_SUCCESS:
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
    case UPDATE_FILTERS:
      return update(state, {
        filter: {
          $set: action.filters,
        },
      });
    case GET_RELATED_ITEMS_SUCCESS:
      return update(state, {
        related: {
          $set: action.related,
        },
      });
    default:
      return state;
  }
}
