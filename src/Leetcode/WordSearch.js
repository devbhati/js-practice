function exist(board, word) {
    let path = new Set();
    const ROW = board.length;
    const COL = board[0].length;

    function dfs(r, c, i) {
        if(i === word.length) return true;
        if(r < 0 || c < 0 || r >= ROW || c >= COL || path.has(r+'-'+c) || word[i] !== board[r][c]) return false;
        path.add(r+'-'+c);
        const result = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
        path.delete(r+'-'+c);
        return result
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
}


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))