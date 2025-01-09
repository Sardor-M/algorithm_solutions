
/**
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 */


function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (root == null) {
        return result;
    }

    const queue: (TreeNode | null)[] = [];
    queue.push(root);

    while (queue.length > 0) {
        const levelSize: number = queue.length;
        const currLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node) {
                currLevel.push(node.val);

                if (node.left != null) {
                    queue.push(node.left);
                }

                if (node.right != null) {
                    queue.push(node.right);
                }
            }
        }
        result.push(currLevel);
    }
    return result;
}
