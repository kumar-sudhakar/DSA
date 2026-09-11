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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let ans = false;

    function checkPath(curr , currSum){
        let newSum = currSum + curr.val;
        if(!curr.left && !curr.right) {
         if(newSum === targetSum){
            ans = true;
         }
        }
        curr.left && checkPath(curr.left , newSum);
        curr.right && checkPath(curr.right , newSum);

    }
    checkPath(root , 0);
    return ans;
};