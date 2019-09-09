import * as React from 'react';

import {
  Icon,
  Popover,
  Tooltip,
} from '../../../ui';

import Form from './form';
import * as css from './main.module.css';

interface IProps {
  className?: string | undefined;
  mountpoint: React.RefObject<HTMLDivElement>;
  toggle?: () => void;
  onSubmit: (params: any) => void;
}

interface IState {
  opened: boolean;
}

class AddTask extends React.Component<IProps, IState> {
  target : any;

  constructor(props : IProps) {
    super(props);

    this.state = {
      opened: false,
    };

    this.target = React.createRef();

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
        <button
          ref={this.target}
          type="button"
          className={this.props.className}
          onClick={this.togglePopover}
        >
          <Icon type="Plus" color="black" width={1} />
          <Tooltip
            position="bottom"
            trigger="hover"
            target={this.target}
          >
            Add new task
          </Tooltip>
        </button>
        {this.renderPopover()}
      </>
    );
  }
}

export default AddTask;
