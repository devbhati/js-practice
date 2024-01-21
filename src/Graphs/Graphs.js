//1. Path in directed graph: //obj[B[i][0]] = obj[B[i][0]] ? obj[B[i][0]].push(B[i][1]) : [B[i][1]];
function solve1(A, B) {
    let queue = [];
    let visited = new Set();
    let result = false;
    let obj = {};
    for(let i = 0; i < B.length; i++) {
        if(obj[B[i][0]]) obj[B[i][0]].push(B[i][1]);
        else obj[B[i][0]] = [B[i][1]];
    }
    queue.push(1);
    visited.add(1);
    while(queue.length && !result) {
        const node = queue.shift();
        obj[node].forEach(n => {
            if(n === A) {
                result = true; return;
            }
            else if(!visited.has(n)) {
                visited.add(n);
                queue.push(n);
            }
        });
    }
    return result;
}

// console.log(solve(5, [[1,4],[2,1],[4,3],[4,5],[2,3],[2,4],[1,5],[5,3],[2,5],[5,1],[4,2],[3,1],[5,4],[3,4],[1,3],[4,1],[3,5],[3,2],[5,2]]));


//2. Number of islands

function solve2(A) {
    const ROWS = A.length;
    const COLS = A[0].length;
    let nodeMap = {};

    function recursion(i, j) {
        if(i < ROWS && j < COLS && i >= 0 && j >= 0 && (A[i][j] === 1 || A[i][j] === 2) && !nodeMap[[i,j]]) {
            nodeMap[[i,j]] = 1;
            recursion(i+1, j);
            recursion(i-1, j);
            recursion(i, j+1);
            recursion(i, j-1);
            return true;
        }
    }
    let result = 0;
    
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(recursion(i, j)) result++;
        }
    }
    return result;
}

// console.log(solve([[1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1] ]));

//3 Rotten oranges
function solve3(A) {
    const ROWS = A.length;
    const COLS = A[0].length;
    let queue = [];
    let dir = [[0,1], [0,-1], [1,0], [-1,0]];
    let count1 = 0;
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(A[i][j] === 2) queue.push([i,j]);
            if(A[i][j] === 1) count1++;
        }
    }
    if(count1 === 0) return 0;
    if(queue.length === 0) return -1;
    let time = 0;
    let canRot;
    while(queue.length > 0) {
        let copy = queue.slice();
        canRot = false;
        queue = [];
        copy.forEach(c => {
            let orange = c;
            for(let i = 0; i < dir.length; i++) {
                let dx = orange[0] + dir[i][0];
                let dy = orange[1] + dir[i][1];
                if(dx >= 0 && dy >= 0 && dx < ROWS && dy < COLS && A[dx][dy] === 1) {
                    A[dx][dy] += 1;
                    queue.push([dx, dy]);
                    canRot = true;
                    count1--;
                }
            }
        })
        if(canRot) time++;
    }
    if(count1 > 0) return -1
    return time;
}

// console.log(solve([[2,1,0,2]]));
// console.log(solve([
//      [2,1,1],
//      [0,1,1],
//      [1,0,1]
// ]))

// 5. Max area of island
function maxAreaOfIsland(A) {
    const ROWS = A.length;
    const COLS = A[0].length;
    let nodeMap = {};

    function recursion(i, j) {
        if(i < ROWS && j < COLS && i >= 0 && j >= 0 && A[i][j] === 1 && !nodeMap[[i,j]]) {
            nodeMap[[i,j]] = 1;
            recursion(i+1, j);
            recursion(i-1, j);
            recursion(i, j+1);
            recursion(i, j-1);
            temp++;
            return true;
        }
    }
    let result = 0;
    let temp = 0;
    
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            temp = 0;
            if(recursion(i, j)) result = Math.max(result, temp);
        }
    }
    return result;
};


// console.log(maxAreaOfIsland([
//     [0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ]));


