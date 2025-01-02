/**
 * 
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *  
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // BFS uchun 2ta queue ishlatamiz 
    const queue1: (TreeNode | null)[] = [q];
    const queue2: (TreeNode | null)[] = [p];

    while(queue1.length > 0 && queue2.length > 0){
        const node1 = queue1.shift();
        const node2 = queue2.shift();

        if(!node1 && !node2) continue;
        // agar bittasi null yoki val lari mos kelmasa tree bir xil emas
        if(node1 || node2 || node1.val || node2.val) return false;

        // har ikkala tomoniga chap va ong tomondagi nodelarni queuega qoshamiz
        queue1.push(node1.left, node1.right);
        queue2.push(node2.left, node2.right);

        return queue1.length === 0 && queue2.length === 0;
    }
}