// declaring consts for Welcome Page DOM Objects
const startGameBtn = document.getElementById("start-game-btn");
const welcomeDiv = document.getElementById("welcome-div");

// declaring consts for Game DOM Objects
const gameDiv = document.getElementById("game-div");
const questionText = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("btn-choice"));
const tieChoices = Array.from(document.getElementsByClassName("btn-choice-tie"));
const progressDiv = document.getElementById("progress-div");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progressbar-fg");
const restartGameBtn = document.getElementById("restart-game-btn");
const answerDiv = document.getElementById("answer-div-hide");
const answerTieDiv = document.getElementById("answer-tie-div-hide");

// declaring consts for Results DOM Objects
const resultsDiv = document.getElementById("results-div");
const personalityHeading = document.getElementById("personality-heading");
const personalityTextP1 = document.getElementById("personality-text-p1");
const personalityTextP2 = document.getElementById("personality-text-p2");
const secondCountry = document.getElementById("second-country");
const thirdCountry = document.getElementById("third-country");
const pieColorKey = Array.from(document.getElementsByClassName("stat-key"));
const pieTypesText = Array.from(document.getElementsByClassName("stat-type"));
const piePercentages = Array.from(document.getElementsByClassName("stat-percent"));
const resultsCountry = document.getElementById("country-heading-place");
const resultsImage = document.getElementById("results-image");
const resultsText = document.getElementById("country-text");
const highlightCountryName = document.getElementById("highlight-country-name");
const startAgainBtn = document.getElementById("start-again-btn");

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





