import React from "react";
import CheckboxList from "./CheckboxList";
import NewItem from "./NewItems";
export default class PackItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, label: "Pants", value: "Pants", packed: false },
        { id: 2, label: "Shirt", value: "Shirt", packed: false },
        { id: 3, label: "Notes", value: "Notes", packed: false },
        { id: 4, label: "Laptop", value: "Laptop", packed: false },
        {
          id: 5,
          label: "Sleeping Pills",
          value: "Sleeping Pills",
          packed: true,
        },
      ],
    };
    this.onAdd = (itemName) => {
      let cloneItems = [...this.state.items];
      cloneItems.push({
        id: this.state.items.length + 1,
        label: itemName,
        value: itemName,
        packed: false,
      });
      this.setState({
        items: [...cloneItems],
      });
    };
    this.remove = (removedItem) => {
      this.setState({
        items: this.state.items.filter((item) => item.id !== removedItem.id),
      });
    };
    this.checkboxStatusChanged = (item) => {
      let cloneItems = [...this.state.items];
      for (let checkboxItem of cloneItems) {
        if (checkboxItem.id === item.id) {
          checkboxItem.packed = !checkboxItem.packed;
        }
      }
      this.setState({
        items: cloneItems,
      });
    };
    this.markAllAsUnpacked = () => {
      let cloneItems = this.state.items.map((item) => {
        return {
          ...item,
          packed: false,
        };
      });
      this.setState({
        items: cloneItems,
      });
    };
  }

  render() {
    return (
      <div>
        <NewItem onAdd={this.onAdd} />
        <CheckboxList
          searchPlaceholder="Search Unpacked"
          title="Unpacked"
          items={this.state.items.filter((item) => !item.packed)}
          onRemove={this.remove}
          onStatusChanged={this.checkboxStatusChanged}
        />
        <CheckboxList
          searchPlaceholder="Search Packed"
          title="Packed"
          items={this.state.items.filter((item) => item.packed)}
          onRemove={this.remove}
          onStatusChanged={this.checkboxStatusChanged}
        />
        <button onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}
