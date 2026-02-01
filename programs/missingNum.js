let arr = [1, 2, 3, 5]; // missing 4
let n = 5

let xorAll = 0;
let xorSum = 0;

for (let i = 1; i <= n; i++) {
    xorAll ^= i;
}
for (let i = 0; i <= arr.length; i++) {
    xorAll ^= arr[i];
}
console.log(xorAll ^ xorSum);


// let sum = (n * (n + 1)) / 2;
// let arrSum = 0;

// for (let i of arr) {
//     arrSum += i;
// }
// let missing=sum-arrSum;
// console.log(missing);
