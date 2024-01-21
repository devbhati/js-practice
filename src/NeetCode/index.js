// ARRAYS AND HASHING
/*
1. Arrays and Hashing - https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function(nums) {
    let set = Array.from(new Set(nums));
    return !(set.length === nums.length)
};
console.log(containsDuplicate([1,2,3,4]));
*/
/* ========== ========== ========== ========== ========== ========== ========== */
/*
2. Arrays and Hashing - https://leetcode.com/problems/valid-anagram/
var isAnagram = function(s, t) {
    var sObj = createObjectFromString(s);
    var tObj = createObjectFromString(t);
    return compareIfEqual(sObj, tObj);
};

function createObjectFromString(str) {
    var obj = {};
    for(var i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    return obj;
}

function compareIfEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram('anagram', 'nagaram'));
*/
/* ========== ========== ========== ========== ========== ========== ========== */

/* 
// 3. Arrays and Hashing - https://leetcode.com/problems/valid-anagram/
var twoSum = function(nums, target) { // [3, 3], 6
    let obj = createObjectFromArray(nums); 
    for(var i = 0; i < nums.length; i++) {
      let firstIdx = obj[nums[i]][0];
      obj[nums[i]].shift();
      let secondIdx;
      if(obj[target - nums[i]] !== undefined) {
        secondIdx = obj[target - nums[i]][0];
      }
      if(secondIdx !== undefined && (firstIdx !== secondIdx)) {
          return [firstIdx, secondIdx];
      }
    }
};

function createObjectFromArray(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
      if(obj[arr[i]] === undefined) {
        obj[arr[i]] = [];
        obj[arr[i]].push(i);
      }
      else obj[arr[i]].push(i);
    }
    return obj;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
*/


/* ========== ========== ========== ========== ========== ========== ========== */

/* 4. Arrays and Hashing - https://leetcode.com/problems/group-anagrams/

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));

var groupAnagrams = function(strs) {
    var strsResult = {};
    for(var i = 0; i < strs.length; i++) {
        let uniqueString = generaliseStrings(strs[i])
        if(strsResult[uniqueString] === undefined) {
        strsResult[uniqueString] = [];
        strsResult[uniqueString].push(strs[i]);
        } else {
        strsResult[uniqueString].push(strs[i]);
        }
    }
    var resultArr = [];
    const keys = Object.keys(strsResult);
    for(var i = 0; i < keys.length; i++) {
        resultArr.push(strsResult[keys[i]]);
    }
    return resultArr;
};

function generaliseStrings(str) {
  return str.split('').sort((key1, key2) => {
    return key1.charCodeAt(0) - key2.charCodeAt(0);
  }).join('');
}

function createObjectFromString(str) {
    var obj = {};
    str = str.split('');
    for(var i = 0; i < str.length; i++) {
        if(obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }
    return obj;
}
*/


/* ========== ========== ========== ========== ========== ========== ========== */
// 5. Arrays and Hashign - https://leetcode.com/problems/top-k-frequent-elements/
/*
var topKFrequent = function(nums, k) {
  var obj = createObjectFromArray(nums);
  let keys = Object.keys(obj);
  keys = keys.sort((a, b) => obj[b] - obj[a]);
  return keys.slice(0, k);
  
};

function createObjectFromArray(arr) {
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    }
    else obj[arr[i]] += 1;
  }
  return obj;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
*/

/* ========== ========== ========== ========== ========== ========== ========== */
// 6. Arrays and Hashign - https://leetcode.com/problems/product-of-array-except-self/
/*
var productExceptSelf = function(nums) {
  if(nums.length == 1) return [0];
  let prod = Array(nums.length).fill(1);
  let temp = 1
  // Creating an array, where value at i = product of numbers before i
  for(var i = 0; i < nums.length; i++) {
    prod[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  // Traversing from the right end, and updating value at i = (product on left)*temp and updating 
  // temp in the loop to reflect product of values on right
  for(var i = nums.length - 1; i >= 0; i--) {
    prod[i] = temp * prod[i];
    temp *= arr[i];
  }
  return prod;
};

const arr = [10, 3, 5, 6, 2]; // [180, 600, 360, 300, 900]
console.log(productExceptSelf(arr));
*/
/* Example run:
[10, 3, 5, 6, 2]
[ 1, 1, 1, 1, 1]
[1, 10, 30, 150, 900]
[180, 60, 12, 2, 1]
*/

