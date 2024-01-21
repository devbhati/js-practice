var WordDictionary = function() {
    this.val = 'root';
    this.obj = {};
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this;
    word.split('').forEach(letter => {
        if(!root.obj[letter]) {
            let node = new WordDictionary();
            node.val = letter;
            root.obj[letter] = node;   
            root = node;
        } else {
            root = root.obj[letter];
        }
    })
    root.isEnd = true;
    console.log(this);
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(root, j) {
        for(let i = j; i < word.length; i++) {
            if(word[i] === '.') {
                const keys = Object.keys(root.obj);
                for(let k = 0; k < keys.length; k++) {
                    if(dfs(root.obj[keys[k]], i+1)) return true;
                }
                return false;
            } else {
                if(!root.obj[word[i]]) return false;
                else {
                    root = root.obj[word[i]];
                }
            }
        }
        return root.isEnd; 
    }
return dfs(this, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary();
obj.addWord('word');
