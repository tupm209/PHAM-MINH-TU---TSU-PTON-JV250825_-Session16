function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let randomNum = Number(prompt("Hãy nhập vào một số nguyên bất kỳ"));
if (randomNum % 1 !== 0) {
  randomNum = Number(prompt("Hãy nhập vào một số nguyên bất kỳ"));
}

alert(isEven(randomNum));
