function outer(){
    count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}

let res=outer();
console.log(res());
console.log((res()));



// function outerFunction(){
//     var count=0;
//     function innerFunction(){
//         count++;
//         return count;
//     }
//     return innerFunction;
// }

// var res=outerFunction();
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());

