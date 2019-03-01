import React, { Component } from 'react';

class UserOutput extends Component {
    render() {
        return (
            <div className='UserOutput'>
                <p>Hello, your name is {this.props.username}</p>
            </div>
        );
    }
}

export default UserOutput;