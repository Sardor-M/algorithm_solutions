package tree;

import java.util.ArrayList;
import java.util.List;
import javax.swing.tree.TreeNode;

/**
 * 
 * Binary Tree Post Traversal
 * 
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
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

public class binaryTreePostTraversal {
    public List<Integer> postorderTraversal(TreeNode root) {
       List<Integer> result = new ArrayList<Integer>();
       helperFunction(root, result);
       return result;
    }

    public void helperFunction(TreeNode node, List<Integer> list){
        if(node == null){
            return;
        }
        helperFunction(node.left, list); // we traverse left subtree
        helperFunction(node.right, list); // we traverse right subtree
        // then we process current node
        list.add(node.val);
    }
}