/* ========== ========== ========== ========== ========== ========== ========== */
// 6. Arrays and Hashign - https://leetcode.com/problems/valid-sudoku/
/*
var isValidSudoku = function(board) {
  // Check for all rows
  for(var i = 0; i < board.length; i++) {
    if(!checkIfValidRow(board[i])) return false;
  }
  // Check for all columns
  for(var i = 0; i < board.length; i++) {
    if(!checkIfValidColumn(board, i)) return false;
  }
  // Check for all 9 3X3 matrices
  const matrices = generateMatricesArray(board);
  console.log(matrices);
  const keys = Object.keys(matrices);
  for(var i = 0; i < keys.length; i++) {
    if(!checkIfValidMatrices(matrices, keys[i])) return false;
  }
  return true;
};

function checkIfValidMatrices(matrices, key) {
  const arr = matrices[key];
  let matSet = new Set();
  let countOfNumbers = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== ".") {
      matSet.add(arr[i]);
      countOfNumbers++
    }
  }
  return (matSet.size === countOfNumbers);
}

function generateMatricesArray(board) {
  let obj = {};
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < 9; j++) {
      let key = obj[[Math.floor(i/3), Math.floor(j/3)]];
      if(key === undefined) obj[[Math.floor(i/3), Math.floor(j/3)]] = [board[i][j]];
      else obj[[Math.floor(i/3), Math.floor(j/3)]].push(board[i][j]);
    }
  }
  return obj;
}

function checkIfValidColumn(board, index) {
  let colSet = new Set();
  let countOfNumbers = 0;
  for(var i = 0; i < board.length; i++) {
    if(board[i][index] !== ".") {
      colSet.add(board[i][index]);
      countOfNumbers++;
    }
  }
  return (colSet.size === countOfNumbers)
}

function checkIfValidRow(row) {
  let rowSet = new Set();
  let countOfNumbers = 0;
  for(var i = 0; i < row.length; i++) {
    if(row[i] !== ".") {
      rowSet.add(row[i]);
      countOfNumbers++;
    }
  }
  return (rowSet.size === countOfNumbers);
}


const board = [["5","7",".",".","3",".",".",".","."]
              ,["6",".",".","1","9","5",".",".","."]
              ,[".","9","8",".",".",".",".","6","."]
              ,["8",".",".",".","6",".",".",".","3"]
              ,["4",".",".","8",".","3",".",".","1"]
              ,["7",".",".",".","2",".",".",".","6"]
              ,[".","6",".",".",".",".","2","8","."]
              ,[".",".",".","4","1","9",".",".","5"]
              ,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));
// console.log(checkIfValidMatrices(board));
*/
/* ========== ========== ========== ========== ========== ========== ========== */

/*
9. Array and Hashing - https://leetcode.com/problems/longest-consecutive-sequence/
*/
/*
var longestConsecutive = function(nums) {
  var obj = {};
  for(var i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }
  let result = 0;
  for(var i = 0; i < nums.length; i++) {
    let count = 0;
    let val = nums[i];
    if(!obj[val - 1]) {
      while(obj[val]) {
        count++; val++;
      }
      result = Math.max(result, count);
    }
  }
  return result;
};

console.log(longestConsecutive([9, 2, 4, 10, 20, 1, 3]));
*/
/* ========== ========== ========== ========== ========== ========== ========== */

