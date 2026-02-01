let sentence = "i am learning javascript with chatgpt";
let result = "";
let capitalizeNext = true;
 let res = sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1))
     .join(" ");

// for (let i of sentence) {
//     if (i == " ") {
//         result += i;
//         capitalizeNext = true;
//     }
//     else if (capitalizeNext) {
//         result += i.toUpperCase();
//         capitalizeNext = false;
//     }
//     else {
//         result += i;
//     }
// }
console.log(res);
