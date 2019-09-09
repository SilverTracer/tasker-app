import * as React from 'react';

import * as css from './main.module.css';

interface IProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  trigger: 'click' | 'focus' | 'hover';
  target: any;
}

class Tooltip extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidUpdate(prevProps: IProps) {
    const { target } = this.props;

    if (!prevProps.target.current && target.current) {
      console.log(target.current);
      target.current && target.current.addEventListener('mouseenter', this.toggle);
      target.current && target.current.addEventListener('mouseleave', this.toggle);
    }
  }

  componentWillUnmount() {
    // Remove listeners
    const { target } = this.props;

    console.log(target.current);

    target.current && target.current.removeEventListener('mouseenter', this.toggle);
    target.current && target.current.removeEventListener('mouseleave', this.toggle);
  }

  toggle() {
    const { target } = this.props;

    console.log(target);
    console.log('Kakogo besa?');
  }

  render() {
    return (
      <div className={css.wrapper}>Tooltip</div>
    );
  }
}

export default Tooltip;
