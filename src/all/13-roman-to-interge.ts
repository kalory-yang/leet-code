/**
 * 罗马数字转整数
 * 链接:https://leetcode-cn.com/problems/roman-to-integer
 */
const romanToInt = (s: string): number => {
  let table = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];
  // 先确定各位，在确定十位，在确定百位，在确定千位
  let digit = [
    
  ]
};