/* ========== ========== ========== ========== ========== ========== ========== */
//TWO POINTERS:
/*
9. Two pointers - https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
  let string = s.replace(/[^a-zA-Z]+/g, '');
  string = string.toLowerCase();
  let i = 0;
  let j = string.length - 1;
  while(i < j) {
    if(string.charAt(i) !== string.charAt(j)) return false;
    i++; j--;
  }
  return true;
};

console.log(isPalindrome('A man, b plan, a canal: Panama'));
*/
/* ========== ========== ========== ========== ========== ========== ========== */
/*
10. Two pointers - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(numbers, target) {
    var p1 = 0;
    var p2 = numbers.length - 1;
    while(p1 < p2) {
        if(numbers[p1] + numbers[p2] > target) p2--;
        else if(numbers[p1] + numbers[p2] < target) p1++;
        else return [p1+1, p2+1];
    }
    return;
};
console.log(twoSum([2,7,11,15], 9));
*/
/* ========== ========== ========== ========== ========== ========== ========== */
/*
11. 3 Sum - https://leetcode.com/problems/3sum/ - O(n2)
Algorithm: Use 2 pointer approach to loop over the array using a for loop, i to n-2
initialize left = i+1 and right = nums.length-1, check if sum == 0
increment left if sum<0, decrement right if sum>0
if(sum==0) loop increment left and decrement right(keep doing this if duplicates are there)

var threeSum = function(nums) { // [-1,0,1,2,-1,-4]
  nums = nums.sort((a,b)=>a-b);
  let triplets = [];
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i-1]) continue;
    let left = i+1;
    let right = nums.length-1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum > 0) right--;
      else if(sum < 0) left++;
      else {
        triplets.push([nums[i], nums[left], nums[right]]);
        while(nums[left] === nums[left+1]) left--;
        while(nums[right] === nums[right-1]) right--;
        left++; right--;
      }
    }
  }
  return triplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
*/
/* ========== ========== ========== ========== ========== ========== ========== */
/*
12. Two pointers - Container With Most Water - https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while(left < right) {
        const area = Math.min(height[left], height[right])*(right - left);
        result = Math.max(area, result);
        if(height[left] < height[right]) {
            left++;
        } else if(height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
*/
/* ========== ========== ========== ========== ========== ========== ========== */

/*
Two pointers - https://leetcode.com/problems/trapping-rain-water/

function maintainPeaksWhileLooping(height) {
    let left = 0; // iterating indexes
    let right = height.length - 1;
    let lMax = 0; // left side peak
    let rMax = 0;
    let result = 0;
    while(left < right) {
        lMax = Math.max(lMax, height[left]);
        rMax = Math.max(rMax, height[right]);
        if(lMax < rMax) {
            result += lMax - height[left];
            left++;
        } else {
            result += rMax - height[right];
            right--;
        }
    }
    return result;
}
console.log(maintainPeaksWhileLooping([0,1,0,2,1,0,1,3,2,1,2,1]));
*/

/*
var maxProfit = function(prices) {    
  let pick = prices[0];
  let profit = 0;
  for(let i = 1; i < prices.length; i++) {
    if(prices[i] < pick) pick = prices[i];
    else if(prices[i] - pick > profit) profit = prices[i] - pick;
  }
  return profit;
};


console.log(maxProfit([7,5,5,10,6,4]));
// console.log(maxProfit([2,1,4,5,2,9,7]));

/*
[7,1,5,3,6,4] - 
[7,1] -> [7,5] -> 

*/
/*

var maxProfit = function(prices) {
    let preProcess = [];
    let gain = 0;
    for(let i = 1; i < prices.length; i++) {
      if(prices.length === i+1) {
        if(prices[i] - prices[i-1] > 0) preProcess.push(prices[i] - prices[i-1] + gain);
        else {
          preProcess.push(gain);
          preProcess.push(prices[i]-prices[i-1]);
        }
      }
      else if(prices[i] - prices[i-1] > 0) gain += prices[i] - prices[i-1];
      else {
        if(gain > 0) preProcess.push(gain);
        preProcess.push(prices[i]-prices[i-1])
        gain = 0;
      } 
    }
    preProcess = preProcess.filter(p=>p>0);
    preProcess.sort((a,b)=>b-a);
    if(preProcess.length === 1) return preProcess[0];
    if(preProcess[0] + preProcess[1] > 0) return preProcess[0] + preProcess[1];
    else return 0;
};

// console.log(maxProfit([3, 5, 7, 9, 2, 1, 4, 1, 1, 1, 1, 4]));
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]));
// [3, 9, 2, 1, 4]

*/

