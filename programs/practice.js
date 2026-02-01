
function outer() {
    let Name = "Areeb";
    function Inner() {
        console.log(Name);
    }
    return Inner;
}
const res = outer();
res();


// let [a,b,...c] = [1, 10, 2, 25, 3];
// console.log(a,b,c);

// console.log(c.sort((a,b)=>a-b));
// console.log([...nums].sort((a,b)=>{return b-a}));

// const ar = [11, "areeb", 23, 12, "Pasha", 2, "a"];
// const ar2=[1,3,9,3,5,7];
// console.log(ar2.some(n=>n%2==0));

// const numbers = [];
// const strings = [];
// var j = 0;
// var k = 0

// const numbers = ar.filter(x => Number.isInteger(x));
// const strings = ar.filter(x => typeof (x) === 'string');
// for (var i = 0; i < ar.length; i++) {
//     if (Number.isInteger(ar[i])) {
//         numbers.push(ar[i]);

//     }
//     else {
//         strings.push(ar[i]);
//     }
// }
// let bool = null;
// console.log(numbers);
// console.log(strings);
// console.log(typeof(bool));


// let ar = [2, 1, 3, 1, 4, 1, 2, 5, 6, 5, 7];
// let unique = [];
// let seen = {};

// let set = new Set();

// for(let i of ar){
//     set.add(i);
// }
// console.log(set);


// for (let i of ar) {
//     if (!seen[i]) {
//         unique.push(i);
//         seen[i] = true;
//     }
// }
//     console.log(unique);



