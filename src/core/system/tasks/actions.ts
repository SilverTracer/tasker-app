import { Action } from 'redux';

import * as TYPES from './types';

// Tasks getters
export const tasksGetRequest = () : Action<string> => ({
  type: TYPES.TASK_GET_REQUEST,
});

export const tasksGetSuccess = (payload: TYPES.ITask[]) : TYPES.TaskActionTypes => ({
  payload,
  type: TYPES.TASK_GET_SUCCESS,
});

// Tasks mutation actions
export const taskPutRequest = (payload: TYPES.ICreateTask) : TYPES.TaskActionTypes => ({
  payload,
  type: TYPES.TASK_PUT_REQUEST,
});

export const taskPutSuccess = (payload: TYPES.ITask) : TYPES.TaskActionTypes => ({
  payload,
  type: TYPES.TASK_PUT_SUCCESS,
});

export const taskDeleteRequest = (payload: TYPES.IDeleteTask) : TYPES.TaskActionTypes => ({
  payload,
  type: TYPES.TASK_DELETE_REQUEST,
});

export const taskDeleteSuccess = (payload: TYPES.IDeleteTask) : TYPES.TaskActionTypes => ({
  payload,
  type: TYPES.TASK_DELETE_SUCCESS,
});
