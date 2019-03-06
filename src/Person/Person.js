import React from 'react';
import css from './Person.css';

const Person = (props) => {
  return (
    <div className={css.Person}>
      <p onClick={props.click}>Hi, my name is {props.name} and I am  {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;