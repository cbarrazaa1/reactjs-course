import React from 'react';

class CharComponent extends React.Component {
  render() {
    return (
      <div className='CharComponent'>
        <p onClick={this.props.deleted}>{this.props.letter}</p>
      </div>
    );
  }
}

export default CharComponent;