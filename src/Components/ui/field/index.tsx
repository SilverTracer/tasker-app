import * as React from 'react';

import css from './main.module.css';

interface IProps {
  type: 'text' | 'password' | 'number';
  required: boolean;
  name: string;

  validation?: string[];
  value?: string | number;
  label?: string;
  placeholder?: string;
  className?: string;
  form?: string;

  onChange?(param: any): void;
}

interface IState {
  valid: boolean;
  focused: boolean;
  value: string | number;
}

class Field extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      valid: this.props.required ? false : true,
      focused: false,
      value: this.props.value || '',
    };

    this.validate = this.validate.bind(this);
    this.focusIn = this.focusIn.bind(this);
    this.focusOut = this.focusOut.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.value !== this.state.value) this.validate();
  }

  focusIn() {
    this.setState({ focused: true });
  }

  focusOut() {
    if (!this.state.valid) {
      this.setState({ focused: false });
    }
  }

  validate() {
    const { required } = this.props;

    if (required) {
      if (this.state.value) this.setState({ valid: true });
      else this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props;

    this.setState({ value: e.target.value });

    onChange && onChange(e);
  }

  render() {
    const { type, name, label, placeholder, className, form } = this.props;
    const { value, focused } = this.state;

    return (
      <div className={`${css.field_wrapper} ${focused ? css.focus : ''} ${className ? className : ''}`}>
        {label && (
            <label className={css.label} htmlFor={`${name}-field`}>{label}</label>
        )}
        <div className={css.input_block}>
          <input
            // tslint:disable-next-line: prefer-template
            id={`${form ? form + '-' : '' }${name}-field`}
            name={name}
            type={type}
            value={value}

            onChange={this.onChange}
            onFocus={this.focusIn}
            onBlur={this.focusOut}

            // placeholder={placeholder && placeholder}
            className={css.input}
          />
        </div>
        <div className="error_block" />
      </div>
    );
  }
}

export default Field;
