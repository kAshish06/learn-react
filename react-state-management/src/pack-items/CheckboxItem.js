import React, { Component } from "react";

export default class CheckboxItem extends Component {
  constructor(props) {
    super(props);
  }
  remove = (item) => {
    let { onRemove } = this.props;
    onRemove(item);
  };

  handleChange = (item) => {
    let { onStatusChange } = this.props;
    onStatusChange(item);
  };

  render() {
    let { item } = this.props;
    return (
      <div key={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={this.handleChange.bind(null, item)}
        />
        <label>{item.label}</label>
        <button onClick={this.remove.bind(null, item)}>Remove</button>
      </div>
    );
  }
}
