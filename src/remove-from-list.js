const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 */
 class ListNode {
   constructor(x) {
     this.value = x;
     this.next = null;
   }
 }

//  class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
//  }


function removeKFromList(l, k) {
  let list = l;

  console.log(list);
  while(list.value == k) {
    list = list.next
    }
    thisNode = list;
    nextNode = thisNode.next;
    while (nextNode != null) {
      if(nextNode.value == k) {
        thisNode.next = nextNode.next;
        if(thisNode.next == null)
            break;
      }
      thisNode = thisNode.next;
      nextNode = thisNode.next;
    }
    
    
    
    console.log(list);
    return list
  }






module.exports = {
  removeKFromList
};
