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
var sortList = function (head) {

    if (head === null || head.next === null) return head;

    //finding mid

    let fast = head.next;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null

    let left = sortList(head);
    let right = sortList(mid);

    let dummy = new ListNode();
    let curr = dummy;

    merge(left, right);


    function merge(left, right) {

        while (left !== null && right !== null) {

            if (left.val < right.val) {
                curr.next = left;
                left = left.next;
            }
            else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;

            if (left !== null) {
                curr.next = left;
            }
            else {
                curr.next = right;
            }
        }


    }
    return dummy.next;
};