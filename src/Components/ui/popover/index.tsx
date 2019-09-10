import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  mountpoint: React.RefObject<HTMLDivElement> | null;
  opened: boolean;
  closeHandler?: () => void;
}

class Popover extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      opened: props.opened,
    };

    this.escapeHandler = this.escapeHandler.bind(this);
  }

  componentDidMount() {
    const { closeHandler } = this.props;

    if (closeHandler) {
      window.addEventListener('keyup', this.escapeHandler);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.escapeHandler);
  }

  escapeHandler(event : KeyboardEvent) {
    const { closeHandler } = this.props;

    if (event.code === 'Escape' && closeHandler) closeHandler();
  }

  render() {
    const { mountpoint, opened, children } = this.props;
    let target;

    if (mountpoint && mountpoint.current) target = mountpoint.current;
    else target = window.document.body;

    return opened && ReactDOM.createPortal(children, target);
  }
}

export default Popover;
