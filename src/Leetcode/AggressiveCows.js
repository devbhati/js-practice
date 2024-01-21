/*
Since the maximum difference ranges between 0 to the max of array.
If we sort the array, the binary search starts with l = 0 and r = A[n-1], and we’ve to find the maximum distance.
*/
function solve(A, B) {
    A.sort((a,b)=>a-b);
    var n = A.length;
    var left = 0;
    var right = A[n-1] - A[0];
    var result;
    // var cows = new Array(A.length).fill(0);
    while(left <= right) {
        var mid = (left + right) >> 1;
        //considering minimum distance to be mid, lets allot the cows
        if(isPossible(mid, A, B)) {
            result = mid;
            left = mid+1;
        } else {
            right = mid - 1;
        }
    }
    return result;
    
}


function isPossible(distance, A, B) {
    //place the first cow at first stall
    var cur = A[0];
    B--;
    for(var i = 1; i < A.length; i++) {
        if(A[i] - cur >= distance) {
            cur = A[i];
            B--;
        }
    }
    if(B <= 0) return true;
    return false;
}

console.log(solve([1,2,3,4,5], 3));
