/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let map = new Map();
    let node = head;

    while (node !== null) {

        if (map.has(node)) {

            return node;
        }

        map.set(node);

        node = node.next;
    }
    return null;
};