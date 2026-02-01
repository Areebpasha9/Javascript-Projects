let num = 73;
let isPrime = false;

if (num === 0 || num === 1) {
    console.log("Not Prime Number");
    return;
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        else {
            isPrime = true;
        }
    }
}
if (isPrime) {
    console.log("Prime Number");
}
else {
    console.log("Not a prime Number");

}