import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.textChangedHandler(e)} value={this.state.text}/>
        <p>{this.state.text.length}</p>
      </div>
    );
  }
}

export default App;
