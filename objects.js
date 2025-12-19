const symb = Symbol("symb");

let obj = {
    name: "Areeb",
    age: 21,
    isStudent: true,
    symb: "Turk"

}

obj.myFun = function () {
    console.log(`How are you ${this.name} ${"pasha"}`);
}
console.log(obj.myFun());







// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.symb);
// console.log(typeof symb);
