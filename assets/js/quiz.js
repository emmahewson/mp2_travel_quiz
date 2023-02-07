// declaring consts for DOM elements
const startGameBtn = document.getElementById("start-game-btn");
const welcomeDiv = document.getElementById("welcome-div");
const gameDiv = document.getElementById("game-div");
const resultsDiv = document.getElementById("results-div");
const questionText = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("btn-choice"));
const progressDiv = document.getElementById("progress-div");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progressbar-fg");
const restartGameBtn = document.getElementById("restart-game-btn");
const startAgainBtn = document.getElementById("start-again-btn");
const answerDiv = document.getElementById("answer-div-hide");
const answerTieDiv = document.getElementById("answer-tie-div-hide");


// declaring other variables
let maxQuestions = 10;
let username = ""

/* index of points matches index of country in countries_array
 * [New Zealand, Mexico, Peru, China, Zambia, Kyrgyzstan]*/
let userTotal = [0, 0, 0, 0, 0, 0];
let wildlifePoints = [0, 1, 0, 0, 3, 2];
let thrillPoints = [3, 0, 1, 0, 2, 0];
let culturePoints = [0, 0, 3, 2, 0, 1];
let foodPoints = [2, 3, 0, 1, 0, 0];
let peoplePoints = [1, 2, 0, 3, 0, 0];
let remotePoints = [0, 0, 2, 0, 1, 3];

let personalityTally = [];


// Start Game Button - master function
function startGame(event) {
    event.preventDefault();

    // capturing user name
    username = document.getElementById("name-input");

    // alert if no username entered
    if (username.value === "") {
        alert(`Please enter your name to play, real or imaginary!`)

        // game play functionality
    } else {
        console.log("My name is " + username.value + " and I'm starting the game!");
        welcomeDiv.classList.toggle("hidden");
        gameDiv.classList.toggle("hidden");
        addQuestionContent(0);
        handleAnswer();
    }

    // restart & start again game buttons
    restartGameBtn.addEventListener('click', function () {
        window.location.reload();
    });
    startAgainBtn.addEventListener('click', function () {
        window.location.reload();
    });


    // Populate the questions and answers & move on progress bar
    function addQuestionContent(index) {
        let currentQuestion = questions[index];

        // populate question
        questionText.innerText = currentQuestion.questionText;

        // populate answers
        let answers = currentQuestion.answers;
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

    // logs the score and the personality to arrays
    function logResults(choice) {
        // iterates through question array
        questions[0].answers.forEach(answer => {
            // matches the selected answer to the same answer in the array
            // updates the user totals based on the answer category/type by iterating through each answers array
            if (choice.innerText === answer.answerText) {
                switch (answer.answerType) {
                    case "wildlife":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += wildlifePoints[i];
                        }
                        break;
                    case "thrill":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += thrillPoints[i];
                        }
                        break;
                    case "culture":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += culturePoints[i];
                        }
                        break;
                    case "food":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += foodPoints[i];
                        }
                        break;
                    case "people":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += peoplePoints[i];
                        }
                        break;
                    case "remote":
                        for (let i = 0; i < userTotal.length; i++) {
                            userTotal[i] += remotePoints[i];
                        }
                        break;
                };
                // adds the personality type to an array
                personalityTally.push(answer.answerType);
            };
        });

        // temp - adds scores to test site - TO BE REMOVED
        let scoreText = document.getElementsByClassName("score-text");
        for (let i = 0; i < scoreText.length; i++) {
            scoreText[i].innerText = userTotal[i];
        };
        let tallyText = document.getElementById("personality-tally");
        tallyText.innerText = personalityTally;

        function elementCount(arr, element) {
            return arr.filter((currentElement) => currentElement == element).length;
        };

        let cultureScore = elementCount(personalityTally, "culture");
        let foodScore = elementCount(personalityTally, "food");
        let peopleScore = elementCount(personalityTally, "people");
        let remoteScore = elementCount(personalityTally, "remote");
        let thrillScore = elementCount(personalityTally, "thrill");
        let wildlifeScore = elementCount(personalityTally, "wildlife");

        let personalityScoreArray = [cultureScore, foodScore, peopleScore, remoteScore, thrillScore, wildlifeScore];
        let winningScore = Math.max(...personalityScoreArray);
        console.log(winningScore);

        // TO WORK OUT THE TIE BREAK & PERSONALITY FUNCTIONALITY - WHERE TO START
        // NEED TO:
        // filter the array down to only the personalities with the winning score
            // if its .length is longer than 1 then go to tie breaker if not then return the winning personality
            // the tie breaker is populated by checking each score aginst the winningScore - a loop and if statement / switch??
                // if the score isn't equal add "hidden" to the classlist
            // add the click event for the relevant button - same method as above - that personality type is the winner
        
        // SORRY THIS IS REALLY MESSY!!

        console.log("Culture Score: " + cultureScore);
        console.log("Food Score: " + foodScore);
        console.log("People Score: " + peopleScore);
        console.log("Remote Score: " + remoteScore);
        console.log("Thrill Score: " + thrillScore);
        console.log("Wildlife Score: " + wildlifeScore);

    }

    // re-enable the buttons
    function enableButtons() {
        choices.forEach(choice => {
            choice.disabled = false;
        });
    }


    // tie breaker functionality
    function activateTieBreaker() {
        answerDiv.classList.add("hidden");
        progressDiv.classList.add("hidden");
        answerTieDiv.classList.remove("hidden");

        // add function to only show the relevant photos
    }

    // Goes to results page
    function showResults() {
        calculatePersonality()

        // add an if statement here to see if there is a tie - to show tie breaker

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

    function calculatePersonality() {

    }


};