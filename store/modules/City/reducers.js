import { Reducer } from 'redux';
import producer from 'immer'

import types from './types';

const initialState = {
  cities: [],
  error: false,
};

const city = ( state = initialState, action ) => {

  return producer(state, draft => {
    switch(action.type) {
      case types.SEND_REQUEST_SUCCESS: {
        const { city } = action.payload;
        if(draft.cities.length === 3){
          draft.cities.unshift();
          draft.cities.push(city)
        }
        else {
          draft.cities.push(city)
        }
        draft.error = false;
        break;
      }

      case types.SEND_REQUEST_FAILURE: {
        const { error } = action.payload;
        draft.error = error;
        break;
      }

    } 
  })
}

export default city;