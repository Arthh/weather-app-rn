import { types } from './types';

export function fetchData(city){
  return {
    type: types.SEND_REQUEST,
    payload: {
      city
    }
  }
}

export const fetchDataSuccess = (city) => {
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: {
      city
    }
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {
      error
    },
  }
}