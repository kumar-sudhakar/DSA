/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if(head === null || head.next === null ) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;



    while(prev.next !== null && prev.next.next !== null){

        
    let first = prev.next;
    let second = first.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    return dummy.next;
};