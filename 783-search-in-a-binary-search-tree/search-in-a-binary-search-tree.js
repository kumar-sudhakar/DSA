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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (curr, val) {

    if (!curr) {
        return null;
    }

    if (curr.val === val) {
        return curr;
    }

    if (curr.val < val) {
        return searchBST(curr.right, val);
    } else {
        return searchBST(curr.left, val);
    }
};