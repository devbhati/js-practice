// var permute = function(nums) {
//     let result = [];

//     // Base case
//     if(nums.length === 1) return [[...nums]];

//     for(let i = 0; i < nums.length; i++) {
//         const n = nums.shift();
//         const perms = permute(nums);

//         perms.forEach(perm => perm.push(n));
//         result.push(...perms);
//         nums.push(n);
//     }
//     return result;
// };


// var permute = function(nums) {
//     const res = [];

//     if(nums.length === 1) return [[...nums]];
//     if(nums.length === 2) return [[nums[0], nums[1]], [nums[1], nums[0]]];

//     for(let i = 0; i < nums.length; i++) {
//         const num = nums.pop();
//         const perms = permute(nums);
//         for(const perm of perms){
//             perm.push(num);
//             res.push(perm);
//         }
//         nums.unshift(num);
//     }

//     return res;
// };



function permute(nums) {
    const result = [];
    if(nums.length === 1) return [[...nums]];

    for(let i = 0; i < nums.length; i++) {
        const num = nums.pop();
        const perms = permute(nums);
        perms.forEach(perm => {
            perm.push(num);
            result.push(perm);
        })
        nums.unshift(num);
    }
    return result;
}




console.log(permute([1,2,3]));