
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = [
    { id: 1, name: "Areeb" },
    { id: 2, name: "Arman" },
    { id: 3, name: "Faizan" },
    { id: 3, name: "Faizan" },
    { id: 3, name: "Faizan" },
    { id: 4, name: "Mahim" }
]

const dupp = [...new Map(obj2.map(user => [user.id, user])).entries()]
console.log(dupp);



// Sub Arrays bana deta h har ek obj ki
// console.log(Object.entries(obj));

// const res = Object.entries(obj).map(([Key, value]) => ({
//     Key,
//     value
// }));

console.log(res);

