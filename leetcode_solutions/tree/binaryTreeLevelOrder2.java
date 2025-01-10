package tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import javax.swing.tree.TreeNode;


public class binaryTreeLevelOrder2 {
    public List<List<Integer>> levelOrderBottom(TreeNode root){
        List<List<Integer>> result = new LinkedList<>();
        if(root == null){
            return result;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while(!queue.isEmpty()){
            int levelSize = queue.size();
            List<Integer> currLevel = new ArrayList<>();

            for(int i = 0; i < levelSize; i++){
                // we return and remove the front code of the container
                TreeNode node = queue.poll();
                currLevel.add(node.val);

                if(node.left != null){
                    queue.add(node.left);
                }

                if(node.right != null){
                    queue.add(node.right);
                }
            }
            result.add(0, currLevel);
        }
        return result;
    }
}
