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
    if (!root) return [];

    let stack1 = [root];
    let stack2 = [];

    while (stack1.length) {
        let curr = stack1.pop();
        stack2.push(curr)

        curr.left && stack1.push(curr.left);
        curr.right && stack1.push(curr.right);
    }

    let ans = [];
    while (stack2.length) {
        num = stack2.pop();
        ans.push(num.val)
    }
    return ans;
};