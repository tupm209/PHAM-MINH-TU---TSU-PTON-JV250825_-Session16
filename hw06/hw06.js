function calculateSum(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

const arr1 = [1, 2, 3, 4, 5, 6]; //sum = 21
let sum1 = calculateSum(arr1);
console.log(`Tổng của arr1 bằng ${sum1}`);

const arr2 = [10, 20, 30, 40, 50]; //sum = 150
let sum2 = calculateSum(arr2);
console.log(`Tổng của arr2 bằng ${sum2}`);

const arr3 = [1, 3, 5, 7, 9]; //sum = 25
let sum3 =calculateSum(arr3);
console.log(`Tổng của arr3 bằng ${sum3}`);
