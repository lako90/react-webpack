import React, { Component } from "react";
import ReactDOM from "react-dom";

import Button from './components/Button';

import style from "./style/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <p className={style.intro}>{'Eccoloooo!!'}</p>
        <Button label={'Primary button'} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));