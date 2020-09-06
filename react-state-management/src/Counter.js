import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = () => {
      // this.setState({
      //   count: this.state.count + 1,
      // });
      // this.setState({
      //   count: this.state.count + 1,
      // });
      // this.setState({
      //   count: this.state.count + 1,
      // });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    };
    this.decrement = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    this.reset = () => {
      this.setState({
        count: 0,
      });
    };
  }
  get fullName() {
    const { firstName, lastName } = this.props;
    return firstName + " " + lastName;
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>{this.fullName}</h1>
        <label>Counter</label>
        <div>{count}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
        </div>
        <div>
          <button onClick={this.decrement}>Decrement</button>
        </div>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
