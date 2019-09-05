import { SagaIterator } from 'redux-saga';
import { takeLatest, select, put } from 'redux-saga/effects';
import { Action } from 'redux';

import * as API from '../../../utils/api';
import { TYPES, ACTIONS } from '../../system/tasks';

function* getToken() : SagaIterator {
  const store = yield select();

  return store.user.token as string;
}

function* tasksGet() {
  const token = yield getToken();

  try {
    const response = yield API.tasksGetRequest.json({
      token,
    });

    if (!response.ok) throw new Error(`Response is not ok... Status is ${response.status}`);

    yield put(ACTIONS.tasksGetSuccess(response.body.tasks));
  } catch (error) {
    console.error(error);
  }
}

function* taskPut(action: TYPES.IPutTaskAction) {
  const token = yield getToken();

  try {
    const response = yield API.tasksPutRequest.json({
      token,
      body: JSON.stringify(action.payload),
    });

    if (!response.ok) throw new Error(`Response is not ok... Status is ${response.status}`);

    yield put(ACTIONS.taskPutSuccess(response.body.task));
  } catch (error) {
    console.error(error);
  }

  console.log(action.type, ' = called with token: ', token);
  yield null;
}

function* taskDelete(action: TYPES.IDeleteTaskAction) {
  const token = yield getToken();

  try {
    const response = yield API.taskDeleteRequest.json({
      token,
      query: {
        id: action.payload.id,
      },
    });

    if (!response.ok) throw new Error(`Response is not ok... Status is ${response.status}`);

    yield put(ACTIONS.taskDeleteSuccess(response.body.task));
  } catch (err) {
    console.error(err);
  }
}

export default function* tasksSaga() : SagaIterator {
  yield takeLatest(TYPES.TASK_GET_REQUEST, tasksGet);
  yield takeLatest(TYPES.TASK_PUT_REQUEST, taskPut);
  yield takeLatest(TYPES.TASK_DELETE_REQUEST, taskDelete);
}
