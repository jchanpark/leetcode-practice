/* Given an array of integers, nums,  and an integer, target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order */

/* Example 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0,1]
*/

const twoSum = function(nums, target) {
  for(i = 0; i < nums.length; i++) {
    for(j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


/* Given an integer x, return true if x is palindrome integer. An integer is palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not */

/* Eample 1
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome */

const isPalindrome = function(x) {
  const reversedNum = parseInt(x.toString().split('').reverse().join(''));
  return x === reversedNum;
};