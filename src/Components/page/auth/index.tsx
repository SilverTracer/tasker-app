import * as React from 'react';

import { Props } from '../../../containers/auth';
import { Typography } from '../../ui';

import * as css from './main.module.css';

const AuthPage : React.FC<Props> = (props) => {
  return (
    <div className={css.auth_wrapper}>
      <Typography tag="h2" weight="light" color="black_2">
        {`Hello, ${props.user.username || 'Guest'}!`}
      </Typography>
    </div>
  );
};

export default AuthPage;
