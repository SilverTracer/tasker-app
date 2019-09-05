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
      return {
        ...state,
        tasks: action.payload as TYPES.ITask[],
        isFetching: false,
      };
    } case TYPES.TASK_PUT_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload as TYPES.ITask],
        isFetching: false,
      };
    }
    default: return state;
  }
};

export default tasks;
