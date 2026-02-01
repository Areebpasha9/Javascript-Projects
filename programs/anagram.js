function checkAnagram(str1, str2) {
    str1=str1.toLowerCase().split('').sort().join('');
    str2=str2.toLowerCase().split('').sort().join('');

    if (str1 === str2) {
        console.log("Anagram Strings");
    }
    else {
        console.log("Not Anagram string")
    }

}

let str1 = "sana";
let str2 = "anaS";
checkAnagram(str1, str2);