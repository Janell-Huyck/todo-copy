import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./index.css";
// import todosList from "./todos.json";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import { clearCompletedTodos } from "./actions";

class App extends Component {
  //my state will be deleted and added to the Redux store
  state = {
    value: ""
  };

  handleCreateToDo = event => {
    if (event.key === "Enter") {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" }); //resets input box
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  countTodos = () => {
    let count = this.props.todos.filter(todo => todo.completed === false)
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
          render={() => <TodoList todos={this.props.todos} />}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === false)}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              todos={this.props.todos.filter(todo => todo.completed === true)}
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
          <button
            className="clear-completed"
            onClick={this.props.clearCompletedTodos}
          >
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
//mapDispatchToProps always an object
//used to send actions into the store
//when we call "this.props.addTodo" it will make sure to call store.dispatch(addTodo())
const mapDispatchToProps = {
  addTodo,
  clearCompletedTodos
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
