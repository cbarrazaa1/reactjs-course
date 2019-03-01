import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    username: 'Cesar'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  usernameChangedHandler = (event) => {
      this.setState({
          username: event.target.value
      });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p>This is really working!</p>
        {/* <button
          style={style}
          onClick={() => this.switchNameHandler('Cesar')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>
          My hobbies: play piano
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} /> */}
        <UserInput username={this.state.username} changed={this.usernameChangedHandler}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
