let ar = [30, 50, 20, 10, 40, 50];

let largest = -Infinity;
let secLargest = -Infinity;

for (let i = 0; i < ar.length; i++) {
    if (ar[i] > largest) {
        secLargest = largest;
        largest = ar[i];
    }
    else if (ar[i] > secLargest && ar[i] < largest) {
        secLargest = ar[i];
    }
}

console.log(secLargest);
console.log(largest);
