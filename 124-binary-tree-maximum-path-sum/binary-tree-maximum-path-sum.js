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
var maxPathSum = function (root) {
    let maxPathSum = - Infinity;

    function findMaxPathSum(curr) {
        if (!curr) return 0;

        let leftMax = Math.max(0, findMaxPathSum(curr.left));
        let rightMax = Math.max(0, findMaxPathSum(curr.right));

        let currMax = curr.val + leftMax + rightMax;
        maxPathSum = Math.max(maxPathSum, currMax)

        return curr.val + Math.max(leftMax, rightMax)
    }
    findMaxPathSum(root);
    return maxPathSum;
};