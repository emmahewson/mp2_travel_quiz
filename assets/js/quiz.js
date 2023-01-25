

const startGameBtn = document.getElementById("start-game")
const nextQuestionBtn = document.getElementById("next-question-btn")
const gameDiv = document.getElementById("game-div")
const questionText = document.getElementById("question-text")
const choices = Array.from(document.getElementsByClassName("choice"))

const btnOne = document.getElementById("btn1");
const btnTwo = document.getElementById("btn2");
const btnThree = document.getElementById("btn3");
const btnFour = document.getElementById("btn4");
const btnFive = document.getElementById("btn5");
const btnSix = document.getElementById("btn6");


startGameBtn.addEventListener('click', function startGame() {
    gameDiv.style.display = 'block';
    startGameBtn.style.display = 'none';
    addQuestionContent(0);

})
function populateAnswers(index) {
    let answers = questions[index].answers;
    for (let i = 0; i < answers.length; i++) {
        choices[i].innerText = answers[i].answerText;
    }
}

function addQuestionContent(index) {
    questionText.innerText = questions[0].questionText;
    populateAnswers(index)
        choices
    }

nextQuestionBtn.addEventListener('click', function nextQuestion() {
    questions.splice(0, 1);
    addQuestionContent(0);
})




    