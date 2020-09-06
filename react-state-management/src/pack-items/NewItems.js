import React, { Component } from "react";

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };
  submit = (e) => {
    let { onAdd } = this.props;
    onAdd(this.state.newItem);
    this.setState({
      newItem: "",
    });
  };

  render() {
    let { newItem } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="New Items"
          value={newItem}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.submit}>
          Add
        </button>
      </form>
    );
  }
}
