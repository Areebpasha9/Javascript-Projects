const obj = {
    Name: "Areeb",
    age: 21,
    company: {
        name: "Telus",
        Designation: "Intern"

    }
}
const obj2 = JSON.parse(JSON.stringify(obj));

obj2.company.name="Telus Digital";

console.log(obj.company.name);
console.log(obj2.company.name);
