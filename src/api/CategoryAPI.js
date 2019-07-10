import axios from 'axios';
import { API_CONSTANTS } from '../config';

const GET_CATEGORIES = '/category';

class CategoryAPI {
  static getAllCategories() {
    return axios
      .get(`${API_CONSTANTS.URL}${GET_CATEGORIES}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
  static getCategoryDetails(id) {
    return axios
      .get(`${API_CONSTANTS.URL}${GET_CATEGORIES}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
export default CategoryAPI;
