import * as React from 'react';

import { Button, Typography } from '../../../ui';
import { ITask } from '../../../../core/system/tasks/types';

import * as css from './main.module.css';

interface IProps extends ITask {
  toggle: () => void;
  delete: () => void;
}

const Task : React.FC<IProps> = (props) => {
  return (
    <div className={css.wrapper}>
      <div className={css.text}>
        <Typography tag="h4" weight="regular" color="black_2" className={css.title}>
          {props.title}
        </Typography>
        <Typography tag="p" color="ash" weight="light">
          {props.description}
        </Typography>
      </div>
      <div className={css.controls}>
        <Button
          color="black_2"
          size="small"
          fill="blank"
          onClick={props.delete}
        >
          Delete
        </Button>
        <Typography tag="span" color="ash" weight="light" className={css.or_text}>or</Typography>
        <Button
          color="sky"
          size="small"
          fill="bordered"
          onClick={props.toggle}
        >
          {props.status.completed ? 'Undo' : 'Complete'}
        </Button>
      </div>
    </div>
  );
};

export default Task;
