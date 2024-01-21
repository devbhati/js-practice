/**
 * https://leetcode.com/problems/combination-sum/description/
 * @param {*} candidates 
 * @param {*} target 
 * @returns 
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let subset = [];
    let sum = 0;

    function dfs(index) {
        if(sum === target) result.push([...subset]);
        if(sum > target || index === candidates.length) return;
        for(let i = index; i < candidates.length; i++) {
            subset.push(candidates[i]);
            sum += candidates[i];
            dfs(i);
            subset.pop();
            sum -= candidates[i];
        }
        return;
    }

    dfs(0);
    return result;
};

console.log(combinationSum([2,3,6,7], 7));