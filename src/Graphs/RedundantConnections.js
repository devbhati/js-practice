// Redundant Connection

/**
 * https://leetcode.com/problems/redundant-connection/description/
 * @param {*} edges 
 * @returns 
 */
function findRedundantConnection(edges) {
    let parentArray = [];
    let rankArray = [];
    for(let i = 0; i <= edges.length; i++) {
        parentArray.push(i);
        rankArray.push(1);
    }

    function find(n) {
        let p = parentArray[n];
        while(p !== parentArray[p]) {
            parentArray[p] = parentArray[parentArray[p]];
            p = parentArray[p];
        }
        return p;
    }

    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);
        if(p1 === p2) return false;
        if(rankArray[p1] > rankArray[p2]) {
            parentArray[p2] = p1;
            rankArray[p1] += rankArray[p2];
        } else {
            parentArray[p1] = p2;
            rankArray[p2] += rankArray[p1];
        }
        return true;
    }

    for(let i = 0; i < edges.length; i++) {
        if(!union(edges[i][0], edges[i][1])) return edges[i];
    }
};


// console.log(findRedundantConnection([[1,4],[3,4],[1,3],[1,2],[4,5]]));

