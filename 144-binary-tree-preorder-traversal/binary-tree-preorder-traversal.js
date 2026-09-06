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
var preorderTraversal = function(root) {
    if(!root) return [] ;

    let answer = [];
    let stack = [root];

    while(stack.length !== 0){
     let curr = stack.pop();
     answer.push(curr.val);
     curr.right && stack.push(curr.right);
     curr.left && stack.push(curr.left);
    }
    return answer;
};