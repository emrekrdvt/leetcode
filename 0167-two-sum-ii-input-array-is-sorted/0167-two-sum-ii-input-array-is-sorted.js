/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let sLen = 0;
  let eLen = numbers.length - 1;

  while (sLen < eLen) {
    let currentSum = numbers[sLen] + numbers[eLen];
    if (currentSum == target) {
      return [sLen+1, eLen+1];
    } else if (currentSum < target) {
      sLen++;
    } else eLen--;
  }
};
