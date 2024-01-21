/** https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let cache = [];
    for(let i = 0; i < ROWS; i++) {
        cache.push(new Array(COLS).fill(-1));
    }
    function dfs(i, j, prevNum) {
        if(i < 0 || j < 0 || i >= ROWS || j >= COLS || matrix[i][j] <= prevNum) return 0;
        if(cache[i][j] > 0) return cache[i][j];
        return 1 + Math.max(
            dfs(i+1, j, matrix[i][j]),
            dfs(i-1, j, matrix[i][j]),
            dfs(i, j+1, matrix[i][j]),
            dfs(i, j-1, matrix[i][j])
        )
    }
    
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            cache[i][j] = dfs(i, j, -1);
        }
    }
    let result = 0;
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            result = Math.max(result, cache[i][j]);
        }
    }
    return result;
};

console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]));