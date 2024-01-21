// https://leetcode.com/problems/clone-graph/description/

// Clone Graph
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;   
    }
};

function clone(node) {
    let oldToNew = {};
    function dfs(node) {
        if(oldToNew[node.val]) {
            return oldToNew[node.val];
        }
        let copy = new Node(node.val);
        oldToNew[node.val] = copy;
        for(let i = 0; i < node.neighbors.length; i++) {
            copy.neighbors.push(dfs(node.neighbors[i]));
        }
        return copy;
    }
    if(node) return dfs(node)
    else return null;
}

// const node1 = new Node(1); const node2 = new Node(2); const node3 = new Node(3); const node4 = new Node(4);
// node1.neighbors = [node2, node4]; node2.neighbors = [node1, node3];
// node3.neighbors = [node2, node4]; node4.neighbors = [node1, node3];
// console.log(clone(node1));