// 6. Pacific atlantic ocean
function pacificAtlantic(A) {
    const ROWS = A.length;
    const COLS = A[0].length;
    const pac = new Set();
    const atl = new Set();

    function dfs(r, c, visit, prevHeight) {
        if(r === ROWS || c === COLS || r < 0 || c < 0 || visit.has((r+'-'+c)) || A[r][c] < prevHeight) return;
        visit.add((r+'-'+c));
        dfs(r+1, c, visit, A[r][c]);
        dfs(r-1, c, visit, A[r][c]);
        dfs(r, c+1, visit, A[r][c]);
        dfs(r, c-1, visit, A[r][c]);
    }

    for(let c = 0; c < COLS; c++) {
        dfs(0, c, pac, A[0][c]);
        dfs(ROWS-1, c, atl, A[ROWS-1][c]);
    }

    for(let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, A[r][0]);
        dfs(r, COLS-1, atl, A[r][COLS-1]);
    }
    let result = [];
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(pac.has((i+'-'+j)) && atl.has((i+'-'+j))) result.push([i, j]);
        }
    }

    return result;
};


// console.log(pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]));

//7.  Surrounded Regions
function solve(board) {
    const ROWS = board.length;
    const COLS = board[0].length;

    // Running on all boundary cells to check if any of them are 'O'
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(isBoundaryCell(i, j) && board[i][j] === 'O') checkNearbyDFS(i, j);
        }
    }

    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(board[i][j] === 'Visited') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }

    return board;

    function checkNearbyDFS(i, j) {
        if(isBeyondBoard(i, j) || board[i][j] !== 'O') return;
        board[i][j] = 'Visited';
        checkNearbyDFS(i+1, j);
        checkNearbyDFS(i-1, j);
        checkNearbyDFS(i, j+1);
        checkNearbyDFS(i, j-1);
    }
    
    
    function isBoundaryCell(r, c) {
        return (r === 0 || c === 0 || r === ROWS - 1 || c === COLS - 1);
    }

    function isBeyondBoard(r, c) {
        return (r < 0 || c < 0 || r >= ROWS || c >= COLS);
    }
    
}

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));


// 8. Walls and Gates

/*
*/
function wallsAndGates(rooms) {
    const ROWS = rooms.length;
    const COLS = rooms[0].length;
    const visit = new Set();
    const q = [];

    function addRoom(i, j) {
        if(i < 0 || j < 0 || i >= ROWS || j >= COLS || rooms[i][j] === -1 || visit.has(i+'-'+j)) return;
        visit.add(i+'-'+j);
        q.push([i, j]);
    }

    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(rooms[i][j] === 0) {
                q.push([i, j]);   
                visit.add(i+'-'+j);
            }
        }
    }
    let dist = 0;
    while(q.length > 0) {
        const copy = q.slice()
        for(let k = 0; k < copy.length; k++) {
            let [r, c] = q.shift();
            rooms[r][c] = dist;
            addRoom(r+1, c);
            addRoom(r-1, c);
            addRoom(r, c+1);
            addRoom(r, c-1);
        }
        dist += 1;
    }

    return rooms;
}

// console.log(wallsAndGates([
//     [2147483647,-1,0,2147483647],
//     [2147483647,2147483647,2147483647,-1],
//     [2147483647,-1,2147483647,-1],
//     [0,-1,2147483647,2147483647]
// ]))

// 11. Redundant Connection

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


// 12. Connecting Graph III - Number of Connected Components In An Undirected Graph

class ConnectingGraph3 {
    constructor(n) {
        this.parentArr = [];
        this.rankArr = [];
        this.result = n;
        for(let i = 0; i <= n; i++) {
            this.parentArr.push(i);
            this.rankArr.push(1);
        }
    }
    
    connect(a, b) {
        this.union(a, b);
    }

    query() {
        return this.result;
    }

