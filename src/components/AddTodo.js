import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title.length === 0) {
      alert(" Write Something ");
    } else this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="title"
          className="fieldInput"
          name="title"
          placeholder="Add Todo ..."
          onChange={this.onChange}
          value={this.state.title}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1", height: "40px", borderRadius: "4px" }}
        />
      </form>
    );
  }
}

export default AddTodo;
