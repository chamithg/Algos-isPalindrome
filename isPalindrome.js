/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let strX = x.toString();
  if (strX.length == 1) {
    return true;
  }

  let leftPointer = 0;
  let rightPointer = strX.length - 1;
  let centerPoint = Math.floor(strX.length / 2 - 1);
  while (strX[leftPointer] === strX[rightPointer]) {
    if (leftPointer === centerPoint) {
      return true;
    }
    leftPointer++;
    rightPointer--;
  }
  return false;
}

x = 0;

console.log(isPalindrome(x));
