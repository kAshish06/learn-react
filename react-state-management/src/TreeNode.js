import React from "react";

let TreeNode = ({ node }) => {
  return (
    <div>
      <span>{node.hasChildren ? ">" : ""}</span>
      <span style={{ marginLeft: `${node.level * 15}px` }}>{node.label}</span>
    </div>
  );
};

export default TreeNode;
