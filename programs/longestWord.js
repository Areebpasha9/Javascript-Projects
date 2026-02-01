let str = "my name is areeb riyasat";
let currWord = "";
let longestWord = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== undefined) {
        currWord += str[i];
    }
    else {
        if (currWord.length > longestWord.length) {
            longestWord = currWord;

        }
        currWord = "";
    }
}
console.log(currWord);