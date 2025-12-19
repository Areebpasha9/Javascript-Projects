
let num = 120219;
let newNum = String(num);

let revString = newNum.split('').reverse().join('');

if (newNum===revString) {
    console.log("Palindrome");
    return;
}
else{
    console.log("Not palindrome");
    return;
    
}

// let num = 1221, rev = 0, digit;
// let original = num;

// for (; num != 0;) {
//     digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);

// if (original === rev) {
//     console.log("Palindrome");
//     return;
// }
// else {
//     console.log("Not Palindrome");
//     return;
// }

