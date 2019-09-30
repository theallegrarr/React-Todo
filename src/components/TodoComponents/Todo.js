// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import uuid from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css';

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
    this.clear = this.clear.bind(this);
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
        x.completed = !x.completed;
    })

    this.setState(currState);
    console.log(this.state);
  }

  update(event) {
    this.setState({
      text: event.target.value,
    });
  }

  clear(){
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false),
    });
  }

  render() {
    return(
      <div className='container'>
        <TodoList 
          todos={this.state.todos} 
          add={this.add}
          complete={this.complete}
          className='list'
          />
        <TodoForm 
          update={this.update}
          add={this.add}
          clear={this.clear}
          className='form'
        />
      </div>
    );
  };
}