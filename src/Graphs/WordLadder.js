function prepareGraph(wordList, beginWord) {
    let obj = {};
    for (let k of [...wordList, beginWord]) {
        obj[k] = [];
        for (const nextWord of wordList) {
            if (diffByALetter(k, nextWord)) {
                obj[k].push(nextWord);
            }
        }
    }
    return obj
}

function diffByALetter(s1, s2) {
    if(s1 === s2) return false;
    let counter = 0;
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) counter += 1;
        if(counter > 1) break;
    }
    if(counter === 1) return true;
    else return false;
}

/**
 * https://leetcode.com/problems/word-ladder/
 * @param {*} beginWord 
 * @param {*} endWord 
 * @param {*} wordList 
 * @returns 
 */
function ladderLength(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) < 0) return 0;
    let obj = prepareGraph(wordList, beginWord);
    let result = 1;
    let visited = new Set();
    // visited.add(beginWord);
    let queue = [...obj[beginWord]];
    let tempQueue = [];
    // queue.push(beginWord);
    while(queue.length) {
        let word = queue.shift();
        if(word === endWord) return result+1;
        if(!visited.has(word)) {
            visited.add(word);
            obj[word].forEach(w => {
                if(!visited.has(w)) {
                    tempQueue.push(w);
                }
            });   
        }
        if(queue.length === 0) {
            queue = tempQueue;
            tempQueue = [];
            result += 1;
        }
    }
    return 0;
};