import { Action } from 'redux';

export interface ICreateTask {
  title: string;
  description: string;
}

export interface ITask extends ICreateTask {
  id: string;
}

export interface ITasks {
  tasks: ITask[];
  isFetching: boolean;
}

export const TASK_GET_REQUEST = 'TASK_GET_REQUEST';
export const TASK_PUT_REQUEST = 'TASK_CREATE_REQUEST';

export const TASK_GET_SUCCESS = 'TASK_GET_SUCCESS';
export const TASK_PUT_SUCCESS = 'TASK_PUT_SUCCESS';

export interface IPutTaskAction extends Action<string> {
  payload: ICreateTask;
}

export interface IGetTasksSuccess extends Action<string> {
  payload: ITask[];
}

export interface IPutTaskSuccess extends Action<string> {
  payload: ITask;
}

export type TaskActionTypes = IGetTasksSuccess | IPutTaskAction | IPutTaskSuccess;
