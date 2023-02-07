// declaring consts for DOM elements
const startGameBtn = document.getElementById("start-game-btn");
const welcomeDiv = document.getElementById("welcome-div");
const gameDiv = document.getElementById("game-div");
const resultsDiv = document.getElementById("results-div");
const questionText = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("btn-choice"));
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progressbar-fg");

// declaring other variables
let maxQuestions = 10;

/* index of points matches index of country in countries_array
 * [New Zealand, Mexico, Peru, China, Zambia, Kyrgyzstan]*/
let userTotal = [0, 0, 0, 0, 0, 0];
let wildlifePoints = [0, 1, 0, 0, 3, 2];
let thrillPoints = [3, 0, 1, 0, 2, 0];
let culturePoints = [0, 0, 3, 2, 0, 1];
let foodPoints = [2, 3, 0, 1, 0, 0];
let peoplePoints = [1, 2, 0, 3, 0, 0];
let remotePoints = [0, 0, 2, 0, 1, 3];


// Start Game Button - master function
function startGame(event) {
    event.preventDefault();

    // capturing user name
    let username = document.getElementById("name-input");

    // alert if no username entered
    if (username.value === "") {
        alert(`Please enter your name to play, real or imaginary!`)

        // game play functionality
    } else {
        console.log("My name is " + username.value + " and I'm starting the game!");
        welcomeDiv.classList.toggle("hidden");
        gameDiv.classList.toggle("hidden");
        addQuestionContent(0, username);
        handleAnswer();
    }


    // Populate the questions and answers & move on progress bar
    function addQuestionContent(index) {

        // populate question
        questionText.innerText = questions[index].questionText;

        // populate answers
        let answers = questions[index].answers;
        for (let i = 0; i < answers.length; i++) {
            choices[i].innerText = answers[i].answerText;
        };

        // progress bar & question number
        let questionNumber = questions[0].questionNumber;
        progressText.innerHTML = `Question ${questionNumber} of ${maxQuestions}`;
        progressBar.style.width = `${questionNumber / maxQuestions * 100}%`
    }

    /** User selects answer
     * Adapted from https://www.sitepoint.com/community/t/select-one-button-deselect-other-buttons/348053 */
    function handleAnswer() {
        choices.forEach(choice => {
            choice.addEventListener('click', () => {
                selectAndSubmit(choice);
            });
        });

        // adds a 'selected' class to selected answer & removes from others
        // calls function to log results and move to next question
        function selectAndSubmit(target) {
            choices.forEach(choice => {
                choice.classList.remove("selected");
                if (choice == target) {
                    choice.classList.add("selected");
                    logResults(choice);
                    // Sets short timeout before question refresh
                    setTimeout(function () {
                        // remove current question from array and replace with next question or go to results
                        if (questions.length <= 1) {
                            showResults();
                        } else {
                            questions.splice(0, 1);
                            addQuestionContent(0);
                            choice.classList.remove("selected");
                            enableButtons();
                        }
                    }, 800);
                } else {
                    // disable other buttons during timeout (prevent results logging issues)
                    choice.disabled = true;
                };
            });
        };
    };

    // re-enable the buttons
    function enableButtons() {
        choices.forEach(choice => {
            choice.disabled = false;
        });
    }

    // logs the score and the 'style' to arrays
    function logResults(choice) {
        logScores(choice);
        logStyles(choice);

    }
    // helper functions for logAnswerResults
    function logScores(choice) {}

    function logStyles(choice) {}

    // Goes to results page
    function showResults() {
        // hide and reveal divs
        gameDiv.classList.toggle("hidden");
        resultsDiv.classList.toggle("hidden");

        // declaring consts for DOM variables on results page
        const personalityHeading = document.getElementById("personality-heading");
        const personalityText = document.getElementById("personality-text");
        

        // populating page
        let resultsName = username.value.toUpperCase();

        (personalityHeading.innerText = `${resultsName}, YOU ARE A BUMHEAD!`);
    }
}