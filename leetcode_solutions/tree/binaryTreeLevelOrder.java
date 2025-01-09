package tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import javax.swing.tree.TreeNode;

/**
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 */

public class binaryTreeLevelOrder {
    public List<List<Integer>> levelOrder(TreeNode root){
        // we keep the results here
        List<List<Integer>> result = new ArrayList<>();
        if(root == null){
            return result;
        }

        // queue dan foydalanamiz
        Queue<TreeNode> nodes = new LinkedList<>();
        nodes.add(root);

        while(!nodes.isEmpty()){
            int levelSize = nodes.size();
            List<Integer> currLevel = new ArrayList<>();

            for(int i = 0; i < levelSize; i++) {
                TreeNode node = nodes.remove();
                currLevel.add(node.val);

                if(node.left != null){
                    nodes.add(node.left);
                }

                if(node.right != null){
                    nodes.add(node.right);
                }
            }
            result.add(currLevel);
        }
        return result;
    }
}   
