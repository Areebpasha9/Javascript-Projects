
let count=0;
const cntDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decrement");

function updateDisplay(){
    cntDisplay.textContent=count;
}
incrementBtn.addEventListener("click",()=>{
    if(count<20){
        count++;
    }
    else{
        alert("Can not go beyond 20");
        
    }

updateDisplay();
})
decrementBtn.addEventListener("click",()=>{
    if (count>0) {
        count--;
    }
    else{
        alert("Can not go below 0")
    }
    updateDisplay();
})




// const div = document.createElement('div');
// console.log(div);
// div.className = 'main';
// div.id = Math.random() * 10;
// div.style.backgroundColor = "seagreen";
// const addText = document.createTextNode("Mohammad Areeb Pasha")
// div.appendChild(addText);
// document.body.appendChild(div)

// document.getElementById('play').addEventListener("mouseover", (event) => {
//     // alert("Button clicked").style.backgroundColor="cyan";
//     event.target.style.backgroundColor = "seagreen";
//     event.target.textContent = "Hovered";
// })

// fetch('https://api.weatherapi.com/v1/current.json?key=API_KEY&q=Delhi')
// .then(res => res.json()).then((data) => console.log(data.location.name,data.current.temp_c));
// fetch("https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=Delhi")
    // .then(res => res.json())
    // .then(console.log);




// var currMode = "light";
// let modeBtn = document.querySelector("#mode");
// console.log([]=="");

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="seagreen";
//     }
//     console.log(currMode);

// })




// let btn = document.querySelector("#box");

// btn.onclick = () => {
//     console.log("Mohammad Areeb");
//     let a = 10;
//     a++;
//     console.log(a);

// };

// let divv = document.querySelector(".class-div");
// divv.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);

// divv.style.backgroundColor="cyan";
// };

// divv.addEventListener("mouseover", () => {
//     divv.style.backgroundColor = "aquamarine";
//     console.log("AquaMArine color applied!");

// })

// let bt = document.querySelector("#inp")

// bt.addEventListener("keypress", () => {
//     alert("Key has been pressed!")
// });
