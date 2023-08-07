/**
 * 字符串转换整数
 * 链接:https://leetcode-cn.com/problems/string-to-integer-atoi
 */

const stringToInterge = (s: string): number => {
  let limit = Math.pow(2, 31);
  let num = parseInt(s);

  if (isNaN(num)) {
    return 0;
  }
  if (num > limit - 1) {
    num = limit - 1;
  }
  if (num < -limit) {
    return -limit;
  }
  return num;
};
