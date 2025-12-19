let ar=[44,3,11,22,6,78,5,9];
// console.log(ar.sort((a,b) => b-a));

const obj={
    name:"Areeb",
    age:21,
    address:{
        currAddress:"Delhi",
        PermaAddress:"Rampur"
    }
}
const obj2={...obj};

obj2.address.currAddress="Noida";
console.log(obj);
console.log(obj2);







// function checkAnagram( str1,str2){
//  str1=str1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//  str2=str2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
// //  console.log(str1);

// if (str1.length !== str2.length) {
//     console.log(" Not Anagram ");
//     return;
// }
// else{
//     if(str1.split('').sort().join('')===str2.split('').sort().join('')){
//         console.log("Strings are Anagram");
        
//     }
//     else{
//         console.log("Not Anagram");
//     }
    
// }
 
// }
// checkAnagram("anas","SanA!");
// // console.log(checkAnagram("sana","anas"));