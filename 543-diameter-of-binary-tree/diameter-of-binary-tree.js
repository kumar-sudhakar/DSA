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
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    function findDiameter(curr) {
        if (!curr) return 0;

        let left = findDiameter(curr.left);
        let right = findDiameter(curr.right);

        let currDiameter = left + right;

        maxDiameter = Math.max(maxDiameter, currDiameter);

        return 1 + Math.max(left, right);
    }

    findDiameter(root);
    return maxDiameter;
};