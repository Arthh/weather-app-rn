import { types } from './types';

const initialState = {
  loading: false,
  cities: [{name: 'oi', state: 'io'}],
  error: false,
};

const saveNewCity = (state, action) => {
  if(state.cities.lenght === 3 ){
    state.cities.unshift()
  }

  const updatedCities = {
    ...state,
    cities: action.payload.city
  }

  return updatedCities;
}

const cityReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true
      }

    case types.SEND_REQUEST_SUCCESS:
      return saveNewCity(state,action)
      // return {
      //   ...state,
      //   loading: false,
      //   cities: action.payload,
      //   error: false
      // }

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