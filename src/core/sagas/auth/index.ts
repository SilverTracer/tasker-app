import { Action } from 'redux';
import { takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { TYPES, ACTIONS } from '../../system/user';

function* authSaga(action: TYPES.IAuthUserAction) {
  try {
    const data = yield action;

    console.log('Auth saga');
  } catch (err) {
    console.error(err);
  }
}

function* registerSaga(action: TYPES.IRegUserAction) {
  try {
    const data = yield action;

    console.log('Reg saga');
  } catch (err) {
    console.error(err);
  }
}

function* logoutSaga(action: Action) {
  try {
    const data = yield action;

    console.log('LO saga');
  } catch (err) {
    console.error(err);
  }
}

export default function* userSaga() : SagaIterator {
  yield takeLatest(TYPES.USER_REG_REQUEST, registerSaga);
  yield takeLatest(TYPES.USER_AUTH_REQUEST, authSaga);
  yield takeLatest(TYPES.LOGOUT, logoutSaga);
}
