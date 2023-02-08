// declaring consts for DOM elements
const startGameBtn = document.getElementById("start-game-btn");
const welcomeDiv = document.getElementById("welcome-div");
const gameDiv = document.getElementById("game-div");
const resultsDiv = document.getElementById("results-div");
const questionText = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("btn-choice"));
const tieChoices = Array.from(document.getElementsByClassName("btn-choice-tie"));
const progressDiv = document.getElementById("progress-div");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progressbar-fg");
const restartGameBtn = document.getElementById("restart-game-btn");
const startAgainBtn = document.getElementById("start-again-btn");
const answerDiv = document.getElementById("answer-div-hide");
const answerTieDiv = document.getElementById("answer-tie-div-hide");

// declaring other variables
let maxQuestions = 10;
let username;
let personalityTally = [];

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
                    logPersonalities(choice);
                    // Sets short timeout before question refresh
                    setTimeout(function () {
                        // remove current question from array and replace with next question or go to results
                        if (questions.length <= 1) {
                            findTopPersonality();
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

    // logs personality type for each answer to an array (Helper function)
    function logPersonalities(choice) {
        // iterates through answers in questions_array
        questions[0].answers.forEach(answer => {
            // matches the selected answer to the same answer in the questions array
            if (choice.innerText === answer.answerText) {
                // adds the personality type to an array
                personalityTally.push(answer.answerType);
            };
        });

        // temp - adds tally text to site - TO BE REMOVED
        let tallyText = document.getElementById("personality-tally");
        tallyText.innerText = personalityTally;
    };

    function findTopPersonality() {

        let scoreArray = [];
        let topPersonalityArray = [];
        let topPersonality;

        // updates scores for each personality in array
        for (let i = 0; i < personalities.length; i++) {
            personalities[i].score = elementCount(personalityTally, personalities[i].type)
            scoreArray.push(personalities[i].score);
        };

        console.log("culture: " + personalities[0].score);
        console.log("food: " + personalities[1].score);
        console.log("people: " + personalities[2].score);
        console.log("remote: " + personalities[3].score);
        console.log("thrill: " + personalities[4].score);
        console.log("wildlife: " + personalities[5].score);
        console.log("score array: " + scoreArray);


        // calculate the results
        // calculate the maximum number of times any personality type appears
        let maxPersonalityScore = Math.max(...scoreArray);

        console.log("Maximum Score: " + maxPersonalityScore);

        // create an array of the winning personalities
        for (let i = 0; i < personalities.length; i++) {
            if (personalities[i].score === maxPersonalityScore) {
                topPersonalityArray.push(personalities[i].type);
            };
        };
        console.log("winning personality/personalities: " + topPersonalityArray);

        // check number of top score personalities ()
        // let numOfWinners = elementCount(topPersonalityArray, maxPersonalityScore);
        // console.log("Number of winning personalities: " + numOfWinners);

        // Works out if result is tied
        if (topPersonalityArray.length > 1) {

            //run tie breaker if more than 1 winner
            console.log("It's a tie!")

            // reveals the images for the tied results
            for (let i = 0; i < tieChoices.length; i++) {
                if (topPersonalityArray.includes(tieChoices[i].getAttribute("data-type"))) {
                    tieChoices[i].classList.remove("hidden");
                };
            };
            // hides the main questions div and reveals the tie-breaker div
            answerDiv.classList.add("hidden");
            progressDiv.classList.add("hidden");
            answerTieDiv.classList.remove("hidden");

            // sets the winning personality based on clicked image & reveals results
            for (let i = 0; i < tieChoices.length; i++) {
                tieChoices[i].addEventListener("click", function () {
                    let tieWinner = tieChoices[i].getAttribute("data-type");
                    personalityTally.push(tieWinner);
                    topPersonality = personalityTally[personalityTally.length - 1];
                    console.log("the winning post-tie personality is... " + topPersonality);
                    showResults(topPersonality);
                });
            }

        } else {
            // if not tied - sets the winning personality & reveals results
            topPersonality = topPersonalityArray;
            console.log("The winning personality is... " + topPersonality);
            showResults(topPersonality);
        };


        // helper function to filter arrays
        // function adapted from https://linuxhint.com/count-array-element-occurrences-in-javascript/#:~:text=To%20count%20element%20occurrences%20in,%E2%80%9Cfor%2Dof%E2%80%9D%20loop.
        function elementCount(arr, element) {
            return arr.filter((currentElement) => currentElement == element).length;
        };
    }


    // re-enable the buttons after question answered
    function enableButtons() {
        choices.forEach(choice => {
            choice.disabled = false;
        });
    }


    // Goes to results page
    function showResults(topPersonality) {
        gameDiv.classList.toggle("hidden");
        resultsDiv.classList.toggle("hidden");
        console.log("The winning personality on the results page is... " + topPersonality);

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
