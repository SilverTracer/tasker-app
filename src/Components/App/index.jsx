import React from 'react';
import css from './main.module.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }
  }
  
  render () {
    return (
      <div className={css.app}>
        Hello, user!
      </div>
    )
  }
}

export default App;