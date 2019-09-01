import * as React from 'react';

import { Field } from '../../../ui';

class AuthForm extends React.Component {
  inputs: Record<string, React.RefObject<Field>>;

  constructor(props: React.Component) {
    super(props);

    this.inputs = {
      email: React.createRef(),
      password: React.createRef(),
    };

    this.fieldOnChange = this.fieldOnChange.bind(this);
    this.formOnSubmit = this.formOnSubmit.bind(this);
  }

  fieldOnChange() {
    console.log('onchange in form');
  }

  formOnSubmit(e : React.FormEvent) {
    e.preventDefault();

    let valid = true;

    Object.keys(this.inputs).forEach((key) => {
      const target = this.inputs[key].current;

      if (!target || !target.state.valid) valid = false;
    });

    if (valid) console.log('submit');
    else console.log('not submit');
  }

  render() {
    return (
      <form onSubmit={this.formOnSubmit}>
        <Field
          type="text"
          required={true}
          ref={this.inputs.email}
          onChange={this.fieldOnChange}
        />
        <Field
          type="password"
          required={true}
          ref={this.inputs.password}
          onChange={this.fieldOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AuthForm;
