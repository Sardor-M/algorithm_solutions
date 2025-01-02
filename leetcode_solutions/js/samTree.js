/**
 * 
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *  
 */

function isSameTree(p, q){
    const queue1 = [p];
    const queue2 = [q];

    while(queue1.length > 0 && queue2.length > 0){
        const node1 = queue1.shift();
        const node2 = queue2.shift();

        if(!node1 && !node2) continue;
        if(!node1 || !node2 || node1.val !== node2.val) return false;

        queue1.push(node1.left, node1.rigt);
        queue2.push(node2.left, node2.rigt);
    }

    return queue1.length === 0 && queue2.length === 0;
}