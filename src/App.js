import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList";
import { connect } from "react-redux";

class App extends Component {
  //my state will be deleted and added to the Redux store
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
            <TodoList todos={this.props.todos} deleteToDo={this.deleteToDo} />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === false)}
              deleteToDo={this.deleteToDo}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === true)}
              deleteToDo={this.deleteToDo}
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

//mapStateToProps -- always a function
//gets the entire redux state. returns all props
//we want injected into the app component
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
//mapDispatchToProps -- always an object
//used to send actions into the store
// const mapDispatchToProps = {
//   //addTodo -- eventually
// }
export default connect(
  mapStateToProps,
  null //will be mapDispatchToProps
)(App);
