const questions = {
    science: {
        easy: [
            {
                question: "What planet is known as the Red Planet?",
                answer: [
                    { text: "Earth", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Venus", correct: false },
                    { text: "Jupiter", correct: false },
                ]
            },
            {
                question: " Which part of a plant absorbs water and nutrients from the soil",
                answer: [
                    { text: "Stem", correct: false },
                    { text: "Leaves", correct: false },
                    { text: "Roots", correct: true },
                    { text: "Flower", correct: false },
                ]
            },
            {
                question: "What do animals use their lungs for ?",
                answer: [
                    { text: "Digestion", correct: false },
                    { text: "Breathing", correct: true },
                    { text: "Pumping Blood", correct: false },
                    { text: "Thinking", correct: false },
                ]
            },
            {
                question: "Which of these is an example of a mammal ?",
                answer: [
                    { text: "Eagle", correct: false },
                    { text: "Frog", correct: true },
                    { text: "Human", correct: false },
                    { text: "Snake", correct: false },
                ]
            }
            ,
            {
                question: "In humans, which structure is primarily responsible for carrying oxygen from the lungs to the body tissues?",
                answer: [
                    { text: "Plasma", correct: false },
                    { text: "White Blood Cells", correct: true },
                    { text: "Platelets", correct: false },
                    { text: "Red Blood Cells", correct: false },
                ]
            }
        ],
        medium: [
            {
                question: "What is H2O commonly known as?",
                answer: [
                    { text: "Hydrogen", correct: false },
                    { text: "Water", correct: true },
                    { text: "Oxygen", correct: false },
                    { text: "Acid", correct: false },
                ]
            },
            {
                question: "In humans, which structure is primarily responsible for carrying oxygen from the lungs to the body tissues?",
                answer: [
                    { text: "Plasma", correct: false },
                    { text: "White Blood Cells", correct: true },
                    { text: "Platelets", correct: false },
                    { text: "Red Blood Cells", correct: false },
                ]
            },
            {
                question: "A plant with variegated leaves (green and white patches) is placed in sunlight for several hours. When tested for starch, which part of the leaf will test positive ?",
                answer: [
                    { text: "Only the green parts", correct: false },
                    { text: "Only the white parts", correct: true },
                    { text: "Both green and white parts equally", correct: false },
                    { text: "Neither part", correct: false },
                ]
            },
            {
                question: "The pH of a solution is a measure of its: ?",
                answer: [
                    { text: "Boiling Point", correct: false },
                    { text: "Melting Point", correct: true },
                    { text: "Concentration", correct: false },
                    { text: "Acidity or alkalinity", correct: false },
                ]
            },
        ],
        hard: [
            {
                question: "What particle has a negative charge?",
                answer: [
                    { text: "Proton", correct: false },
                    { text: "Electron", correct: true },
                    { text: "Neutron", correct: false },
                    { text: "Ion", correct: false },
                ]
            },
            {
                question: "Why does the Northern Hemisphere experience summer in June ? ",
                answer: [
                    { text: "The Earth is closer to the Sun in June.", correct: false },
                    { text: "The North Pole is tilted towards the Sun.", correct: true },
                    { text: "The Sun burns brighter in the summer.", correct: false },
                    { text: "The Southern Hemisphere has no effect on the seasons.", correct: false },
                ]
            },
            {
                question: "The atomic number of an element is defined by the number of :?",
                answer: [
                    { text: "Protons in its nucleus", correct: true },
                    { text: "Neutrons in its nucleus", correct: false },
                    { text: "Electrons in its outer shell", correct: false },
                    { text: "Protons and neutrons combined", correct: false },
                ]
            },
            {
                question: "Which layer of the Earth is primarily composed of solid iron and nickel ?",
                answer: [
                    { text: "Crust", correct: false },
                    { text: "Mantle", correct: false },
                    { text: "Outer Core", correct: false },
                    { text: "Inner Core", correct: true },
                ]
            },
        ]
    },
    general: {
        easy: [
            {
                question: "What planet is known as the Red Planet?",
                answer: [
                    { text: "Earth", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Venus", correct: false },
                    { text: "Jupiter", correct: false },
                ]
            }
            ,
            {
                question: "The atomic number of an element is defined by the number of :?",
                answer: [
                    { text: "Protons in its nucleus", correct: true },
                    { text: "Neutrons in its nucleus", correct: false },
                    { text: "Electrons in its outer shell", correct: false },
                    { text: "Protons and neutrons combined", correct: false },
                ]
            },
            {
                question: "Which layer of the Earth is primarily composed of solid iron and nickel ?",
                answer: [
                    { text: "Crust", correct: false },
                    { text: "Mantle", correct: false },
                    { text: "Outer Core", correct: false },
                    { text: "Inner Core", correct: true },
                ]
            }
        ],
        medium: [
            {
                question: "What is H2O commonly known as?",
                answer: [
                    { text: "Hydrogen", correct: false },
                    { text: "Water", correct: true },
                    { text: "Oxygen", correct: false },
                    { text: "Acid", correct: false },
                ]
            }
            ,
            {
                question: "The atomic number of an element is defined by the number of :?",
                answer: [
                    { text: "Protons in its nucleus", correct: true },
                    { text: "Neutrons in its nucleus", correct: false },
                    { text: "Electrons in its outer shell", correct: false },
                    { text: "Protons and neutrons combined", correct: false },
                ]
            },
            {
                question: "Which layer of the Earth is primarily composed of solid iron and nickel ?",
                answer: [
                    { text: "Crust", correct: false },
                    { text: "Mantle", correct: false },
                    { text: "Outer Core", correct: false },
                    { text: "Inner Core", correct: true },
                ]
            }
        ],
        hard: [
            {
                question: "What particle has a negative charge?",
                answer: [
                    { text: "Proton", correct: false },
                    { text: "Electron", correct: true },
                    { text: "Neutron", correct: false },
                    { text: "Ion", correct: false },
                ]
            }
            ,
            {
                question: "The atomic number of an element is defined by the number of :?",
                answer: [
                    { text: "Protons in its nucleus", correct: true },
                    { text: "Neutrons in its nucleus", correct: false },
                    { text: "Electrons in its outer shell", correct: false },
                    { text: "Protons and neutrons combined", correct: false },
                ]
            },
            {
                question: "Which layer of the Earth is primarily composed of solid iron and nickel ?",
                answer: [
                    { text: "Crust", correct: false },
                    { text: "Mantle", correct: false },
                    { text: "Outer Core", correct: false },
                    { text: "Inner Core", correct: true },
                ]
            }
        ]
    },

    history: {
        easy: [
            {
                question: "Which is the largest animal in the world?",
                answer: [
                    { text: "Shark", correct: false },
                    { text: "Blue Whale", correct: true },
                    { text: "Elephant", correct: false },
                    { text: "Giraffe", correct: false },
                ]
            },
            {
                question: "Which is the smallest country in the world?",
                answer: [
                    { text: "Vatican City", correct: true },
                    { text: "India", correct: false },
                    { text: "China", correct: false },
                    { text: "Nepal", correct: false },
                ]
            }
        ],
        medium: [
            {
                question: "Which continent is known as the Dark Continent?",
                answer: [
                    { text: "Asia", correct: false },
                    { text: "Africa", correct: true },
                    { text: "Europe", correct: false },
                    { text: "South America", correct: false },
                ]
            }
        ],
        hard: [
            {
                question: "Which ocean has the deepest trench?",
                answer: [
                    { text: "Indian", correct: false },
                    { text: "Pacific", correct: true },
                    { text: "Atlantic", correct: false },
                    { text: "Arctic", correct: false },
                ]
            }
        ]
    }
};

// DOM elements
const subjectButtons = document.querySelectorAll(".subject-btn");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

const subjectDiv = document.getElementById("subject-selection");
const difficultyDiv = document.getElementById("difficulty-selection");

let selectedSubject = "";
let selectedDifficulty = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timer;
let timeLeft = 15;
const timerDisplay = document.getElementById("timer");

// Select subject
subjectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedSubject = btn.dataset.subject;
        subjectDiv.style.display = "none";
        difficultyDiv.style.display = "block";
    });
});

