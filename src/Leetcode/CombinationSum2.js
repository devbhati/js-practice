/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {*} candidates 
 * @param {*} target 
 * @returns 
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let result = [];
    let sum = 0;

    function backtracking(i, subset) {
        if(sum === target) {
            result.push([...subset]);
            return
        }
        if(i === candidates.length || sum > target) return;
        
        // For combinations that include candidates[i];
        subset.push(candidates[i]);
        sum += candidates[i];

        backtracking(i+1, subset);

        // For combinations without candidates[i]
        subset.pop();
        sum -= candidates[i]

        while(i+1 < candidates.length && candidates[i+1] === candidates[i]) i++;
        backtracking(i+1, subset);
    }
    backtracking(0, []);
    return result;
};


console.log(combinationSum2([2,5,2,1,2], 5));
// [1,1,2,5,6,7,10]