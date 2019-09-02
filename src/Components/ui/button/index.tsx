import * as React from 'react';

import { Color } from '../types';

import css from './main.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
}

const Button : React.FC<IButton> = (props) => {
  const { color } = props;

  return (
    <button
      {...props}
      className={`${css.button} ${css[color]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
