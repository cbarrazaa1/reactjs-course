import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div className='UserInput'>
        <input onChange={this.props.changed} value={this.props.username}/>
      </div>
    );
  }
}

export default UserInput;