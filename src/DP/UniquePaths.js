// https://leetcode.com/problems/unique-paths/

function uniquePaths(m, n) {
    let grid = [];
    for(let i = 0; i < m; i++) {
        grid.push(new Array(n).fill(0));
    }

    for(let i = 0; i < m; i++) {
        grid[i][n-1] = 1;
    }

    for(let j = 0; j < n; j++) {
        grid[m-1][j] = 1;
    }
    
    for(let i = m-2; i >= 0; i--) {
        for(let j = n-2; j >= 0; j--) {
            let count = 0;
            count += grid[i][j+1];
            count += grid[i+1][j];
            grid[i][j] = count;
        }
    }
    return grid[0][0];
};

console.log(uniquePaths(3, 7));
