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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;

    function findDepth(curr) {
        if (!curr) return 0;

        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);
        return 1 + Math.max(leftDepth , rightDepth);
    }
    return findDepth(root);
};