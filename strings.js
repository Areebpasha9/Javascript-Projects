// name1 = "Areeb";
// name2 = "Riyasat";
// fullName = `${name1} ${name2}`
// console.log(`Mohammad ${fullName} `);

let ar = [1, 5, 3, 2, 4, 7, 6];

for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (ar[i] > ar[j]) {
            let temp = ar[i];
            ar[i] = ar[j]
            ar[j] = temp;
        }
    }
}
console.log(ar);


// console.log(fullName.length)
// console.log(fullName.toUpperCase());
// console.log(fullName.charAt(3));

"++++++++++Math++++++++++"

// const min=1000;
// const max=9999;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

"+++++++++++Date?Time+++++++++++++"

// let date = new Date();
// console.log(date.getDay());

// console.log(date.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);  /*in milliseconds*/
// console.log(Math.floor(myTimeStamp / 1000)); /*in milliseconds*/



