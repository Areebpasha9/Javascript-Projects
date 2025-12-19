const arr = [1, 2, 1, 3, 2, 1, 2, 4, 1, 5, 1];

let newArr = arr.reduce((acc, indx) => {
    if (!acc.includes(indx)) {
        acc.push(indx);
    }
    return acc;
},[])
console.log(newArr);



// const mySet = new Set();

// for (i of arr) {
//     mySet.add(i);
// }
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