// Start Game Button - controls all game functionality
function startGame(event) {
    event.preventDefault();

    // capturing user name
    username = document.getElementById("name-input");

    // alert if no username entered
    if (username.value === "") {
        alert(`Please enter your name to play, real or imaginary!`)

        // game play functionality
    } else {
        console.log("My name is " + username.value + " and I'm starting the game!"); // remove?
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

        // set progress bar
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
                        // remove current question from array and replace with next question or calculate results if game ended
                        if (questions.length <= 1) {
                            findTopPersonality();
                        } else {
                            questions.splice(0, 1);
                            addQuestionContent(0);
                            choice.classList.remove("selected");
                            enableButtons();
                        }
                    }, 500);
                } else {
                    // disable other buttons during timeout (prevent logging duplicate results)
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

        // REMOVE THIS BIT!!!
        // temp - adds tally text to site - TO BE REMOVED
        // let tallyText = document.getElementById("personality-tally");
        // tallyText.innerText = personalityTally;
    };


    // Calculates user personality
    function findTopPersonality() {

        let scoreArray = [];
        let topPersonalityArray = [];
        let topPersonality;

        // updates personality scores in personalities_array
        for (let i = 0; i < personalities.length; i++) {
            personalities[i].score = elementCount(personalityTally, personalities[i].type)
            scoreArray.push(personalities[i].score);
        };

        console.log("culture: " + personalities[0].score); // REMOVE ONCE FINISHED
        console.log("food: " + personalities[1].score);
        console.log("people: " + personalities[2].score);
        console.log("remote: " + personalities[3].score);
        console.log("thrill: " + personalities[4].score);
        console.log("wildlife: " + personalities[5].score);
        console.log("score array: " + scoreArray);

        // calculate the results
        // calculate the maximum number of times any personality type appears
        let maxPersonalityScore = Math.max(...scoreArray);
        console.log("Maximum Score: " + maxPersonalityScore); // REMOVE ONCE FINISHED

        // create an array of the winning personalities
        for (let i = 0; i < personalities.length; i++) {
            if (personalities[i].score === maxPersonalityScore) {
                topPersonalityArray.push(personalities[i].type);
            };
        };
        console.log("winning personality/personalities: " + topPersonalityArray); // REMOVE ONCE FINISHED


        // Checks for a tie
        if (topPersonalityArray.length > 1) {

            //run tie breaker if more than 1 winner
            console.log("It's a tie!") // REMOVE ONCE FINISHED
            // reveals photos for tied personalities
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

                    // updates scores again post tie-break selection
                    for (let i = 0; i < personalities.length; i++) {
                        personalities[i].score = elementCount(personalityTally, personalities[i].type)
                        scoreArray.push(personalities[i].score);
                    };

                    console.log("post tie culture: " + personalities[0].score); // REMOVE ONCE FINISHED
                    console.log("post tie food: " + personalities[1].score);
                    console.log("post tie people: " + personalities[2].score);
                    console.log("post tie remote: " + personalities[3].score);
                    console.log("post tie thrill: " + personalities[4].score);
                    console.log("post tie wildlife: " + personalities[5].score);
                    console.log("the winning post-tie personality is... " + topPersonality);

                    // Reveals results
                    chooseCountry();
                    showResults(topPersonality);
                });
            }

        } else {
            // if not tied - sets the winning personality & reveals results
            topPersonality = topPersonalityArray[0];
            console.log("No Tie The winning personality is... " + topPersonality);
            chooseCountry();
            showResults(topPersonality);
        };

        // calculates winning country based on each personality choice
        function chooseCountry() {
            for (let i = 0; i < personalityTally.length; i++) {
                switch (personalityTally[i]) {
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
                }
            }
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

    // Reveal Results
    function showResults(topPersonality) {

        // hide game div & reveal results divs
        gameDiv.classList.toggle("hidden");
        resultsDiv.classList.toggle("hidden");

        // Populates personality results on page based on winning personality
        for (let i = 0; i < personalities.length; i++) {
            if (personalities[i].type === topPersonality) {
                personalityHeading.innerText = `${username.value}, YOU ARE ${personalities[i].prefix}... ${personalities[i].name}`
                personalityTextP1.innerText = personalities[i].text[0];
                personalityTextP2.innerText = personalities[i].text[1];
            };
        };


        // Update data & pie chart

        // sort personalities by score
        function compareScores(a, b) {
            return a.score - b.score
        };
        let sortedPersonalities = personalities.sort(compareScores);
        // reverse order of sorted personalities
        let reverseSortedPersonalities = sortedPersonalities.reverse();

        // calculate sum of all scores
        let scoresTotal = 0;
        for (let i = 0; i < sortedPersonalities.length; i++) {
            scoresTotal += sortedPersonalities[i].score;
        };
        console.log("The total of the scores is... " + scoresTotal); // REMOVE ONCE FINISHED

        // calculate percentages for each personality
        // adds them to an array & works out sum of all % (to manage rounding issues)
        let percentageArray = [];
        let percentagesTotal = 0;
        for (let i = 0; i < reverseSortedPersonalities.length; i++) {
            percentageArray.push(calcPercent(reverseSortedPersonalities[i].score, scoresTotal));
            percentagesTotal += calcPercent(reverseSortedPersonalities[i].score, scoresTotal);
        };

        // helper function - calculate percentage
        function calcPercent(score, total) {
            return Math.floor((score / total) * 100);
        }

        // If scores add up to 100% add difference to top score
        let percentDifference = 100 - percentagesTotal;

        console.log("All the percentages added together are... " + percentagesTotal + "%"); // REMOVE ONCE FINISHED
        console.log("The original percentage array is..." + percentageArray);
        console.log("The total percentage is less than 100% by... " + percentDifference);

        if (percentDifference !== 0) {
            percentageArray[0] += percentDifference;
        }

        console.log("The amended percentage array is..." + percentageArray); // REMOVE ONCE FINISHED

        // populate statistics & create color array for piechart
        let keyColors = [];
        let pieLabels = [];

        for (let i = 0; i < reverseSortedPersonalities.length; i++) {
            pieColorKey[i].classList.add(reverseSortedPersonalities[i].color);
            pieTypesText[i].innerText = reverseSortedPersonalities[i].name;
            piePercentages[i].innerText = `: ${percentageArray[i]}%`;
            keyColors.push(reverseSortedPersonalities[i].colorCode);
            pieLabels.push((reverseSortedPersonalities[i].name));
        };

        // Populates the 2nd and 3rd place countries in the personality description
        secondCountry.innerText = reverseSortedPersonalities[1].name;
        thirdCountry.innerText = reverseSortedPersonalities[2].name;
        
        console.log("Personality Tally - end of everything" + personalityTally) // REMOVE ONCE FINISHED
        // build piechart

        // uses chart.js library https://www.chartjs.org/
        var xValues = pieLabels;
        var yValues = percentageArray;
        var barColors = keyColors;

        new Chart("myChart", {
            type: "pie",
            data: {
                labels: pieLabels,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        boxPadding: 5,
                        backgroundColor: 'rgba(17, 66, 92, 0.9)',
                        titleFont: 'Raleway, sans-serif',
                        /** Tooltip popup formatting callback taken from
                         * https://stackoverflow.com/questions/46317867/how-to-append-text-or-symbol-to-tooltip-of-chart-js
                         * https://stackoverflow.com/questions/44632529/how-do-you-hide-the-title-of-a-chart-tooltip
                         */
                        callbacks: {
                            title: () => null,
                            label: function (context) {
                                return context.label + ': ' + context.formattedValue + '%';
                            }
                        }
                    }
                }
            }

        });

        // populates the country results
        //calculates the index of the highest score (Matches index of country in countries array)
        let topCountryIndex = userTotal.indexOf(Math.max(...userTotal));
        resultsCountry.innerText = `${countries[topCountryIndex].name}!`;
        resultsImage.src = `assets/images/${countries[topCountryIndex].image}`;
        resultsText.innerText = countries[topCountryIndex].text;
        highlightCountryName.innerText = countries[topCountryIndex].name;

        initMap(topCountryIndex);


        console.log("The winning personality on the results page is... " + topPersonality); // REMOVE ONCE FINISHED

    }


};