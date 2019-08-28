import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';

import * as USER from '../../core/system/user';
import { IAppState } from '../../core/store';

interface IStateProps {
  user: USER.TYPES.IUser;
}

interface IDispatchProps {
  authenticate: (payload: USER.TYPES.IAuthUser) => void;
  register: (payload: USER.TYPES.IRegUser) => void;
}

type Props = IStateProps & IDispatchProps & RouteProps;

const mapStateToProps = (state: IAppState, ownProp: RouteProps) : IStateProps => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteProps) : IDispatchProps => ({
  authenticate: (payload) => {
    dispatch(USER.ACTIONS.authUserRequest(payload));
  },
  register: (payload) => {
    dispatch(USER.ACTIONS.regUserRequest(payload));
  },
});

class Auth extends React.Component<Props> {
  render() {
    const { user } = this.props;

    return (
      <div>
        Hello, {user.username || 'TS'}!
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
