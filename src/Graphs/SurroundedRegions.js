// Surrounded Regions
/**
 * https://leetcode.com/problems/surrounded-regions/description/
 * @param {*} board 
 * @returns 
 */
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

