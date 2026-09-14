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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ans = true;

    function checkIsBalance(curr) {
        if (!curr) return 0;
        let left = checkIsBalance(curr.left);
        let right = checkIsBalance(curr.right);

        if (Math.abs(left - right) > 1) {
            ans = ans && false;
        }

        return 1 + Math.max(left, right);
    }

    checkIsBalance(root);
    return ans;
};