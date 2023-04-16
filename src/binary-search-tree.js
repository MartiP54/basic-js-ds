const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  
    constructor() {
      this.rootTree = null;
    }
  
  root() {
    
  console.log(this.rootTree)
   return this.rootTree;
  
  }

  add(data) {
 
   this.rootTree = addTree(this.rootTree, data);
    function  addTree (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addTree(node.left, data);
      } else {
        node.right = addTree(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchElem(this.rootTree, data);

    function searchElem (node,data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
      searchElem(node.left, data) :
      searchElem(node.right, data);
    }
  
  }

  find(data) {
    return searchElem(this.rootTree, data);

    function searchElem (node,data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {

        return node;
      }

      return data < node.data ? 
      searchElem(node.left, data) :
      searchElem(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  
}

const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(3);
      tree.add(4);
      tree.root().data

module.exports = {
  BinarySearchTree
};