import React, { Component } from "react";
import { toggleTodo } from "./actions";
import { connect } from "react-redux";
import { deleteTodo } from "./actions";

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
            onChange={event => this.props.toggleTodo(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button
            className="destroy"
            onClick={() => {
              this.props.deleteTodo(this.props.id);
            }}
          />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};
export default connect(
  null, //reading values
  mapDispatchToProps //send an action to the store
)(TodoItem);
