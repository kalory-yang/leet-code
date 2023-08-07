/**
 * N 字形变换
 * 链接:https://leetcode-cn.com/problems/zigzag-conversion
 */

/**
 * 解法一
 */
const convert = (s: string, numRows: number): string => {
  if (s.length <= 1 || numRows === 1) {
    return s;
  }
  let index = 0,
    direction = true; // true 表示向下，false表示向上
  const arr = new Array(numRows).fill("");

  // 遍历字符串、   col % numRows 为0时,向下走,否则向上走)
  for (let i = 0; i < s.length; i++) {
    arr[index] += s[i];
    if (direction) {
      // 向下走
      index += 1;
    } else {
      index -= 1;
    }

    if (index === 0) {
      direction = true;
    }

    if (index === numRows - 1) {
      direction = false;
    }
  }

  return arr.join("");
};

// // 测试
// console.log(convert("ABC", 1));

// 解法二

// const convert = (s: string, numRows: number): string => {
//   if (s.length <= 1 || numRows === 1) {
//     return s;
//   }
//   let row = 0,
//     col = 0,
//     direction = 0; // 控制方向，0为向下,1为向上， 如果 row === 0 时,向下走,否则向上走
//   const matrix: Array<Array<string | undefined>> = [];
//   // 填充矩阵
//   for (let i = 0; i < numRows; i++) {
//     matrix[i] = [];
//   }

//   // 遍历字符串、   col % numRows 为0时,向下走,否则向上走)
//   for (let i = 0; i < s.length; i++) {
//     matrix[row][col] = s[i];
//     if (direction === 0) {
//       row++;
//     } else {
//       row--;
//       col++;
//     }

//     if (row === 0) {
//       direction = 0; // 向下走
//     }
//     if (row === numRows - 1) {
//       direction = 1; // 向上走
//     }
//     if (row === numRows) {
//       row--;
//       direction = 1;
//     }
//   }
//   const result = matrix.reduce((pre, cur) => {
//     return pre.concat(cur);
//   }, []);

//   return result.join("");
// };

// // 测试
// console.log(convert("ABC", 1));
