// Problem 303 - Range Sum Query - Easy

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Idea: lúc khởi tạo obj ta kết hợp tạo ra 1 mảng chứa tổng các số từ đầu đến vị trí i , khi đó các lần tính tổng sau độ 
//       phức tạp time chỉ là O(1) còn độ phức tạp không gian vẫn là O(n) giống ban đầu

var NumArray = function(nums) {
    this.nums = nums 
    this.sums = Array(this.nums.length).fill(0) 
    this.sums[0] = nums[0]
    for(let i=1; i<nums.length ; i++ ){
        this.sums[i] = this.sums[i-1] + nums[i]
    }
    console.log(this.sums)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right] - ( left==0 ? 0 : this.sums[left-1] ) 
};

var obj = new NumArray([0,1,2,3,4])
var param_1 = obj.sumRange(0,2)
console.log(param_1)