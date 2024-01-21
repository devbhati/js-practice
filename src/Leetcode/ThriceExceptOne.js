
/**
 * https://leetcode.com/problems/single-number-ii
 * @param {*} A 
 * @returns 
 */
function ThriceExceptOne(A) {
    //Checking the set bits on ith position
    var setBitsArr = [];
    var result = 0;
    for(var b = 0; b < 32; b++) {
        var totalSetBits = 0;
        //Traversing over the entire array
        for(var i = 0; i < A.length; i++) {
            //Checking if the ith bit is set and capturing how many numbers have the ith bit set
            if(A[i]&1<<b) totalSetBits++;
        }
        if(totalSetBits%3 != 0) {
            setBitsArr.push(totalSetBits);
            result = result | 1<<b;
        }    
        else setBitsArr.push(0);
    }
    return [result, setBitsArr];
}


console.log(ThriceExceptOne([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));