/*
var lengthOfLongestSubstring = function(s) {
    if(s == ' ') return 1;
    let left = 0;
    let right = 0;
    let map = {};
    let answer = 0;
    
    while(right < s.length) {
        if(right === s.length - 1) answer = Math.max(answer, right - left);
        if(map[s.charAt(right)]) {
            map = {};
            answer = Math.max(answer, right - left);
            left++;
            right = left;
        } else {
            map[s.charAt(right)] = true;
            right++;
        }
    }
    answer = Math.max(answer, right - left);
    return answer;
};

console.log(lengthOfLongestSubstring('dvdf'));

*/

/*
var characterReplacement = function(s, k) {
  const visited = {};
  let left = 0;
  let right = 0;
  let maxFrequency = 0;
  while(right < s.length) {
    const char = s[right];
    visited[char] = (visited[char] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, visited[char]);
    if(right - left + 1 - maxFrequency > k) {
      left++;
      visited[s[left]] -= 1;
    }
    right++;
  }
  return right-left;
};

console.log(characterReplacement('AABABBA', 1));
*/

/*
var minWindow = function(s, t) {
  let left = 0;
  let right = 0;
  let haveInt = 0;
  let have = {};
  let need = {};
  let length = Number.MAX_VALUE;
  let str = '';
  for(let i = 0; i < t.length; i++) {
    need[t[i]] = (need[t[i]] || 0) + 1;
  }
  let needInt = Object.keys(need).length;
  while(right < s.length) {
    const char = s[right];
    if(need[char]) {
      have[char] = (have[char] || 0) + 1;
      if(need[char] === have[char]) haveInt += 1;
    }
    while(haveInt === needInt) {
      if(right - left + 1 < length) {
        length = right - left + 1;
        str = s.slice(left, right+1); 
      }
      const remove = s[left];
      left++;
      if(need[remove] !== undefined) {
        have[remove] -= 1;
        if(have[remove] < need[remove]) haveInt--;
      }
    }
    right++;
  }
  return str;
};

console.log(minWindow('AA', 'AA'));
*/

/*
https://leetcode.com/problems/sliding-window-maximum/

var maxSlidingWindow = function(nums, k) {
  let queue = [];
  let result = [];
  let arr = [];
  for(let i = 0; i < k; i++) {
    arr.push(nums[i]);
    while(queue[queue.length - 1] < nums[i]) queue.pop();
    queue.push(nums[i]);
  }
  result.push(queue[0]);
  for(let j = k; j < nums.length; j++) {
    if(arr[0] === queue[0]) queue.shift();
    arr.shift(); arr.push(nums[j]);
    while(queue[queue.length - 1] < nums[j]) queue.pop();
    queue.push(nums[j]);
    result.push(queue[0]);
  }
  return result;
};



console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// console.log(maxSlidingWindow([1,-1], 1));
*/


/*
https://leetcode.com/problems/evaluate-reverse-polish-notation/


var evalRPN = function(tokens) {
  const operations = {
      '+': (a, b) => parseInt(a) + parseInt(b),
      '-': (a, b) => parseInt(b) - parseInt(a),
      '*': (a, b) => parseInt(a) * parseInt(b),
      '/': (a, b) => {
        let div = parseInt(b) / parseInt(a);
        return div > 0 ? Math.floor(div) : Math.ceil(div);
      }
  };
  let stack = [];
  let result;
  for(let i = 0; i < tokens.length; i++) {
      if(!operations[tokens[i]]) stack.push(tokens[i]);
      else {
        result = operations[tokens[i]](stack.pop(), stack.pop())
        stack.push(result);
      }
  }
  return result;
};
*/

// console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
// console.log(evalRPN(["4","-2","/","2","-3","-","-"]));


/*
https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
  let result = [];
  recur(0, n, '', result);
  return result;
};

function recur(state, input, str, result) {
  if(state === 0 && input === 0) result.push(str);
  if(input > 0) recur(state+1, input-1, str+'(', result);
  if(state > 0) recur(state-1, input, str+')', result);
}

console.log(generateParenthesis(3));
*/


