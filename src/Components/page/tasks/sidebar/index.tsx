import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '../../../ui';

import * as css from './main.module.css';

const Sidebar : React.FC<{}> = () => {
  return (
    <div className={css.sidebar}>
        <img className={css.bg_image} src="http://localhost:8080/assets/images/auth.jpeg" alt="Sidebar image"/>
        <div className={css.user}>
          <Typography tag="h3" color="white_2" weight="light">User Name</Typography>
          <Typography tag="p" color="ash_2" className={css.contact}>e-mail@mail.ru</Typography>
        </div>
        <div className={css.menu_wrapper}>
          <ul className={css.menu}>
            <li>
              <NavLink exact to="/" className={css.link} activeClassName={css.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/tasks" className={css.link} activeClassName={css.active}>
                Your tasks
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/history" className={css.link} activeClassName={css.active}>
                Your history
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/settings" className={css.link} activeClassName={css.active}>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Sidebar;
