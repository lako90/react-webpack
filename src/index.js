import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./style/main.css";

class App extends Component {
  render() {
    return <div><p className={style.intro}>{'Eccoloooo!!'}</p></div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));