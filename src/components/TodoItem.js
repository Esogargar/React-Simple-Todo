import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      fontStyle: this.props.todo.completed ? "italic" : "normal",
      color: this.props.todo.completed ? "#cdcdcd" : "black"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          style={{ flex: 1 }}
          type="checkbox"
          name="checkbox"
          checked={this.props.completed}
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        <p style={{ flex: 10 }}> {title} </p>
        <div>
          <button
            className="delButtom"
            onClick={this.props.handelDelTodo.bind(this, id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

// Prop Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
