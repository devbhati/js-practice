/**
 * https://leetcode.com/problems/min-cost-to-connect-all-points/
 * @param {*} points 
 * @returns 
 */
function minCostConnectPoints(points) {
    let cost = 0;
    let n = points.length;
    let dist = Array(n).fill(Infinity); // Initialising distances of all points
    dist[0] = 0;
    let current = 0;

    for(let step = 1; step < n; step++) {
        let min = Infinity;
        let pointIndex = -1;
        for(let i = 1; i < n; i++) {
            if(dist[i] > 0) {
                dist[i] = Math.min(dist[i], getManhattan(points[i], points[current]));
                if(dist[i] < min) {
                    min = dist[i];
                    pointIndex = i;
                }
            }
        }
        cost += min;
        dist[pointIndex] = 0;
        current = pointIndex;
    }
    return cost;
}


function getManhattan(point1, point2) {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}



// console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));