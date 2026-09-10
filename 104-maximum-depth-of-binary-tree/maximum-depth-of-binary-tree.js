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
    let maxDepth = 0;

    function findDepth(curr, currDepth) {
        maxDepth = Math.max(maxDepth, currDepth);
        curr.left && findDepth(curr.left, currDepth + 1);
        curr.right && findDepth(curr.right, currDepth + 1);

    }
    findDepth(root, 1);
    return maxDepth;
};