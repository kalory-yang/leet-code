/**
 * 最长公共前缀
 * 链接:https://leetcode-cn.com/problems/longest-common-prefix
 */
/**
 * 思路：将第一个与第二个比较得出公共前缀，然后在于第三个比较，得出公共前缀，以此类推
 * @param strs
 */
const longestCommonPrefix = (strs: string[]): string => {
  let ans: string = strs[0];
  const n = strs.length;
  for (let i = 0; i < n; i++) {
    ans = getCommonPrefix(ans, strs[i]);
    if (ans === "") {
      // 没有公共前缀，跳出循环，
      break;
    }
  }
  return ans;
};

const getCommonPrefix = (str1: string, str2: string): string => {
  let ans: string = "";
  let i = 0;
  while (i < str1.length && i < str2.length) {
    if (str1[i] !== str2[i]) {
      break;
    }
    ans += str1[i];
    i++;
  }
  return ans;
};

// 测试
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
