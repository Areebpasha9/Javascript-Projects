function flatten(ar) {
    let result = [];
    for (let i of ar) {
        if (Array.isArray(i)) {
            result = result.concat(flatten(i));
        }
        else {
            result.push(i);
        }
    }
    return result;
}

let arr = [1, [2, [3, 4], 5], 6];

console.log(flatten(arr));

// console.log(arr.flat(Infinity));
