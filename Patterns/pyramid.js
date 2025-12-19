
let k = 0;

for (let i = 0; i <= 6; i++) {
    k = i <= 3 ? k + 1 : k - 1;
    for (let j = 0; j <= 3; j++) {
        if (j < k) {
            process.stdout.write("*");

        }
        else {
            process.stdout.write(" ");

        }
    }
    console.log();
    
}