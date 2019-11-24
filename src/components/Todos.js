import React from "react";
import axios from "axios";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  //Get Data
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=8")
      .then(res => this.setState({ todos: res.data }));
  }

  // Handel Add Tod

  handelAddTodo = title => {
    const newToDo = {
      id: 3,
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newToDo] });
  };

  //Handel Delete todo item
  handelDelTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // toggleComplete Funcation
  toggleComplete = id => {
    this.setState(Prev => {
      const newToDo = Prev.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newToDo
      };
    });
  };

  render() {
    console.log(this.state.todos);
    const toDoArr = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.toggleComplete}
          completed={todo.completed}
          handelDelTodo={this.handelDelTodo}
        />
      );
    });
    return (
      <div>
        <AddTodo AddTodo={this.handelAddTodo} />
        {toDoArr}
      </div>
    );
  }
}

export default Todos;
