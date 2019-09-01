import * as React from 'react';

interface IProps {
  type: 'text' | 'password' | 'number';
  required: boolean;
  validation?: string[];
  value?: string | number;

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
      valid: false,
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
    this.validate();

    if (this.state.valid) {
      this.setState({ focused: false });
    }
  }

  validate() {
    const { required } = this.props;

    console.log('in validation');
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
    const { type } = this.props;
    const { value } = this.state;

    return (
      <input
        type={type}
        value={value}
        onChange={this.onChange}
        onFocus={this.focusIn}
        onBlur={this.focusOut}
      />
    );
  }
}

export default Field;
