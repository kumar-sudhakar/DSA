/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null) return null;

     let dummy = new ListNode();
     let curr = dummy;

     while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
        }
        else{
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
        }

     }
     if (l1) {
    curr.next = l1;
}

    if (l2) {
    curr.next = l2;
}
     return dummy.next;
};