// Select difficulty
difficultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedDifficulty = btn.dataset.difficulty;
        currentQuestions = questions[selectedSubject][selectedDifficulty];
        difficultyDiv.style.display = "none";
        quizContainer.style.display = "block";
        startQuiz();
    });
});

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show Question
function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    startTimer();
}

// Reset
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Select answer
function selectAnswer(e) {
    clearInterval(timer);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("Correct");
        score = score + 2;
    } else {
        selectedBtn.classList.add("Incorrect");
        score--;
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("Correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "none";

    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }
        else {
            timerDisplay.style.display = "none";
            showScore();
        }
    }, 1000);
}


function showScore() {
    resetState();

    // questionElement.innerHTML = `🎯 Your score ${score}   and High Score is : ${highScore}!`;
    let feedback = '';
    const total = currentQuestions.length * 2;
    const percentage = (score / total) * 100;

    if (percentage >= 80) {
        feedback = "🌟 Excellent work! You're a quiz master!";
    } else if (percentage >= 50) {
        feedback = "👍 Great job! Keep improving!";
    } else if (percentage >= 30) {
        feedback = "🙂 Not bad! A little more practice will help!";
    } else {
        feedback = " Try again! You can do better next time!";
    }
    if (score > highScore) {
        localStorage.setItem("highScore", highScore);
    }
    questionElement.innerHTML = `
    <div style="font-size: 1.5rem; font-weight: bold;">🏆 High Score: ${highScore}</div>
    <div style="margin-top: 10px; font-size: 1.3rem;">🎯 Your Score: ${score}</div>
    <div style="margin-top: 20px; font-size: 1.2rem; color: #555;">${feedback}</div>
`;


    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Next button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
        handleNextButton();
    } else {
        quizContainer.style.display = "none";
        subjectDiv.style.display = "block";
    }
});


function startTimer() {
    timeLeft = 15;
    timerDisplay.innerHTML = `Time left : ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerHTML = `Time left : ${timeLeft}`

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }

    }, 1000);
}

function handleTimeUp() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    // Auto Go to next question
    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }
        else {
            showScore();
        }
    }, 1000);
}