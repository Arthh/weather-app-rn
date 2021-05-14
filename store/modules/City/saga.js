import { all, takeLatest, put, select } from 'redux-saga/effects';
import types from './types';
import { fetchDataSuccess, fetchDataFailure } from './actions';

function* checkCity({ payload }) {
  const { city } = payload;

  try{
    const check = yield select(state => {
      return state.city.cities.find(item => item.city === city.city)
    });

    if(!check) {
      yield put(fetchDataSuccess(city));
    }else{
      yield put(fetchDataFailure(true));
    }

  }catch(err){
    yield put(fetchDataFailure(true));
  }
}

export default all([
  takeLatest(types.SEND_REQUEST, checkCity)
])