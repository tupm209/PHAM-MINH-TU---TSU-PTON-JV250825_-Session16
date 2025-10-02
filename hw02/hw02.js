function minNum(array) {
  if (!Array.isArray(array)) {
    alert("Dữ liệu không hợp lệ");
    return;
  }
  if (array.length === 0) {
    console.log(`Mảng không có phần tử.`)
    return;
  }
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

const arr1 = [3, 5, 1, 8, -3, 7, 8];
let min1 = minNum(arr1);
console.log`Số nhỏ nhất của arr1 là ${min1}`;

const arr2 = [7, 12, 6, 9, 20, 56, 89];
let min2 = minNum(arr2);
console.log`Số nhỏ nhất của arr2 là ${min2}`;

const arr3 = [];
let min3 = minNum(arr3);
console.log`Số nhỏ nhất của arr3 là ${min3}`;

const arr4 = [0, 0, 0, 0, 0, 0];
let min4 = minNum(arr4);
console.log`Số nhỏ nhất của arr4 là ${min4}`;
