import { types } from './types';

export function fetchData(city){
  return {
    type: types.SEND_REQUEST,
    payload: city
  }
}

export const fetchDataSuccess = (cities) => {
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: cities
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error
  }
}