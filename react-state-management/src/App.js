import React from "react";
import Counter from "./Counter";
import PackItems from "./pack-items/PackItems";
import OrderPizza from "./order-pizza/OrderPizza";
// import HOCEx from "./HOC-Ex/HOCEx";
import Progress from "./Progress";
import images from "./images";
import Caraousel from "./Caraousel";
import TreeContainer from "./TreeContainer";
let tree = [
  {
    label: "First Node",
    id: 1,
    children: [
      {
        label: "First Child 1",
        id: 11,
        children: [
          { label: "First Child 1 child 1", id: 111, children: [] },
          { label: "First Child 1 child 2", id: 112, children: [] },
        ],
      },
      { label: "First Child 2", id: 12, children: [] },
      {
        label: "First Child 3",
        id: 13,
        children: [{ label: "First Child 3 child 1", id: 131, children: [] }],
      },
      { label: "First Child 4", id: 14, children: [] },
    ],
  },
  {
    label: "Second Node",
    id: 2,
    children: [
      { label: "Second Child 1", id: 21, children: [] },
      { label: "Second Child 2", id: 22, children: [] },
    ],
  },
  { label: "Third Node", id: 3, children: [] },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterProps: {
        firstName: "Ashish",
        lastName: "Kumar",
      },
      progress: 0,
    };
  }

  increment = () => {
    this.setState({
      progress: this.state.progress + 4,
    });
  };

  render() {
    return (
      <div>
        {/* <Counter {...this.counterProps} />
        <hr /> */}
        {/* <PackItems />
        <hr />
        <OrderPizza /> */}
        {/*  <HOCEx /> */}
        {/* <button onClick={this.increment}>Increment</button>
        <Progress width={this.state.progress} /> */}
        {/* <Caraousel images={images} /> */}
        <TreeContainer tree={tree} />
      </div>
    );
  }
}

export default App;
