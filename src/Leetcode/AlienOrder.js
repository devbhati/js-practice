function alienOrder(words) {
    let uniqueWords = new Set();
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            uniqueWords.add(words[i][j]);
        }
    }
    let adjList = {};
    for(const val of uniqueWords) {
        adjList[val] = new Set();
    }

    for(let i = 0; i < words.length-1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];
        const minLength = Math.min(word1.length, word2.length);
        if(word1.length > word2.length && word1.slice[0, minLength] === word2.slice(0, minLength)) return '';
        for(let j = 0; j < minLength; j++) {
            if(word1[j] !== word2[j]) {
                adjList[word1[j]].add(word2[j]);
                break;
            }
        }
    }

    let visit = {};
    let result = [];

    function dfs(c) {
        if(c in visit) return visit[c];
        visit[c] = true;
        for(const next of adjList[c]) {
            if(dfs(next)) return true;
        }
        visit[c] = false;
        result.push(c);
    }
    console.log(adjList);
    const keys = Object.keys(adjList).sort().reverse();
    for(const w of keys) {
        if(dfs(w)) return '';
    }
    return result.reverse().join('');
}

// console.log(alienOrder(["wrt","wrf","er","ett","rftt"]));
console.log(alienOrder(["ze","yf","xd","wd","vd","ua","tt","sz","rd", "qd","pz","op","nw","mt","ln","ko","jm","il", "ho","gk","fa","ed","dg","ct","bb","ba"]));
/*
Create an adjacency list of every character, value should be the descendent as in next word.
Compare every word, fill the adjacency list when encountering comparable characters.
t < f, w < e, r < t, e < r
Do a post order DFS:
    while traversing character, mark visit[c] = true if in path, false if visited.
    e - r - t - f - #

    ftre
*/
