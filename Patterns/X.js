
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        if (i === 0 ||j===4||j===0 ||i===2) {
            process.stdout.write("*");

        }
        else {
            process.stdout.write(" ");

        }
    }
    console.log();
    
}