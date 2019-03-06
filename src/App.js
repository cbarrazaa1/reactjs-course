import React, { Component } from 'react';
import css from './App.css';
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
    const person = { ...this.state.persons[personIndex] };
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            );
          })}
        </div>
      );

      btnClass = css.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(css.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(css.bold);
    }

    return (
      <div className={css.App}>
        <h1>Hi, I'm a React app!!!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
