import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';

import * as TASKS from '../../core/system/tasks';
import { IAppState } from '../../core/store';
import TasksPage from '../../components/page/tasks';

interface IStateProps {
  tasks: TASKS.TYPES.ITasks;
}

interface IDispatchProps {
  getTasks: () => void;
  putTask: (payload: TASKS.TYPES.ICreateTask) => void;
}

export type Props = IStateProps & IDispatchProps & RouteProps;

const mapStateToProps = (state: IAppState, ownProp: RouteProps) : IStateProps => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteProps) : IDispatchProps => ({
  getTasks: () => {
    dispatch(TASKS.ACTIONS.tasksGetRequest());
  },
  putTask: (payload) => {
    dispatch(TASKS.ACTIONS.taskPutRequest(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksPage);
