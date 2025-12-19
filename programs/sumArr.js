let ar = [6, 4, 7, 2, 1, 3, 5];
// let sum=0;
// for(l of ar){
//     sum+=l;
// }
let sum=ar.reduce((acc,curr)=>{
   return acc+curr;
    
},0)
console.log(sum);
