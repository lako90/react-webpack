import React, { Component } from 'react';

import buttonStyle from './style.css';

class index extends Component {
  render() {
    return (
      <button className={buttonStyle.primary}>
        {this.props.label}
      </button>
    );
  }
}

export default index;