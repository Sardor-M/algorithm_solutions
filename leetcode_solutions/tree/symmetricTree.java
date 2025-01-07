package tree;

/**
 * 
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). 
 * 
 */


public class symmetricTree {
    public boolean isSymmetric(TreeNode root){
        return isMirroredTree(root, root);
    }

    // helper method to compare the nodes
    public boolean isMirroredTree(TreeNode node1, TreeNode node2){
        // agar ikkala node ham null bo'lsa, symmetric bo'ladi
        if(node1 == null && node2 == null){
            return true;
        }

        // agar bironta node null bo'lsa, qiymati boshqa bo'lsa symmetric emas
        if(node1 == null || node2 == null || node1.val != node2.val){
            return false;
        }
        // chap va ong tomondagi nodelarni solishtiramiz
        return isMirroredTree(node1.left, node2.right) && isMirroredTree(node1.right, node2.left);
    }
}
