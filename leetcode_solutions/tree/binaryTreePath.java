class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> paths = new ArrayList<>();
        if (root != null) {
            // buyerda DFS traversal qilamiz
            findPath(root, "", paths);
        }
        return paths;
    }

    public void findPath(TreeNode node, String path, List<String> paths) {
        if (node == null)
            return;
        // curr node valueni pathga append qilamiz
        path += node.val;
        if (node.left == null && node.right == null) {
            // path ni listda store qilamiz
            paths.add(path);
        } else {
            path += "->";
            findPath(node.left, path, paths);
            findPath(node.right, path, paths);
        }
    }
}