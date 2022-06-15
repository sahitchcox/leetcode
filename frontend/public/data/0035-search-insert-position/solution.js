/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function(nums, target) {
  let left = 0;
  let right = len - 1;
  let mid = 0;

  if (!nums.length) return 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return (nums[mid] > target) ? mid : (mid + 1);
};