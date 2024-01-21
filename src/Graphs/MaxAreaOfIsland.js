/**
 * https://leetcode.com/problems/max-area-of-island/description/
 * @param {*} A 
 * @returns 
 */
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
