/**
 * 最接近三数之和
 * 链接:https://leetcode-cn.com/problems/3sum-closest
 */
/**
 * 先对数组进行排序，然后用三个指针分别指向 x, left =  x + 1,  right = length - 1
 * 然后判断这三个数的和与目标值之间的差，  sum - trget > 0   right --;  否则， left ++
 * nums[left] === nums[left - 1],  继续往走， left也是同样的道理。
 * 每次判断误差，如果误差比上一次小，那么替换上一次的答案，然后继续往后走。
 * @param nums
 * @param target
 */
function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  if (n === 3) {
    return nums.reduce((pre, cur) => pre + cur, 0);
  }
  nums.sort((a, b) => a - b);
  let ans: number = 0;
  let distance = Infinity;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1,
      right = n - 1,
      x = nums[i];
    if (i > 0 && x === nums[i - 1]) continue; // 优化一
    // let s = x + nums[left] + nums[right];
    // if (s > target) {
    //   // 优化二
    //   if (s - target < distance) {
    //     ans = s;
    //   }
    //   break;
    // }
    // s = x + nums[n - 2] + nums[n - 1];
    // if (s < target) {
    //   // x 加上后面任意两个数都不超过 s，所以下面的双指针就不需要跑了
    //   if (target - s < distance) {
    //     distance = target - s;
    //     ans = s;
    //   }
    //   continue;
    // }
    while (left < right) {
      let s = x + nums[left] + nums[right];
      if (s < target) {
        if (target - s < distance) {
          ans = s;
          distance = target - s;
        }
        left++;
        // while ((left++, left < right && nums[left] === nums[left - 1]));
      } else if (s > target) {
        if (s - target < distance) {
          ans = s;
          distance = s - target;
        }
        right--;
        // while ((right--, left < right && nums[right] === nums[right + 1]));
      } else {
        return s;
      }
    }
  }
  return ans;
}
