import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'qwer1', name: 'Manu', age: 29 },
      { id: 'dfgh1', name: 'Stephanie', age: 26 }
    ],
    username: 'Cesar',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  usernameChangedHandler = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
