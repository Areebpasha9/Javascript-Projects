let k = -1;
for (let i = 0; i <= 4; i++) {
    k = i <= 2 ? k + 1 : k - 1;

    for (let j = 0; j <= 4; j++) {
        if (j >= 2 - k && j <= 2 + k) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
