let ar=[1,2,1,3,1,1,4,2,5,6,4];

let map=new Map();

for(let n of ar){
    map.set(n,(map.get(n)||0)+1);
}
console.log(map);



// let freq={};

// for(let n of ar){
//     if (freq[n]) {
//         freq[n]++;
//     }
//     else{
//         freq[n]=1;
//     }
// }

// console.log(freq);
