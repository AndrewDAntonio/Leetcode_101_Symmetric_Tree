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
var isSymmetric = function(root) {
   
    if(root == null) {
        return true
    }
    
    const isMirror = function(leftTree, rightTree) {
        if(leftTree === null || rightTree === null) {
            return leftTree === rightTree    
        }
        
        if(leftTree.val !== rightTree.val) {
            return false
        }
        
        return isMirror(leftTree.left, rightTree.right) && isMirror(leftTree.right, rightTree.left)
    }
    
    return isMirror(root.left, root.right)
   
};