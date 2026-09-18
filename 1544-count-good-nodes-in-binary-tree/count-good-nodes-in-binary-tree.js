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
var goodNodes = function (root) {
    let ans = 0;

    function countGoodNodes(curr, currMaxSoFar) {
        if (curr.val >= currMaxSoFar) {
            ans++;
        }
        let currMax = Math.max(currMaxSoFar, curr.val);

        curr.left && countGoodNodes(curr.left, currMax);
        curr.right && countGoodNodes(curr.right, currMax);


    }
    countGoodNodes(root, -Infinity);
    return ans;
};