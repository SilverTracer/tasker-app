import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  mountpoint: React.RefObject<HTMLDivElement> | null;
  opened: boolean;
}

class Popover extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
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
