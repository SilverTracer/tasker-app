import * as React from 'react';

import { Icon, Typography } from '../../../ui';

import * as css from './main.module.css';

const Header : React.FC<{}> = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Icon type="BarChart" color="sky" width={1} />
        <Typography className={css.logo_text} tag="h3" color="sky" weight="light">
          Logo
        </Typography>
      </div>
      <div className={css.controls}>
        <button type="button" className={css.control_item}>
          <Icon type="Plus" color="black" width={1} />
        </button>
        <button type="button" className={css.control_item}>
          <Icon type="Search" color="black_2" width={1} />
        </button>
      </div>
    </div>
  );
};

export default Header;
