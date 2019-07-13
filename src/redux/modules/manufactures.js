import update from 'immutability-helper';

import ManufacturerAPI from '../../api/ManufacturerAPI';

const GET_MANUFACTURES_SUCCESS = 'GET_MANUFACTURES_SUCCESS';
const GET_MANUFACTURES_FAILURE = 'GET_MANUFACTURES_FAILURE';

const initialState = {
  manufactures: [],
};

function updateManufactures(manufactures) {
  return {
    type: GET_MANUFACTURES_SUCCESS,
    manufactures,
  };
}

export function loadManufactures() {
  return function(dispatch) {
    return ManufacturerAPI.getAllManufactures()
      .then(manufactures => {
        dispatch(updateManufactures(manufactures));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MANUFACTURES_SUCCESS:
      return update(state, {
        manufactures: {
          $set: action.manufactures,
        },
      });
    default:
      return state;
  }
}
