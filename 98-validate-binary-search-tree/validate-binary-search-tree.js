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
var isValidBST = function (root) {

    function isValid(curr, min, max) {
        if (!curr) return true;

        if (max !== null && curr.val >= max) {
            return false;
        }

        if (min !== null && curr.val <= min) {
            return false;
        }

        let isLeftValid = isValid(curr.left, min, curr.val);
        let isRightValid = isValid(curr.right, curr.val, max);

        return isLeftValid && isRightValid;
    }

    let ans = isValid(root, null, null);

    return ans;
};