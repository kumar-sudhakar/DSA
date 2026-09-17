/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let lca = null;

    function findLowestCommonAncestor(curr, p, q) {
        if (!curr) return 0;

        let leftCount = findLowestCommonAncestor(curr.left, p, q);
        let rightCount = findLowestCommonAncestor(curr.right, p, q);

        let currCount = 0;

        if (curr === p || curr === q) {
            currCount = 1;
        }
        let count = currCount + leftCount + rightCount;

        if (count === 2 && !lca) {
            lca = curr;
        }
        return count;
    }

    findLowestCommonAncestor(root, p, q);
    return lca;
};