    find(n) {
        let p = this.parentArr[n];
        while(p !== this.parentArr[p]) {
            this.parentArr[p] = this.parentArr[this.parentArr[p]];
            p = this.parentArr[p];
        }
        return p;
    }

    union(n1, n2) {
        let p1 = this.find(n1);
        let p2 = this.find(n2);
        if(p1 !== p2) this.result -= 1;
        if(p1 > p2) {
            this.parentArr[p2] = p1;
            this.rankArr[p1] += this.rankArr[p2];
        } else {
            this.parentArr[p1] = p2;
            this.rankArr[p2] += this.rankArr[p1];
        }
    }
}

// let cG = new ConnectingGraph3(5);
// console.log(cG.query());
// console.log(cG.connect(1, 2));
// console.log(cG.query());
// console.log(cG.connect(2, 4));
// console.log(cG.query());
// console.log(cG.connect(1, 4));
// console.log(cG.query());

// output => [5, 4, 3, 3]
/*
parentArray = [1, 2, 3, 4, 5]
rankArray = [1, 1, 1, 1, 1]
*/

// 13. Valid graph tree

function validTree(n, edges) {
    let parent = [];
    let rank = [];
    for(let i = 0; i <= n; i++) {
      parent.push(i);
      rank.push(1);
    }

    function find(n) {
        let p = parent[n];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    
    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);
        if(p1 === p2) return false;
        if(rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += p2;
        } else {
            parent[p1] = p2;
            rank[p2] += p1;
        }
        return true;
    }
    
    for(let i = 0; i < edges.length; i++) {
        if(!union(edges[i][0], edges[i][1])) return false;
    }
    return true;
}

// console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));



//14. Word ladder - leetcode
function prepareGraph(wordList, beginWord) {
    let obj = {};
    for (let k of [...wordList, beginWord]) {
        obj[k] = [];
        for (const nextWord of wordList) {
            if (diffByALetter(k, nextWord)) {
                obj[k].push(nextWord);
            }
        }
    }
    return obj
}

function diffByALetter(s1, s2) {
    if(s1 === s2) return false;
    let counter = 0;
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) counter += 1;
        if(counter > 1) break;
    }
    if(counter === 1) return true;
    else return false;
}


function ladderLength1(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) < 0) return 0;
    let obj = prepareGraph(wordList, beginWord);
    let result = 1;
    let visited = new Set();
    // visited.add(beginWord);
    let queue = [...obj[beginWord]];
    let tempQueue = [];
    // queue.push(beginWord);
    while(queue.length) {
        let word = queue.shift();
        if(word === endWord) return result+1;
        if(!visited.has(word)) {
            visited.add(word);
            obj[word].forEach(w => {
                if(!visited.has(w)) {
                    tempQueue.push(w);
                }
            });   
        }
        if(queue.length === 0) {
            queue = tempQueue;
            tempQueue = [];
            result += 1;
        }
    }
    return 0;
};
// console.log(ladderLength1('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
// console.log(ladderLength('a', 'c', ["a","b","c"]));


// 15. Reconstruct Itinerary

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


//16. Min Cost to Connect All Points
/*
var minCostConnectPoints = function(points) {
    const N = points.length;
    let adjList = {};
    for(let i = 0; i < N; i++) {
        adjList[i] = [];
    }
    for(let i = 0; i < N; i++) {
        let [x1, y1] = points[i];
        for(let j = i+1; j < N; j++) {
            let [x2, y2] = points[j];
            const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            adjList[i].push([dist, j]);
            adjList[j].push([dist, i]);
        }
    }
    return adjList;
};
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


var networkDelayTime = function(times, n, k) {
    let obj = {};
    for(let i = 1; i <= n; i++) {
        obj[i] = [];
    }
    for(let i = 0; i < times.length; i++) {
        const [u, v, w] = times[i];
        obj[u].push([v, w]);
    }
    return obj;
};

console.log(networkDelayTime(times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2))