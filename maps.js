
const ar = [
    { name: 'Areeb', price: 10000 },
    { name: 'John', price: 50000 }
];
let ar2 = ar.map(n => {
    return {
        name: n.name.charAt(0).toLowerCase() + n.name.slice(1),
        price: n.price + n.price * 0.18
    }
});
console.log(ar2);



// let ar = [1,2,3,4,5,6,7];

// let ar2 = ar.map((n) => n*2);
// console.log(ar2);

// let ar = ['areeb','azhan','gul'];

// let ar2 = ar.map((n) => n.charAt(0).toUpperCase()+n.slice(1));
// console.log(ar2);