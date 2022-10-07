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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root){
    const queue = [root]
   let node
   let temp
   while(queue.length){
       node=queue.shift()
       if(node!==null){
           temp=node.left
           node.left=node.right
           node.right=temp
           queue.push(node.left,node.right)
       }
   }}
    return root
};