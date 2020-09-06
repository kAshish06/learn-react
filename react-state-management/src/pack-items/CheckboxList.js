import React, { Component } from "react";
import CheckboxItem from "./CheckboxItem";
import Filter from "./Filter";
export default class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchTerm: "",
    };
    this.updateSearchTerm = (searchTerm) => {
      this.setState({
        searchTerm,
      });
    };
    this.filterItems = (item) => {
      if (!this.state.searchTerm) {
        return true;
      }
      return item.label
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    };
    this.stampItems = (item) => (
      <CheckboxItem
        key={item.id}
        item={item}
        onRemove={this.props.onRemove}
        onStatusChange={this.props.onStatusChanged}
      />
    );
  }

  render() {
    let { title, items, searchPlaceholder } = this.props;
    return (
      <section>
        <h1>
          {title} ({items.length})
        </h1>
        <Filter
          searchTerm={this.state.searchTerm}
          searchPlaceholder={searchPlaceholder}
          updateSearchTerm={this.updateSearchTerm}
        />
        {items.filter(this.filterItems).map(this.stampItems)}
      </section>
    );
  }
}
