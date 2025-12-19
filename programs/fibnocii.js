
let a = 0, b = 1, n = 8;

// console.log(a, " ", b);
process.stdout.write(a+ " "+ b);
for (let i = 2; i <= n; i++) {
    let c = a + b;
    // console.log(c, " ");
    process.stdout.write(c + " ");
    a = b;
    b = c;

}

