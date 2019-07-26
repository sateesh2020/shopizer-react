import update from 'immutability-helper';
import { find, result } from 'lodash';

import CartAPI from '../../api/CartAPI';

const GET_CART_SUCCESS = 'GET_CUSTOMER_CART_SUCCESS';
const GET_CART_FAILURE = 'GET_CUSTOMER_CART_FAILURE';

const initialState = {
  cart: {},
};

function updateCart(cart) {
  return {
    type: GET_CART_SUCCESS,
    cart,
  };
}

function buildUpdateData(request, state) {
  let { productID, quantity } = request;
  let { cart } = state;
  let existingProducts = cart.products;

  let existingQuantity = result(
    find(existingProducts, function(product) {
      return product.id === productID;
    }),
    'quantity',
    0
  );
  return {
    attributes: request.attributes || [{ id: 0 }],
    product: productID,
    quantity: quantity + existingQuantity,
  };
}

export function loadCustomerCart(customerID) {
  return function(dispatch) {
    return CartAPI.getCustomerCart(customerID)
      .then(cart => {
        dispatch(updateCart(cart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadCartByCode(cartCode) {
  return function(dispatch) {
    return CartAPI.getCartByCode(cartCode)
      .then(cart => {
        dispatch(updateCart(cart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateProductsInCart(request) {
  return function(dispatch, getState) {
    const state = getState();
    let data = buildUpdateData(request, state.cartStore);
    return CartAPI.updateProductsInCart(request.cartCode, data, state)
      .then(cart => {
        dispatch(updateCart(cart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return update(state, {
        cart: {
          $set: action.cart,
        },
      });
    default:
      return state;
  }
}
