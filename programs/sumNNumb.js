
let ar = [1, 2, 3, 5];
let n = ar.length + 1;

let totalSum = n * (n + 1) / 2;
let arSum = ar.reduce((acc, ind) =>  { return acc + ind });

let result = totalSum - arSum;
console.log(result);





// let totalSum = 0, arSum = 0;

// for (let i = 1; i <= n; i++) {
//     totalSum += i;
// }

// for (let j = 0; j < ar.length; j++) {
//     arSum += ar[j];
// }
// let result = totalSum - arSum;
// console.log("Mising Number is:",result);

