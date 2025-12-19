
const ar = [4, 1, 6, 4, 2, 8, 3];

let smallest = ar[0];
let largest = ar[0];

for (let i = 0; i < ar.length; i++) {
    if (ar[i] > largest) {
        largest = ar[i];
    }
    if (ar[i] < smallest) {
        smallest = ar[i];
    }
}

    console.log(`Smallest is : ${smallest}  and largest is : ${largest}`);
    