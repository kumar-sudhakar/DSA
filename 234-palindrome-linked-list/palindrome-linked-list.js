/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   
// find middle
let mid = head;
let fast = head;

if(fast === null){
    mid = fast.next;
}

while(fast !== null && fast.next !== null){
    mid = mid.next;
    fast = fast.next.next;
}


  // reverse second half
  let prev = null;
  let curr = mid;
  

  while(curr !== null ){

    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // compare

  let nodeA = head;
  let nodeB = prev;

  while(nodeB !== null){
  if(nodeA.val !== nodeB.val){
    return false;
  }
  nodeA = nodeA.next;
  nodeB = nodeB.next;
  }


return true;
};