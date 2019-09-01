import * as React from 'react';

import { Typography } from '../../../ui';

import Form from './form';
import css from './main.module.css';

const Authorization : React.FC = () => {
  return (
    <div className={css.auth_block}>
      <div className={css.auth_container}>
        <Typography tag="h2" weight="light" color="black" className={css.title}>
          Enter your account
        </Typography>
        <Typography tag="p" weight="regular" color="sky" className={css.description}>
          Fill this form to enter application
           and start building your dream.
        </Typography>
        <div className="form_container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Authorization;
