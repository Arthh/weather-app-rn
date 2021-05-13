import { types } from './types';

const initialState = {
  loading: false,
  cities: [],
  error: false,
};

const cityReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true
      }

    case types.SEND_REQUEST_SUCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
        error: false
      }

    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        cities: [],
        error: action.error
      }
  }
}

export default cityReducer