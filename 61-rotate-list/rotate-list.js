/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) return head;

    // Finding size and tail
    let size = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        size++;
    }

    let rotate = k % size;

    // No rotation needed
    if (rotate === 0) return head;

    // Make the list circular
    tail.next = head;

    // Find the new tail
    let step = size - rotate - 1;
    let newTail = head;

    for (let i = 0; i < step; i++) {
        newTail = newTail.next;
    }

    // New head
    let newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
};