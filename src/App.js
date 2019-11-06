import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList";

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
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              todos={this.state.todos}
              deleteToDo={this.deleteToDo}
              handleToggle={this.handleToggle}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.state.todos.filter(todo => todo.completed === false)}
              deleteToDo={this.deleteToDo}
              handleToggle={this.handleToggle}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.state.todos.filter(todo => todo.completed === true)}
              deleteToDo={this.deleteToDo}
              handleToggle={this.handleToggle}
            />
          )}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.countTodos()}</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.deleteAllCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
