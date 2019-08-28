import * as React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';

import * as USER from '../../core/system/user';

interface StateProps {
  user: USER.TYPES.IUser;
}

interface DispatchProps {
  authenticate: (payload: USER.TYPES.IAuthUser) => void;
  register: (payload: USER.TYPES.IRegUser) => void;
}

type Props = StateProps & DispatchProps & RouteProps;

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

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
