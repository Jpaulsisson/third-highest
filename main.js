// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.


const test = [1, 2, 3, 4, 5, 6];//output: 4;
const test2 = [2,2,3,1];//output: 1;
const test3 = [1,2];//output: 2;


/////// first attempt /////////
function thirdHighest(arr) {
  arr.sort((a, b) => b - a);
  let count = 0;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count < 2 && arr[i + 1] < arr[i]) {
      answer = arr[i + 1];                  //solved. I did a little tinkering to the first attempt. Like 1.5 attempts
      count++;
    }
  } if (count < 2) {
    answer = Math.max(...arr);
  }
  return answer;
};

console.log(thirdHighest(test))
console.log(thirdHighest(test2))
console.log(thirdHighest(test3))