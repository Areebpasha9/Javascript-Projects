tempo("Markram");

function tempo(name) {
    let rev = "";
    for (var i = name.length - 1; i >= 0; i--) {
        name=name.toLowerCase();
        rev += name.charAt(i);
    }
    if(name===rev){
        console.log("Is Palindrome");
        
    }
    else{
        console.log("Not Palindrome");
        
    }
    console.log(rev);
}




// let ar=[4,1,3,2,6,5];

// for(let i=0;i<ar.length;i++){
//     for(let j=i+1;j<ar.length;j++){
//         if(ar[i]>ar[j]){
//             let temp=ar[i];
//             ar[i]=ar[j];
//             ar[j]=temp;
//         }
//     }
// }
// console.log("Sorted Array")
// console.log(ar);
