/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans = null;
    let count = k;

    function traversal(curr) {
        if (!curr) return;
        curr.left && traversal(curr.left)
        count--;
        if (count == 0) {
            ans = curr.val;
            return;
        }

        curr.right && traversal(curr.right);
    }
    traversal(root);
    return ans;
};