import React from "react";
import TreeNode from "./TreeNode";

let Tree = ({ nodes }) => {
  return (
    <div>
      {nodes.map((node) => {
        return <TreeNode key={node.id} node={node} />;
      })}
    </div>
  );
};

export default Tree;
