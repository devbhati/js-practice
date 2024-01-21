/* https://www.youtube.com/watch?v=asbcE9mZz_U&ab_channel=NeetCode */
class Trie {
    constructor(val) {
        this.val = 'root';
        this.obj = {};
        this.isEnd = false;
    }

    insert(word) {
        let root = this;
        word.split('').forEach(letter => {
            if(!root.obj[letter]) {
                let node = new Trie();
                node.val = letter;
                root.obj[letter] = node;   
                root = node;
            } else {
                root = root.obj[letter];
            }
        })
        root.isEnd = true;
    }
}



var findWords = function(board, words) {
    const ROW = board.length;
    const COL = board[0].length;
    let trieBoard = new Trie();
    const result = new Set();
    const path = new Set();
    words.forEach(word => trieBoard.insert(word));

    function dfs(r, c, trie, word = '') {        
        if(r < 0 || c < 0 || r >= ROW || c >= COL 
            || path.has(r.toString() + '-' + c.toString()) 
                || !trie.obj[board[r][c]]) 
            return;

        path.add(r.toString() + '-' + c.toString());

        trie = trie.obj[board[r][c]];
        word += trie.val;

        if(trie.isEnd) result.add(word);

        dfs(r+1, c, trie, word);
        dfs(r-1, c, trie, word);
        dfs(r, c+1, trie, word)
        dfs(r, c-1, trie, word);
        
        path.delete(r.toString() + '-' + c.toString());

        if(trie.isEnd) result.add(word);
        
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            dfs(i, j, trieBoard, word = '')
        }
    }
    return Array.from(result);
    
};


const board = [
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"],
    ["a","a","a","a","a","a","a","a","a","a","a","a"]
];
const words = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

console.log(findWords(board, words));
