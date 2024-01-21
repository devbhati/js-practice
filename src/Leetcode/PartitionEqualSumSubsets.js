function canPartition(nums) {
    let sum = nums.reduce((a, b) => a+b);
    if(sum % 2) return false;
    let target = sum / 2;

    let set = new Set();
    set.add(0);

    for(let i = 0; i < nums.length; i++) {
        let nextDP = new Set();
        set.forEach(num => {
            nextDP.add(num + nums[i]);
            nextDP.add(num)
        })
        set = nextDP;
    }
    if(set.has(target)) return true;
    else return false;
}

// console.log(canPartition([2, 8, 6, 3, 5]));
console.log(canPartition([1, 5, 11, 5]));
/*

*/