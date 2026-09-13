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
var isSymmetric = function (root) {
    q = [root.left, root.right];

    while (q.length) {
        let leftChild = q.shift();
        let rightChild = q.shift();

        if (!leftChild && !rightChild) continue;
        if (!leftChild || !rightChild) return false;
        if (leftChild.val !== rightChild.val) return false;

        q.push(leftChild.left, rightChild.right);
        q.push(leftChild.right, rightChild.left);
    }

    return true;
};