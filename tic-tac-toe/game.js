let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgConatiner.classList.add("hide");

    }
}



const showWinner = (winner) => {
    msg.innerText = `Winner is : ${winner}`
    msgConatiner.classList.remove("hide");
    document.querySelector(".game").classList.add("hide");
}


boxes.forEach((box) => {
    // let flag = false;
    box.addEventListener("click", () => {
        console.log("Button Clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
                disableBoxes();
                return;
            }
        }
    }
    let isDraw=true;
    for (b of boxes) {
        if (b.innerText === "") {
            isDraw=false;
        }
    }
    if (isDraw) {
        showWinner("Match Draw");
        disableBoxes();
    }

}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    document.querySelector(".game").classList.remove("hide");
}

newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);