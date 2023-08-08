/**
 * 整数反转
 * 链接:https://leetcode-cn.com/problems/reverse-integer
 */
const reverseInterge = (n: number): number => {
  if(n > 0) {
    return helper(n)
  } else {
    return -helper(Math.abs(n))
  }
  // 统一当做整数处理
  function helper(x:number):number{
    let res = 0;
    while (x) {
      res = res * 10 + x % 10;
      x = Math.floor(x / 10);
    }
    return res;
  }
}
// 1230
// 0 * 10 + 3
// 3 * 10 + 2
// 32 * 10 + 1
// res = 0 
// res = res * 10 + x % 10
// x = Math.floor(x / 10)
// 如果是负数，-100，先转为整数然后再加符号
// 测试
console.log(reverseInterge（));
