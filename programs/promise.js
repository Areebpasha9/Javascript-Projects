
function sayMyName() {
    console.log("Mohammad Areeb Pasha");

}
let promis = new Promise((resolve, reject) => {

    setTimeout(sayMyName, 2000);
    reject("Not valid");
})