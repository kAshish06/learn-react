import React, { useContext } from "react";
import Tree from "./Tree";
import { TestContext } from "./App";
// import { TestContext } from "./ContextTest";

function normalizeTree(tree, level = 0) {
  let normalisedTree = [];
  tree.forEach((node) => {
    let treeNode = {
      label: node.label,
      id: node.id,
      level: level,
      hasChildren: node.children.length > 0,
    };
    normalisedTree.push(treeNode);
    if (node.children.length > 0) {
      let normalisedChildren = normalizeTree(node.children, level + 1);
      normalisedTree = [...normalisedTree, ...normalisedChildren];
    }
  });
  return normalisedTree;
}
let TreeContainer = () => {
  let tree = useContext(TestContext);
  let treeNodes = normalizeTree(tree);
  return (
    <div>
      <Tree nodes={treeNodes} />
    </div>
  );
};

export default TreeContainer;
