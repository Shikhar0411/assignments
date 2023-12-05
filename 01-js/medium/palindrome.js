/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start < end){
    // Main check
    if (str[start] !== str[end]) return false;
    // Incrementing start and reducing end
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
