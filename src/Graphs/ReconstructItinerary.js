// Reconstruct Itinerary

/**
 * https://leetcode.com/problems/reconstruct-itinerary/description/
 * @param {*} tickets 
 * @returns 
 */
var findItinerary = function(tickets) {
    const adjList = {};
    for(let tick of tickets) {
        if(adjList[tick[0]]) adjList[tick[0]].push(tick[1]);
        else adjList[tick[0]] = [tick[1]];
    }
    const keys = Object.keys(adjList);
    keys.forEach(key => {
        adjList[key] = adjList[key].sort();
    });

    let result = ['JFK'];

    function dfs(src) {
        if(result.length === tickets.length + 1) return true;
        if(!adjList[src]) return false;
        const temp = adjList[src].slice();
        for(let i = 0; i < temp.length; i++) {
            const v = temp[i];
            adjList[src].splice(i, 1);
            result.push(v);
            if(dfs(v)) return true;
            adjList[src] = arrayInsert(adjList[src], i, v);
            result.pop();
        }
        return false;
    }
    dfs('JFK');
    return result;
};

function arrayInsert(arr, index, element) {
    return [
        ...arr.slice(0, index),
        element,
        ...arr.slice(index)
    ];
}

// console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
// console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
// console.log(findItinerary([["EZE","TIA"],["EZE","HBA"],["AXA","TIA"],["JFK","AXA"],["ANU","JFK"],["ADL","ANU"],["TIA","AUA"],["ANU","AUA"],["ADL","EZE"],["ADL","EZE"],["EZE","ADL"],["AXA","EZE"],["AUA","AXA"],["JFK","AXA"],["AXA","AUA"],["AUA","ADL"],["ANU","EZE"],["TIA","ADL"],["EZE","ANU"],["AUA","ANU"]]));
// console.log(arrayInsert([1,3,4,2,1], 2, 16));
