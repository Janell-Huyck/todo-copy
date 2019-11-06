import React, { Component } from "react";
import TodoItem from "./TodoItem";

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

export default TodoList;
