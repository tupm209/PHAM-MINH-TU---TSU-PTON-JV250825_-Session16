let randomString = prompt("Hãy nhập vào một chuỗi bất kỳ");

function isPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (string === reverse) {
    alert("Đây là chuỗi đối xứng");
  } else {
    alert("Đây là chuỗi không đối xứng");
  }
}

isPalindrome(randomString);

