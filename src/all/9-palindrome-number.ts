/**
 * 回文数
 * 链接:https://leetcode-cn.com/problems/palindrome-number
 */

/**
 * 思路：将整数翻转，如果反转后的数字与原来的相等，那么就是回文数，
 * 但是如果这样做，存在一个问题，就是反转的数字太多了，我们其实可以只翻转一半就可以判断了，
 * 那么问题来了，如果只翻转一半呢? 
 * 例如： 3223 翻转一半 32 然后和原来的数字就可以比较了，
 */
const palindromeNumber = (x: number): boolean => {
  // 思路，如果是负数，直接返回
  if (x < 0) {
    return false;
  }
  return reverseInterge(x) === x ? true : false;

  // 将整数反转，如果反转后的数字与原来的数字相等，那么就是回文数
  function reverseInterge(n: number): number {
    let res = 0;
    while (n) {
      res = res * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return res;
  }
};
