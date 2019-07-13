import axios from 'axios';
import { API_URLS } from '../config/constants';

const GET_MANUFACTURES = '/manufacturers/';

class ManufacturerAPI {
  static getAllManufactures() {
    return axios
      .get(`${API_URLS.BASE}${GET_MANUFACTURES}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}

export default ManufacturerAPI;
