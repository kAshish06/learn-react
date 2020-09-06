import React, { lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
// import Counter from "./Counter";
// import PackItems from "./pack-items/PackItems";
// import OrderPizza from "./order-pizza/OrderPizza";
// // import HOCEx from "./HOC-Ex/HOCEx";
// import Progress from "./Progress";
import images from "./images";
import store from "./store";
// import Caraousel from "./Caraousel";
// import TreeContainer from "./TreeContainer";
let Counter = lazy(() => import("./Counter"));
let PackItems = lazy(() => import("./pack-items/PackItems"));
let OrderPizza = lazy(() => import("./order-pizza/OrderPizza"));
let Caraousel = lazy(() => import("./Caraousel"));
let TreeContainer = lazy(() => import("./TreeContainer"));

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
export let TestContext = React.createContext(tree);
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counterProps: {
//         firstName: "Ashish",
//         lastName: "Kumar",
//       },
//       progress: 0,
//     };
//   }

//   increment = () => {
//     this.setState({
//       progress: this.state.progress + 4,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Provider store={store}>
//           <Link to="/">Counter</Link>
//           <Link to="/packItems">Pack Items</Link>
//           <Link to="/orderPizza">Order Pizza</Link>
//           <Link to="/carousel">Carousel</Link>
//           <Link to="/tree">Tree</Link>
//           <Suspense fallback={<h1>Loading routes..</h1>}>
//             <Router>
//               <Counter {...this.counterProps} path="/" />
//               <PackItems path="packItems" />
//               <OrderPizza path="orderPizza" />
//               <Caraousel images={images} path="carousel" />
//               <TreeContainer tree={tree} path="tree" />
//             </Router>
//           </Suspense>
//         </Provider>
//       </div>
//     );
//   }
// }

export let App = () => {
  return (
    <div>
      <Provider store={store}>
        <TestContext.Provider value={tree}>
          <Link to="/">Counter</Link>
          <Link to="/packItems">Pack Items</Link>
          <Link to="/orderPizza">Order Pizza</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/tree">Tree</Link>
          <Suspense fallback={<h1>Loading routes..</h1>}>
            <Router>
              <Counter path="/" />
              <PackItems path="packItems" />
              <OrderPizza path="orderPizza" />
              <Caraousel images={images} path="carousel" />
              <TreeContainer path="tree" />
            </Router>
          </Suspense>
        </TestContext.Provider>
      </Provider>
    </div>
  );
};
