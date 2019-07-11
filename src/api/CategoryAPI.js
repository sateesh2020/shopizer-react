import axios from 'axios';
import { API_URLS } from '../config/constants';

const GET_CATEGORIES = '/category';

class CategoryAPI {
  static getAllCategories() {
    return axios
      .get(`${API_URLS.BASE}${GET_CATEGORIES}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
  static getCategoryDetails(id) {
    return axios
      .get(`${API_URLS.BASE}${GET_CATEGORIES}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default CategoryAPI;
