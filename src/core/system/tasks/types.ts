import { Action } from 'redux';

// Helper data shapes
export interface IStatus {
  completed: boolean;
}

// Main data shapes
export interface ICreateTask {
  title: string;
  description: string;
}

export interface IDeleteTask {
  id: string;
}

export interface IToggleTask {
  id: string;
  completed: boolean;
}

export interface ITask extends ICreateTask {
  id: string;
  status: IStatus;
}

export interface ITasks {
  tasks: ITask[];
  isFetching: boolean;
}

export const TASK_GET_REQUEST = 'TASK_GET_REQUEST';
export const TASK_PUT_REQUEST = 'TASK_CREATE_REQUEST';
export const TASK_DELETE_REQUEST = 'TASK_DELETE_REQUEST';
export const TASK_TOGGLE_REQUEST = 'TASK_TOGGLE_REQUEST';

export const TASK_GET_SUCCESS = 'TASK_GET_SUCCESS';
export const TASK_PUT_SUCCESS = 'TASK_PUT_SUCCESS';
export const TASK_DELETE_SUCCESS = 'TASK_DELETE_SUCCESS';
export const TASK_TOGGLE_SUCCESS = 'TASK_TOGGLE_SUCCESS';

export interface ITaskAction<T> extends Action<string> {
  payload: T;
}

export type TaskActionTypes =
  ITaskAction<
      ICreateTask |
      ITask |
      ITask[] |
      IDeleteTask |
      IToggleTask
  >;
