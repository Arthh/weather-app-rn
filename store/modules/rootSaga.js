import { all } from 'redux-saga/effects';
import city from './City/saga';

export default function* rootSaga() {
  yield all([city])
}