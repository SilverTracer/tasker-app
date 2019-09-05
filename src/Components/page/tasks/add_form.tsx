import * as React from 'react';

import {
  Field,
  Button,
} from '../../ui';

interface IProps {
  onSubmit: (prop: any) => any;
}

class AddForm extends React.Component<IProps> {
  inputs: Record<string, React.RefObject<Field>>;
  name: string;

  constructor(props: IProps) {
    super(props);

    this.inputs = {
      title: React.createRef(),
      description: React.createRef(),
    };

    this.name = 'task_add';

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e : React.FormEvent) {
    e.preventDefault();

    const payload : Record<string, any> = {};
    let valid = true;

    Object.keys(this.inputs).forEach((input) => {
      const target = this.inputs[input].current;

      if (!target || !target.state.valid) {
        console.log(target);
        valid = false;
      }
      target && (
        payload[input] = target.state.value
      );
    });

    if (valid) {
      this.props.onSubmit(payload);
    } else console.log('not submit');
  }

  render() {
    return (
      <form id={this.name} onSubmit={this.onSubmit}>
        <Field
          type="text"
          required={true}
          name="title"
          label="Title"
          ref={this.inputs.title}
        />
        <Field
          type="text"
          required={true}
          name="description"
          label="Description"
          ref={this.inputs.description}
        />
        <Button color="sky" type="submit">Put</Button>
      </form>
    );
  }
}

export default AddForm;
