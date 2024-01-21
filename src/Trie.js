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
        console.log(this);
    }

    search(word) {
        let root = this;
        let match = true;
        word.split('').forEach(letter => {
            if(!root.obj[letter]) match = false;
            else {
                root = root.obj[letter];
            }
        })
        return match && root.isEnd;
    }

    startsWith(prefix) {
        let root = this;
        let match = true;
        prefix.split('').forEach(letter => {
            if(!root.obj[letter]) match = false;
            else {
                root = root.obj[letter];
            }
        })
        return match;
    }
}


let trie = new Trie();
console.log(trie.insert('hello'));
console.log(trie.search('hell'));
console.log(trie.search('helloa'));
console.log(trie.search('hello'));
console.log(trie.startsWith('hell'));
console.log(trie.startsWith('helloa'));
console.log(trie.startsWith('hello'));