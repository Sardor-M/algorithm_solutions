package tree;

import java.util.ArrayList;
import java.util.List;
import javax.swing.tree.TreeNode;

/**
 * 
 * Binary Tree Preorder Traversal
 * 
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
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


public class binaryTreePreTraversal {
    public List<Integer> preorderTraversal(TreeNode root){
        List<Integer> result = new ArrayList<Integer>();
        preorderHelper(root, result);
        return result;
    }

    public void preorderHelper(TreeNode node, List<Integer> list){
        if(node == null){
            return;
        }
        list.add(node.val);                 // we traverse the the root
        preorderHelper(node.left, list);    // then the left subtree
        preorderHelper(node.right, list);   // then we traverse the right subtree

    }
    
}
