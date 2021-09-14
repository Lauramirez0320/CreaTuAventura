import React, { Component } from 'react';

class Record extends Component {

  render() {

    return (
      <div>
        <p>Selección anterior: {this.props.selectButtonValue}</p>
        <p>Historial de opciones elegidas:</p>
        <ul>
          {this.props.list.map((e, index) => <li key={index}>{e}</li>)}
        </ul>
      </div>
    )
  };
}
export default Record;