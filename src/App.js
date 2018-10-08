import React, { Component } from 'react';
import Doctype from './components/doctype.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unixDate: 391813380
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Doctype inputDate={this.state.unixDate}/>
        </header>
      </div>
    );
  }
}

export default App;
