

let startGameBtn = document.getElementById("start-game")
let nextQuestionBtn = document.getElementById("next-question-btn")
let gameDiv = document.getElementById("game-div")
let questionText = document.getElementById("question-text")
let btnOne = document.getElementById("btn1");
let btnTwo = document.getElementById("btn2");
let btnThree = document.getElementById("btn3");
let btnFour = document.getElementById("btn4");
let btnFive = document.getElementById("btn5");
let btnSix = document.getElementById("btn6");


startGameBtn.addEventListener('click', function startGame() {
    gameDiv.style.display = 'block';
    startGameBtn.style.display = 'none';
    addQuestionContent(0);

})


function addQuestionContent(index) {
    questionText.innerText = questions[0].questionText;
    let answers = questions[index].answers;

    btnOne.innerText = answers[0].answerText;
    btnTwo.innerText = answers[1].answerText;
    btnThree.innerText = answers[2].answerText;
    btnFour.innerText = answers[3].answerText;
    btnFive.innerText = answers[4].answerText;
    btnSix.innerText = answers[5].answerText;
};

nextQuestionBtn.addEventListener('click', function nextQuestion() {
    questions.splice(0, 1);
    addQuestionContent(0);
})





    