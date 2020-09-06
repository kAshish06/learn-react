import React from "react";
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
export let TestContext = React.createContext();

export let TestApp = () => {
  return (
    <div>
      <TestContext.Provider value={tree}>
        <TreeContainer />
      </TestContext.Provider>
    </div>
  );
};
