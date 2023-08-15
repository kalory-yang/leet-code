/**
 * 整数转罗马数字
 * 链接:https://leetcode-cn.com/problems/integer-to-roman
 */
const integerToRoman = (num: number): string => {
  let table = [
    ["", "I", "II", "III", "IV", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];

  let digit = [
    Math.floor(num / 1) % 10,
    Math.floor(num / 10) % 10,
    Math.floor(num / 100) % 10,
    Math.floor(num / 1000) % 10,
  ];
  return ""
    .concat(table[3][digit[3]])
    .concat(table[2][digit[2]])
    .concat(table[1][digit[1]])
    .concat(table[0][digit[0]]);
};

// 测试
console.log(integerToRoman(1994));
