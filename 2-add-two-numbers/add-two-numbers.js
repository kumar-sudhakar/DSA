/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let startNode = new ListNode();
    let current = startNode;
    let carry =  0 ;

    while(l1 !== null || l2 !== null || carry !== 0){
         let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val ) + carry;
         carry = Math.floor(sum / 10);
         let digit = sum % 10;

         let valueNode = new ListNode(digit);
         current.next = valueNode;
         current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

         
   }

   
return startNode.next;

};