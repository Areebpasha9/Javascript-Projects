
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        if (j >= 5 - i) {
            process.stdout.write("*");
        }
        else {
            process.stdout.write(" ");

        }
    }
    console.log();
    
}