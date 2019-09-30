// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState } from 'react';

export default class TodoForm extends React.Component {

  render() {
    return(
      <div>
        <input name='todoText' type='text' onChange={this.props.update.bind(this)}></input>
        <button onClick={this.props.add}>Add Todo</button>
        <button onClick={this.props.clear}>Clear Completed</button>
      </div>
    );
  };
}