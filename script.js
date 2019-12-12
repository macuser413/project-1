//// Initial conceptual process...
// Develop Questions
// Create question array const
// Use OOP to create an Object with key:value pairs for Qs/As
// Create class for Question (question, choices, answer)
// Create class for actual trivia question quiz

// MVP process
// Create questions (3-5) - use array - DONE
// Create answers (=) - use array - DONE
// Create Next question button - DONE
// Populate Qs/As using DOM manipulation - DONE
// INTRO MODAL WINDOW???
// POPULATE trivia game - DONE
//// Questions and Answers divs created into game box (DOM) - DONE
// Create event listeners for answer check and response - DONE
// Create answer check - use boolean logic to check answer - DONE
// Next question functionality - DONE... sort of


// Array of Starter Q/A Objects
const questions = [
    {
       question: "How many horses live at Better Farm?",
       correct: 2, 
       answerPool: [0, 2, 4, 5]
    },
    {
        question: "How many pigs live at Better Farm?",
        correct: 3, 
        answerPool: [2, 3, 4, 5]
     },
     {
        question: "How many chickens live at Better Farm?",
        correct: 25, 
        answerPool: [2, 13, 25, 42]
     },
     {
        question: "How many alpacas live at Better Farm?",
        correct: 8, 
        answerPool: [4, 6, 8, 12]
     },
     {
        question: "How many dogs live at Better Farm?",
        correct: 3, 
        answerPool: [0, 2, 3, 4]
     },
     {
        question: "How many bee hives host bees at Better Farm?",
        correct: 1, 
        answerPool: [0, 1, 3, 5]
     },
     {
        question: "How many humans regularly live at Better Farm?",
        correct: 2, 
        answerPool: [2, 3, 4, 5]
     },
]

// Start game button to initialize trivia game board.
const startGame = document.querySelector("#start");
const nextQuestion = document.querySelector("#next");
let questionBox = document.querySelector(".question");
let answersBox = document.querySelector(".answers");
// let currentQuestion = questions[randomQuestion()];
// let currentQuestion = questions[0];
let questionCount = 0;
let score = document.querySelector("#score-tally")
let currentScore = 0
let x = 0

// function randomQuestion() {
//     return Math.floor(Math.random() * questions.length)
// };

// startGame.addEventListener("click", evt => {
//     populateQuery()
// });

nextQuestion.addEventListener("click", populateQuery);

function populateQuery() {
    while (answersBox.firstChild) {
        answersBox.removeChild(answersBox.firstChild)
    }
    if (x >= 7) {
        questionBox.textContent = "The game is over."
        let finalScore = document.createElement("div")
        finalScore.classList.add("final-score")
        finalScore.textContent = "Your final score " + currentScore + " of 7."
        answersBox.appendChild(finalScore)
    } else {
        questionBox.textContent = questions[x].question
    for (i = 0; i < questions[x].answerPool.length; i++) {
        let possAnswer = document.createElement("div")
        possAnswer.classList.add("answer-pool")
        possAnswer.textContent = questions[x].answerPool[i]
        answersBox.appendChild(possAnswer)
    }    
        x += 1
}
};

// Event Listener for user answer selection
answersBox.addEventListener("click", evt => {
    checkAnswer(evt.target, questions[x - 1].correct)
}) 

//// Check Answer Function
// Compare user selection (div) to correct answer key:value pair
function checkAnswer(userSelect, correctAnswer) {
    if (userSelect.innerHTML == correctAnswer) {
        alert("Congrats!")
        currentScore += 1
        score.innerHTML = "Score: " + currentScore
    } else {
        alert("Sorry, you're wrong...")
    }
    populateQuery()
};