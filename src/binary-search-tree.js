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
      if (node === null) {
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
      if (node === null) {
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

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right,data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left
        }

        node.data = minRight.data;

        node.right = removeNode (node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootTree === null) {
      return ;
    }
    let node = this.rootTree;
      while(node.left) {
        node = node.left;
      }
      console.log(node);
      return node.data;
  }
  

  max() {
    if (this.rootTree === null) {
      return ;
    }
    let node = this.rootTree;
    while(node.right) {
      node =node.right;
    }
    return node.data;
  }

  
}


module.exports = {
  BinarySearchTree
};