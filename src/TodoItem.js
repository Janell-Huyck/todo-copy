import React, { Component } from "react";

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

export default TodoItem;
