/** https://leetcode.com/problems/network-delay-time/description/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let adjList = {};
    for(let i = 1; i <= n; i++) adjList[i] = [];

    for(let i = 0; i < times.length; i++) {
        const [source, target, time] = times[i];
        adjList[source].push([time, target]);
    }

    const visited = new Set();
    const heap = new Minheap([0, k]);
    let t = 0;

    while(heap.size() > 0) {
        const [w, n] = heap.pop();
        if(visited.has(n)) continue;
        visited.add(n);
        t = Math.max(t, w);

        for(let [w1, n1] of adjList[n]) {
            if(visited.has(n1)) continue;
            heap.push([w1 + w, n1]);
        }
        heap.heapify();
    }
    return visited.size === n ? t : -1;
};

class Minheap {  
    heap=[]
    constructor(val){this.heap.push(val)}
    size(){return this.heap.length} 
    heapify(){this.heap.sort((a,b)=>b[0]-a[0])}
    push(val){this.heap.push(val)}
    pop(){return this.heap.pop()}
}


console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));