import * as React from 'react';

import {
  Icon,
  Popover,
} from '../../../ui';

import Form from './form';
import * as css from './main.module.css';

interface IProps {
  className?: string | undefined;
  mountpoint: React.RefObject<HTMLDivElement>;
  onSubmit: (params: any) => void;
}

interface IState {
  opened: boolean;
}

class AddTask extends React.Component<IProps, IState> {
  constructor(props : IProps) {
    super(props);

    this.state = {
      opened: false,
    };

    this.togglePopover = this.togglePopover.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  togglePopover() {
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  }

  renderPopover() {
    const { opened } = this.state;
    const { mountpoint } = this.props;

    if (!opened) return null;

    return (
      <Popover
        mountpoint={mountpoint}
        opened={opened}
      >
        <div className={css.overlay}>
            <Form
              onSubmit={this.props.onSubmit}
              callback={this.togglePopover}
            />
        </div>
      </Popover>
    );
  }

  render() {
    return (
      <>
        <button type="button" className={this.props.className} onClick={this.togglePopover}>
          <Icon type="Plus" color="black" width={1} />
        </button>
        {this.renderPopover()}
      </>
    );
  }
}

export default AddTask;
