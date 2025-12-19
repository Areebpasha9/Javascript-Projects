
const words = ["JavaScript", "is", "awesome","mohammadAreeb"];

console.log(words.reduce((acc,cnt)=>{
    return acc+ cnt.length
},0));



// console.log(words.reduce((longest,currWord)=>{
//     return currWord.length>longest.length?currWord:longest;
// }));



// const nums = [1, 2, 2, 3, 3, 3];

// console.log(nums.reduce((acc,num)=>{
//     acc[num]=(acc[num]||0)+1;
//     return acc;
// },{})   );



// const nums = [5, 10, 20, 15];

// console.log(nums.reduce((a, b) => {
//     return a > b ? a : b
// }));



// const nums = [1, 4, 7, 12];
// console.log(nums.map((n)=>n%2==0?"even":"odd"));


// const students = [
//   { name: "Areeb", marks: 85 },
//   { name: "Azhan", marks: 40 },
//   { name: "Pasha", marks: 92 },
// ];

// console.log(students.filter((m)=>m.marks>50).map((n)=>n.name.toUpperCase()));




// const marks=[66,55,87,45,45];
// console.log(marks.map((n)=>n+5));

// const stud = [
//     { name: 'areeb', marks: 88 },
//     { name: 'arman', marks: 44 },
//     { name: 'king', marks: 49 },
//     { name: 'Jack', marks: 68 },
//     { name: 'rubab', marks: 56 },
// ]

// console.log(stud.filter((s) => s.marks > 60).map((n)=>n.name));



// const ar = [12, 54, 23, 11, 87, 55, 44, 23];

// const ar2 = ar.filter((n) => n > 35);
// console.log(ar2);
