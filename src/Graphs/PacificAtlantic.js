/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow/description/
 * @param {*} A 
 * @returns 
 */
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