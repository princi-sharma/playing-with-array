let arr = [1, 4, 9, 4, 1];
let isPalindrome = true;
for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] != arr[arr.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("Palindrome number");
} else {
  console.log("Not Palindrome number");
}