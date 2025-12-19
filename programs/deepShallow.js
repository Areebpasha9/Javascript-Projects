const obj1 = {
    name: "Areeb",
    phone: {
        sim: {
            airtel: {
                num1: "23465475685",
                num2: "697574535452"
            },
            Jio: {
                num1: "23465475685",
                num2: "697574535452"
            }
        }
    }
}

// const obj3=JSON.parse(JSON.stringify(obj1));
// console.log(obj3);


function makeDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    var inputVal = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
        inputVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return inputVal;
}
let res = makeDeepCopy(obj1);
// let res=Object

res.phone.sim.Jio.num1="22222222222";
console.log(res.phone.sim.Jio.num1);
console.log(obj1.phone.sim.Jio.num1);
