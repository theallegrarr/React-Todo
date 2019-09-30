// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState } from 'react';

export default class TodoList extends React.Component {

  render() {
    return(
      this.props.todos.map(todo => (
        <ul>
          <p 
          onClick={this.props.complete.bind(this, todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
          >{todo.task}</p>
        </ul>
      ))
    );
  };
}