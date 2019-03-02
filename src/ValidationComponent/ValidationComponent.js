import React from 'react';

class ValidationComponent extends React.Component {
  render() {
    return (
      <div className="ValidationComponent">
        <p>{this.props.text.length >= 5 ? 'Text long enough' : 'Text too short'}</p>
      </div>
    );
  }
}

export default ValidationComponent;