import update from 'immutability-helper';

import CartAPI from '../../api/CartAPI';

const GET_CUSTOMER_CART_SUCCESS = 'GET_CUSTOMER_CART_SUCCESS';
const GET_CUSTOMER_CART_FAILURE = 'GET_CUSTOMER_CART_FAILURE';

const initialState = {
  cart: {},
};

function updateCustomerCart(cart) {
  return {
    type: GET_CUSTOMER_CART_SUCCESS,
    cart,
  };
}

export function loadCustomerCart(customerID) {
  return function(dispatch) {
    return CartAPI.getCustomerCart(customerID)
      .then(cart => {
        dispatch(updateCustomerCart(cart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateProductsInCustomerCart(request) {
  var data = {
    attributes: [
      {
        id: 0,
      },
    ],
    product: request.productID,
    quantity: request.quantity,
  };
  return function(dispatch) {
    return CartAPI.updateProductsInCustomerCart(request.customerID, data)
      .then(cart => {
        dispatch(updateCustomerCart(cart));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_CART_SUCCESS:
      return update(state, {
        cart: {
          $set: action.cart,
        },
      });
    default:
      return state;
  }
}
