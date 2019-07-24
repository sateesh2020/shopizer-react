import axios from 'axios';
import { API_URLS } from '../config/constants';

const getCustomerCartUrl = customerID => {
  return `/customers/${customerID}/cart`;
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

  static updateProductsInCustomerCart(customerID, request) {
    return axios
      .post(`${API_URLS.BASE}${getCustomerCartUrl(customerID)}`, request)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default CartAPI;
