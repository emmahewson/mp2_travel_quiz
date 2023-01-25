const questions = [{
        questionNumber: 1,
        questionText: "At a party you are most likely to be found…",
        answers: [{
                answerNumber: 1,
                answerText: "Leafing through the host's book collection",
                answerType: "culture"
            },
            {
                answerNumber: 2,
                answerText: "Jumping off the roof in to the pool",
                answerType: "thrill"
            },
            {
                answerNumber: 3,
                answerText: "Hanging out with the pet dog",
                answerType: "wildlife"
            },
            {
                answerNumber: 4,
                answerText: "Telling a funny story to a crowd of people",
                answerType: "people"
            },
            {
                answerNumber: 5,
                answerText: "In the kitchen making 'helpful' cooking suggestions",
                answerType: "food"
            },
            {
                answerNumber: 6,
                answerText: "Lying in the garden looking at the stars",
                answerType: "remote"
            },
        ]
    },
    {
        questionNumber: 2,
        questionText: "Your ideal weekend would involve…",
        answers: [{
                answerNumber: 1,
                answerText: "Alpaca walking",
                answerType: "wildlife"
            },
            {
                answerNumber: 2,
                answerText: "A day shopping in a big city",
                answerType: "people"
            },
            {
                answerNumber: 3,
                answerText: "Wandering around a museum",
                answerType: "culture"
            },
            {
                answerNumber: 4,
                answerText: "Getting as far away from other human beings as possible",
                answerType: "remote"
            },
            {
                answerNumber: 5,
                answerText: "Mountain biking down Snowdon",
                answerType: "thrill"
            },
            {
                answerNumber: 6,
                answerText: "Trying out a new restaurant",
                answerType: "food"
            },
        ]
    },
]

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





    