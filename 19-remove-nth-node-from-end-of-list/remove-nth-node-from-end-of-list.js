/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   // Calculating length 
   let size = 0;
   let currNode = head;

   while(currNode !== null){
    size++;
    currNode = currNode.next;
   }

// Creating Sentinel node
let sentinel = new ListNode()
sentinel.next = head;

     let curr = sentinel;
    for(let i = 0 ; i < size - n ; i++){
    curr = curr.next;
    }

    curr.next = curr.next.next;
    return sentinel.next;

};