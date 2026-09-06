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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let answer = [];

    function postOrderTraverse(curr) {
        if(!curr) return;

        postOrderTraverse(curr.left);
        postOrderTraverse(curr.right);
        answer.push(curr.val)
    }
    postOrderTraverse(root);
    return answer;
};