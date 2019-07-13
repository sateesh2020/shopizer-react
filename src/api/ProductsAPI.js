import axios from 'axios';

import { API_URLS } from '../config/constants';

const GET_PRODUCTS = '/products';

class ProductsAPI {
  /*
   * Filtering product lists based on product attributes
   * ?category=1
   * &manufacturer=2
   * &type=...
   * &lang=en|fr NOT REQUIRED, will use request language
   * &start=0 NOT REQUIRED, can be used for pagination
   * &count=10 NOT REQUIRED, can be used to limit item count
   */
  static getAllProducts(filters) {
    return axios
      .get(`${API_URLS.BASE}${GET_PRODUCTS}`, {
        params: filters,
      })
      .then(response => response.data.products)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
  static getFeaturedProducts() {
    return axios
      .get(`${API_URLS.BASE}${GET_PRODUCTS}/group/FEATURED_ITEM`)
      .then(response => response.data.products)
      .catch(error => {
        console.error(error);
        return error;
      });
  }

  static getProductDetails(id) {
    return axios
      .get(`${API_URLS.BASE}${GET_PRODUCTS}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default ProductsAPI;