/*
https://leetcode.com/problems/daily-temperatures/
*/
/*
var dailyTemperatures = function(temperatures) {
  let stack = [];
  let result = [];
  for(let i = 0; i < temperatures.length; i++) {
    if(stack[stack.length - 1] === undefined) {
      stack.push({temp: temperatures[i], idx: i});
    } else if(stack[stack.length - 1].temp > temperatures[i]) {
      stack.push({temp: temperatures[i], idx: i});
    } else {
      while(stack.length > 0 && stack[stack.length - 1].temp < temperatures[i]) {
        const po = stack.pop();
        result[po.idx] = i - po.idx;
      }
      stack.push({temp: temperatures[i], idx: i}); 
    }
  }
  stack.forEach(s=> {
    const index = s.idx;
    result[index] = 0;
  });
  // console.log(stack);
  return result;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
*/



/*
https://leetcode.com/problems/car-fleet/

var carFleet = function(target, position, speed) {
  if(position.length === 1) return 1;
  let stack = [];
  let map = {};
  for(let i = 0; i < position.length; i++) {
    map[position[i]] = speed[i];
  }
  const sortedPositions = Object.keys(map).sort((a, b)=>parseInt(a) - parseInt(b));
  for(let i = sortedPositions.length - 1; i >= 0; i--) {
    const pos = parseInt(sortedPositions[i]);
    const spe = map[sortedPositions[i]];
    if(stack.length === 0) stack.push({ position: pos, speed: spe});
    else {
      const last = stack[stack.length - 1];
      if((target - pos)/(spe) > (target - last.position)/last.speed) {
        stack.push({ position: pos, speed: spe});
      }
    }
  }
  return stack.length;
};

// console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
// console.log(carFleet(10, [3], [3]));
console.log(carFleet(10, [6, 8], [3, 2]));
*/

/*
function previousSmallerElement(nums) {
  if(nums.length === 0) return [];
  let stack = [0];
  let result = [-1];
  for(let i = 1; i < nums.length; i++) {
    const top = nums[stack[stack.length - 1]];
    if(nums[i] > top) {
      result.push(stack[stack.length-1]);
      stack.push(i);
    } else {
      while(stack.length > 0 && nums[stack[stack.length-1]] >= nums[i]) {
        stack.pop();
      }
      result.push(stack[stack.length-1] === undefined ? -1 : stack[stack.length-1]);
      stack.push(i);
    }
  }
  return result;
}
console.log(previousSmallerElement([1, 4, 12, 10, 4, 1]));
*/

/*
https://leetcode.com/problems/largest-rectangle-in-histogram/

var largestRectangleArea = function(heights) {
  let stack = [];
  let result = 0;
  for(let i = 0; i < heights.length; i++) {
    if(stack.length === 0) stack.push({ height: heights[i], idx: i });
    else if(heights[i] > stack[stack.length-1].height) stack.push({ height: heights[i], idx: i });
    else {
      let idx = i;
      while(stack.length > 0 && heights[i] < stack[stack.length-1].height) {
        const top = stack.pop();
        const area = top.height * (i - top.idx);
        result = Math.max(result, area);
        idx = top.idx;
      }
      stack.push({height: heights[i], idx});
    }
  }
  while(stack.length > 0) {
    const top = stack.pop();
    const area = top.height * (heights.length - top.idx);
    result = Math.max(result, area);
  }
  return result;
};
*/
// console.log(largestRectangleArea([3,6,5,7,4,8,1,0]));

/*
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) right = mid-1;
        else left = mid+1;
    }
    return [left, right];
};
*/

// console.log(search([1, 10, 23, 34, 43, 56, 65, 78], 29))
// console.log(search([-1,0,3,5,9,12], 2));

/*
var binarySearch = function(nums, target) {
    if(!nums) return false;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target) return true;
        else if(nums[mid] > target) right = mid-1;
        else left = mid+1;
    }
    return false;
};

var searchMatrix = function(matrix, target) {
  let left = 0; let right = matrix.length-1;
  while(left  <= right) {
    const mid = left + Math.floor((right-left)/2);
    if(matrix[mid][0] === target) return true;
    else if(matrix[mid][0] > target) right = mid-1;
    else left = mid+1;
  }
  if(binarySearch(matrix[left], target) || binarySearch(matrix[right], target)) return true;
  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 5));
*/
/*
var minEatingSpeed = function(piles, h) {
  // if(piles.length === 1) return Math.ceil(piles[0]/h);
  let min = 1; let max = Number.MIN_VALUE;
  for(let i = 0; i < piles.length; i++) {
    // min = Math.min(min, piles[i]);
    max = Math.max(max, piles[i]);
  }
  let mid;
  let result = Number.MAX_VALUE;
  while(min <= max) {
    mid = min + Math.floor((max-min)/2);
    if(works(piles, h, mid)) {
      result = Math.min(result, mid);
      max = mid-1;
    }
    else min = mid+1;
  }
  return result;
};

function works(arr, hour, k) {
  let t = 0;
  for(let i = 0; i < arr.length; i++) {
    t+= Math.ceil(arr[i]/k);
  }
  if(t <= hour) return true;
  return false;
}

// console.log(minEatingSpeed([30,11,23,4,20], 7));
// console.log(minEatingSpeed([312884470], 312884469));
console.log(minEatingSpeed([332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184], 823855818));
*/


