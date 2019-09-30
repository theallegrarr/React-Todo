// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: uuid(),
          completed: false
        }
      ],
      text: '',
    }

    this.add = this.add.bind(this);
    this.complete = this.complete.bind(this);
    this.update = this.update.bind(this);
  };

  
  add() {
    console.log(this.state);
    
    this.setState({
      todos: this.state.todos.concat({
        task: this.state.text,
        id: uuid(),
        completed: false
      }),
    });

  }

  

  complete(id){
    const currState = this.state;
    // const modIndex = currState.todos.findIndex(x => x.id === id);
    currState.todos.forEach(x => {
      if(x.id === id)
        x.completed = true;
    })

    this.setState(currState);
    console.log(this.state);
  }

  update(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return(
      <>
        <TodoList 
          todos={this.state.todos} 
          add={this.add}
          complete={this.complete}
          />
        <TodoForm 
          update={this.update}
          add={this.add}
        />
      </>
    );
  };
}