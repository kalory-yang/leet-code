/**
 * 盛最多水的容器
 * 链接:https://leetcode.cn/problems/container-with-most-water
 */
/**
 * 解题思路：widht最大为 height.length - 1,我们可以从这里入手，不断缩小宽度，调高height，从而求出面积最大值
 * @param height
 * @returns
 */
const maxArea = (height: number[]): number => {
  if (height.length < 2) {
    return 0;
  }
  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

// 测试
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
