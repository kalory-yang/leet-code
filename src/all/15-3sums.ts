/**
 * 三数之和
 * 链接:https://leetcode-cn.com/problems/3sum
 */
const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b); // 先从小到大排序
  const n = nums.length;
  const ans: Array<number[]> = [];
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1,
      x = nums[i],
      right = n - 1;
    if (x === nums[i - 1]) {
      // 跳过重复 -1,-1, 0,1 这种情况
      continue;
    }
    if (x + nums[i + 1] + nums[i + 2] > 0) break; // 优化一
    if (x + nums[right - 1] + nums[right - 2] < 0) break; // 优化二
    while (left < right) {
      let sum = x + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        ans.push([x, nums[left], nums[right]]);
        while ((left++, left < right && nums[left] === nums[left - 1])); // 如果和前一个值重复，那么继续往后走
        while ((right--, left < right && nums[right] === nums[right + 1])); // 如果和后一个值重复，那么继续往前走
      }
    }
  }
  return ans;
};
