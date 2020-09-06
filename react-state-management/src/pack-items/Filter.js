import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = (e) => {
      let { updateSearchTerm } = this.props;
      updateSearchTerm(e.target.value);
    };
  }

  render() {
    let { searchPlaceholder, searchTerm } = this.props;
    return (
      <input
        type="text"
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}
