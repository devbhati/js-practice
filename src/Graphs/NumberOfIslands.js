/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {*} A 
 * @returns 
 */
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
