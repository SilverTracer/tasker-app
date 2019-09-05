import { SagaIterator } from 'redux-saga';
import { takeLatest, select } from 'redux-saga/effects';
import { Action } from 'redux';

import { TYPES, ACTIONS } from '../../system/tasks';

function* getToken() : SagaIterator {
  const store = yield select();

  return store.user.token as string;
}

function* tasksGet(action : Action) {
  console.log(action.type, ' = called');
  yield null;
}

function* taskPut(action: TYPES.IPutTaskAction) {
  const token = yield getToken();

  console.log(action.type, ' = called with token: ', token);
  yield null;
}

export default function* tasksSaga() : SagaIterator {
  yield takeLatest(TYPES.TASK_GET_REQUEST, tasksGet);
  yield takeLatest(TYPES.TASK_PUT_REQUEST, taskPut);
}
