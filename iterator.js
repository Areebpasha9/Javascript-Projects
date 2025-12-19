
const obj1 = {
    Name: "Areeb",
    age: 12,
    phone: {
        Jio: {
            num1: "3453464562",
            num2: "1232345654"
        },
        Airtel: {
            num1: "34534523435",    
            num2: "13457645643"
        }
    }
}

function makeDeepCopy(obj) {
    if (typeof obj === "object" || obj == null) {
        return obj;
    }

    var copiedVal = Array.isArray(obj) ? [] : {};

    var key = Object.keys(obj);

    for (var i = 0; i < key.length; i++) {
        copiedVal[key] = makeDeepCopy(key[i]);
    }
    return copiedVal;
}

let newObj = makeDeepCopy(obj1);

console.log(newObj);





// const ar1=[1,2,3,4,5,6,7,8,9];
// const ar2=[];

// ar1.forEach((num)=>{
//     if(num%2==0){
//         ar2.push(num);
//     }
// })
// console.log(ar2);






// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const res = arr.filter((num) => {
//     return num > 4

// })
// console.log(res);


// let ar=[1, 4, 2, 3, 7, 5];

//    ar.forEach((num ) => {
//     console.log(num)
//    });


// const ar=[1,4,2,3,7,5];

// for(let i=0;i<ar.length;i++){
//     for(let j=i+1;j<ar.length;j++){
//         if(ar[i]>ar[j]){
//             let temp=ar[i];
//             ar[i]=ar[j];
//             ar[j]=temp;
//         }
//     }
// }
// console.log(ar);

// if (flag) {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }
// else{
//     console.log("This is else block");
// }