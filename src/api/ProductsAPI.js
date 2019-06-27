import axios from 'axios';
import { API_CONSTANTS } from '../config';

const GET_PRODUCTS = '/products';

class ProductsAPI {
  static getAllProducts() {
    return axios
      .get(`${API_CONSTANTS.URL}${GET_PRODUCTS}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
  static getFeaturedProducts() {
    return axios
      .get(`${API_CONSTANTS.URL}${GET_PRODUCTS}/group/FEATURED_ITEM`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }

  static getProductDetails(id) {
    return axios
      .get(`${API_CONSTANTS.URL}${GET_PRODUCTS}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default ProductsAPI;
