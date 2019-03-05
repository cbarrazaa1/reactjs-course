import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  charDeletedHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    this.setState({
      text: text.join('')
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.textChangedHandler(e)} value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <ValidationComponent text={this.state.text}/>
        {this.state.text.split('').map((c, index) => {
          return (
            <CharComponent letter={c} deleted={() => this.charDeletedHandler(index)}/>
          );
        })}
      </div>
    );
  }
}

export default App;