/*
var findMin = function(nums) {
  let min = Number.MAX_VALUE; let left = 0; let right = nums.length - 1;
  while(left <= right) {
    const mid = left + Math.floor((right-left)/2);
    min = Math.min(min, nums[mid]);
    if(nums[mid] < nums[right]) right = mid-1;
    else left = mid+1;
  }
  return min; 
};


console.log(findMin([9, 10, 120, 1100, 0, 2, 3, 4, 5, 6, 7]));
*/
/*

var search = function(nums, target) {
  let left = 0; let right = nums.length - 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left)/2);
    if(nums[mid] === target) return mid;
    else if(nums[left] <= nums[mid]) {
      if(target >= nums[left] && target < nums[mid]) right = mid-1;
      else left = mid+1;
    } else {
      if(target > nums[mid] && target <= nums[right]) left = mid+1;
      else right = mid-1;
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
*/
/*
var TimeMap = function() {
  this.timeMap = {};
    
};

TimeMap.prototype.set = function(key, value, timestamp) {
  this.timeMap[key] = this.timeMap[key] || [];
  this.timeMap[key].push([timestamp, value]);
    
};

TimeMap.prototype.get = function(key, timestamp) {
  let valueArray = this.timeMap[key];
  let left = 0;
  let right = valueArray.length-1;
  let ans;
  while(left <= right) {
    const mid = Math.floor((left+right)/2);   
    if(valueArray[mid][0] === timestamp) return valueArray[mid][1];
    if(valueArray[mid][0] < timestamp) {
      ans = valueArray[mid][1];
      left = mid+1;
    }
    else right = mid-1;
  }
  return ans;
  
};

let tm = new TimeMap();
tm.set('foo', 'bar', 1);
tm.set('foo', 'bar', 4);
tm.set('foo', 'bar', 7);
tm.set('foo', 'bar', 11);
tm.set('foo', 'bar', 14);
console.log(tm.get('foo', 5));
console.log(tm);
// [1, 4, 7, 11, 14] , 8;
*/

/*
https://leetcode.com/problems/median-of-two-sorted-arrays/
*/
/*
var findMedianSortedArrays = function(nums1, nums2) {
  let A = nums1;
  let B = nums2;
  if(nums1.length > nums2.length) {
    A = nums2;
    B = nums1;
  }
  const length = nums1.length + nums2.length;
  const half = Math.floor(length/2);
  const isOdd = length%2 === 0 ? false : true;
  let left = 0; let right = A.length - 1;
  while(true) {
    const i = Math.floor((left+right)/2);
    const j = half - i - 2; // Subtracting 2 to get index

    const Aleft = (i >= 0) ? A[i] : -Infinity;
    const Aright = (i+1 < A.length) ? A[i+1] : Infinity;
    const Bleft = (j >= 0) ? B[j] : -Infinity;
    const Bright = (j+1 < B.length) ? B[j+1] : Infinity;

    if(Aleft <= Bright && Bleft <= Aright) {
      if(isOdd) return Math.min(Aright, Bright);
      else return ( Math.max(Aleft, Bleft) + Math.min(Aright, Bright) ) / 2;
    } else if(Aleft > Bright) right = i - 1;
    else l = i + 1;
  }
};
// console.log(findMedianSortedArrays([3, 7, 11, 15, 18, 23], [1, 4, 7, 9, 13, 21, 28]));
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
*/


