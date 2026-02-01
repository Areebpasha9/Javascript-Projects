
const { error, log } = require('console');
const fs = require('fs');
fs.unlink('hello.txt', function (err) {
    if (err)
        console.log(err);
    else console.log("Done");
    
})
