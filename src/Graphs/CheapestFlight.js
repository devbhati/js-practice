/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * @param {*} n 
 * @param {*} flights 
 * @param {*} src 
 * @param {*} dst 
 * @param {*} k 
 * @returns 
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = [];
    for(let i = 0; i < n; i++) {
        prices[i] = Infinity;
    }
    prices[src] = 0;
    for(let counter = 0; counter <= k; counter++) {
        let tempPrices = prices.slice();
        for(let [source, destination, price] of flights) {
            if(prices[source] == Infinity) continue;
            if(prices[source] + price < prices[destination]) {
                tempPrices[destination] = prices[source] + price;
            }
        }
        prices = tempPrices.slice();
    }
    if(prices[dst] == Infinity) return -1;
    else return prices[dst];
};

console.log(findCheapestPrice(n = 7, flights = [[0,3,7],[4,5,3],[6,4,8],[2,0,10],[6,5,6],[1,2,2],[2,5,9],[2,6,8],[3,6,3],[4,0,10],[4,6,8],[5,2,6],[1,4,3],[4,1,6],[0,5,10],[3,1,5],[4,3,1],[5,4,10],[0,1,6]], src = 2, dst = 4, k = 1))

// let n = 10;
// let flights = [[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]];

// const adjList = {};
// for(let i = 0; i < n; i++) {
//     adjList[i] = [];
// }
// // Add values to adjacencyList
// flights.forEach(flight => {
//     adjList[flight[0]].push([flight[1], flight[2]]);
// });

// console.log(adjList);