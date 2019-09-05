import * as TYPES from './types';

const initialState : TYPES.ITasks = {
  tasks: [],
  isFetching: false,
};

const tasks = (
  state: TYPES.ITasks = initialState,
  action: TYPES.TaskActionTypes,
) : TYPES.ITasks => {
  switch (action.type) {
    case TYPES.TASK_GET_REQUEST:
    case TYPES.TASK_PUT_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    } case TYPES.TASK_GET_SUCCESS: {
      const { payload } = action as TYPES.IGetTasksSuccess;

      return {
        ...state,
        tasks: payload,
        isFetching: false,
      };
    } case TYPES.TASK_PUT_SUCCESS: {
      const { payload } = action as TYPES.IPutTaskSuccess;

      return {
        ...state,
        tasks: [...state.tasks, payload],
        isFetching: false,
      };
    } case TYPES.TASK_DELETE_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    } case TYPES.TASK_DELETE_SUCCESS: {
      const { payload } = action as TYPES.IDeleteTaskSuccess;

      return {
        ...state,
        tasks: state.tasks.filter(item => (item.id !== payload.id)),
        isFetching: false,
      };
    }
    default: return state;
  }
};

export default tasks;
