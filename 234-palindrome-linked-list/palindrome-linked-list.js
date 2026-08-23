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
var isPalindrome = function (head) {

    // finding middle
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // reverse second half
    let prev = null
    let curr = slow;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;

        prev = curr;
        curr = temp;

    }

    //compair both sides
    let first = head;
    let second = prev;

    while (second !== null) {

        if (first.val !== second.val) {
            return false;
        }
        first = first.next;
        second = second.next;

    }
    return true;

};