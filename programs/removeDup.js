const arr = [1, 2, 1, 3, 2, 1, 2, 4, 1, 5, 1];
let unique = [];
const users = [
    { id: 1, name: "A" },
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 2, name: "B" }
];

// const newObj=[... new Map(users.map(user=>[user.id,user])).values()];
// const newObj = Array.from(new Map(users.map(u => [u.id, u])).values());
// console.log(newObj);



// for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//         unique.push(arr[i]); }}
// console.log("Iterative:", unique);


// const mySet = new Set();
// for (i of arr) {
//     mySet.add(i);}
// console.log(mySet);


// const newAr=arr.filter((value,index)=>{
//    return arr.indexOf(value)===index;
// })
// console.log(newAr);



// const uniqueArr = arr.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr);
//     }
//     return acc;
// }, []);

// console.log(uniqueArr);
