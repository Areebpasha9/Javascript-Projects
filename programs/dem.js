
















// const ar=['Areeb','Pasha'];

// const res=ar.map((n)=>n.toUpperCase()).filter(m=>m.endsWith('B'));
// console.log(typeof res);





// let day='monday';
// switch (day) {
//     case 'monday':
//         console.log("Day is monday");
        
//         break;
//         case 'saturday':
//             console.log("Day is saturday");
            

//     default:
//         console.log("Any other day");
        
//         break;
// }


// const ar=[1,2,3,4,5,6,7,8,9,12];

// const res=Array.from(ar);
// console.log(res);



// ar.forEach((n)=>{

//     if(n>4){
//         res.push(n);
//     }
// });
// console.log(res);

// ? Palindrome program

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("markram")); 
// console.log(isPalindrome("hello"));   




// ar.forEach(primtMe);

// function primtMe(item){
//     console.log(item);
// }

// const str1="";
// const str1_5="";
// const str2="Pasha";
// const str3=str1 &&str1_5&& str2;
// console.log(str3);

// let str="My name iseb Mohammad Areeb eb";
// let cnt=0
// cnt=str.match(/eb/g);
// console.log(cnt.length);

// const user={
//     Name:"Mohammad Areeb",
//     age:21,
//     address:function()
//     {
//         console.log(this.Name);
//         console.log(this);
        
//     } 
// }
// user.address();
// user.Name=("Azhan");
// user.address();
// console.log(this);




// let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj2 = { ...obj1 };
// obj2.phone.airtel.num1 = "Changed";
// console.log(obj1.phone.airtel.num1);
// console.log(obj2.phone.airtel.num1);


// str = "Areeb";
// let res = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     res += str.charAt(i);
// }
// console.log(res);



// str = "areeb";
// const newStr = str => String(str) === String(str).split('').reverse().join('');
// console.log(newStr('markrama'));


// let ar = [122, 221, 132, 466, 776];
// var sum = 0;
// ar.forEach((e,indx)=>{
//   sum=sum+e;
//     // console.log(e," ",sum);
// })
// ar.forEach((e)=> {
//     sum += e;
// })
// console.log('sum of array is ', sum);

