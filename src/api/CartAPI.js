import axios from 'axios';
import { API_URLS } from '../config/constants';

const getCustomerCartUrl = customerID => {
  return `/customers/${customerID}/cart`;
};

const getCartUrlByCode = cartCode => {
  if (cartCode) {
    return `/cart/${cartCode}`;
  }
  return `/cart`;
};
class CartAPI {
  static getCustomerCart(customerID) {
    return axios
      .get(`${API_URLS.BASE}${getCustomerCartUrl(customerID)}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }

  static updateProductsInCustomerCart(customerID, newProduct) {
    return axios
      .post(`${API_URLS.BASE}${getCustomerCartUrl(customerID)}`, newProduct)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }

  static getCartByCode(cartCode) {
    return axios
      .get(`${API_URLS.BASE}${getCartUrlByCode(cartCode)}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }

  static updateProductsInCart(cartCode, newProduct) {
    var request = {
      method: cartCode ? 'put' : 'post',
      url: `${API_URLS.BASE}${getCartUrlByCode(cartCode)}`,
      data: newProduct,
    };
    return axios(request)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default CartAPI;
