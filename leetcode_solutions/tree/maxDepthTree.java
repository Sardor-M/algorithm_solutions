package tree;
import javax.swing.tree.TreeNode;

/*
 *  
 * Max Depth of Binary Tree
 * 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest 
 * path from the root node down to the farthest leaf node.
 * 
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class maxDepthTree {
    public int maxDepth(TreeNode root){
        if(root == null){
            return 0;
        }

        // here we recursively get the depth of the right and left subtree
        int rightDepth = maxDepth(root.right);
        int leftDepth = maxDepth(root.left);

        // then we return the max depth of the right and left subtree
        return Math.max(rightDepth, leftDepth) + 1;
    }
}