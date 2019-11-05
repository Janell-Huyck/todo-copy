import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };

  handleCreateToDo = event => {
    if (event.key === "Enter") {
      const newToDoList = this.state.todos.slice();
      newToDoList.push({
        userId: 1,
        id: Math.floor(Math.random() * 1000000000),
        title: this.state.value,
        completed: false
      });
      this.setState({ todos: newToDoList, value: "" });
    }
  };

  deleteToDo = todoToDelete => {
    const newToDoList = this.state.todos.filter(
      todo => todo.id !== todoToDelete
    );
    this.setState({ todos: newToDoList });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleToggle = todoIdToToggle => {
    //immutability pattern - not modifying the original object/array

    const newToDoList = this.state.todos.map(todo => {
      if (todo.id === todoIdToToggle) {
        const newTodo = { ...todo };
        //create a copy of the todo to modify
        newTodo.completed = !newTodo.completed;
        return newTodo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newToDoList });
  };

  deleteAllCompleted = event => {
    const newToDoList = this.state.todos.filter(
      todo => todo.completed === false
    );
    console.log(newToDoList);
    this.setState({ todos: newToDoList });
  };

  countTodos = () => {
    let count = this.state.todos.filter(todo => todo.completed === false)
      .length;
    return count;
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleCreateToDo}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <TodoList
          todos={this.state.todos}
          deleteToDo={this.deleteToDo}
          handleToggle={this.handleToggle}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.countTodos()}</strong> item(s) left
          </span>
          <button className="clear-completed" onClick={this.deleteAllCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li
        key={this.props.id}
        className={this.props.completed ? "completed" : ""}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.handleToggle}
          />
          <label>{this.props.title}</label>
          <button
            className="destroy"
            onClick={() => {
              this.props.deleteToDo(this.props.id);
            }}
          />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              deleteToDo={this.props.deleteToDo}
              id={todo.id}
              key={todo.id}
              handleToggle={event => this.props.handleToggle(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
