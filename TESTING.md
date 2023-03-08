# The Travel Personality Quiz - Testing

![Mock-up](docs/mockups/mockup_1_main_v2.jpeg)

#### **By Emma Hewson**
[Click here to view the live web application](https://emmahewson.github.io/mp2_travel_quiz/)

This is the testing documentation for my web application: The Travel Personality Quiz.

[Full README available here](README.md)


## Table of Contents

1. [Introduction](#introduction)
2. [Automated Testing](#automated-testing)
    * [HTML Validation](#html-validation)
    * [CSS Validation](#css-validation)
    * [JavaScript Validation](#javascript-validation)
    * [Accessibility](#accessibility)
    * [Performance](#performance)
3. [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Feature Testing](#feature-testing)
        * [Responsiveness / Device Testing](#responsiveness--device-testing)
        * [Browser Compatibility](#browser-compatibility)
        * [Feature Testing Results Table](#feature-testing-results-table)
4. [Bugs & Fixes](#bugs--fixes)

- - -

## Introduction

In my testing I developed a comprehensive testing plan to make sure that the site was functioning correctly. I used predominantly manual testing, I did investigate the option of automated testing and ran a few trial tests at the end of the development process as part of my own learning and personal development, but due to the way I had written the JavaScript and the resulting complexity of the automated testing I would need to write I felt that it was not necessary for this application as it was a fairly simple app that would be better served by in depth manual testing.

My manual testing involved going through the game and manually checking if answers and results matched what would be expected. However I have included details of basic automated testing that I undertook which included validation for HTML & CSS and checking the site for accessibilty and performance. The site was tested throughout the process, both in the development and deployed version of the sites. All the test results detailed below are based on the [deployed site](https://emmahewson.github.io/mp2_travel_quiz/). 

## Automated Testing

### HTML Validation

I ran the code for all the pages through the [W3C HTML Validator](https://validator.w3.org/nu/).

#### **Errors**

There were 5 errors, some occurring on multiple elements:

<details><summary>Error 1</summary>
<img src="docs/testing/testing_htmlval1.jpeg">
</details>

* An empty "action" attribute on the form
* Fix: remove the action attribute

<details><summary>Error 2</summary>
<img src="docs/testing/testing_htmlval2.jpeg">
</details>

* A stray `</input>` end tag
* Fix: remove the tag

<details><summary>Error 3</summary>
<img src="docs/testing/testing_htmlval3.jpeg">
</details>

* An error relating to the "role" attribute on the tie-break buttons images (based on a method to improve accessibility for background images that I researched online)
* Fix: remove role attribute

<details><summary>Error 4</summary>
<img src="docs/testing/testing_htmlval4.jpeg">
</details>

* An empty "src" attribute on the highlight images (which would be populated by the JavaScript)
* Fix: Give the src a value of one of the highlight images as a placeholder (removing the src entirely throws up a different error)

<details><summary>Error 5</summary>
<img src="docs/testing/testing_htmlval5.jpeg">
</details>

* On the 404 page the `<button>` element was a descendant of an `<a>` element
* Fix: change the `<button>` to an `<a>` element



#### **HTML Validation Post-Fix**

<details><summary>HTML Validation Final Results - index.html</summary>
<img src="docs/testing/testing_htmlval_final1.jpeg">
</details>

<details><summary>HTML Validation Final Results - 404.html</summary>
<img src="docs/testing/testing_htmlval_final2.jpeg">
</details>

- - -

### CSS Validation

I ran the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 

#### **Errors**
<details><summary>CSS Validation Initial Results</summary>
<img src="docs/testing/testing_cssval1.jpeg">
</details>

There were 2 errors:

Error 1: Mis-spelling of 'absolute'
* Fix: remove position value (not doing anything)

Error 2: incorrect aspect ratio value
* Fix: remove aspect ratio (not doing anything)


#### **CSS Validation Post-Fix**

<details><summary>CSS Validation Final Results</summary>
<img src="docs/testing/testing_cssval2.jpeg">
</details>

- - -

### JavaScript Validation

I ran the JavaScript code through [JSHint](https://jshint.com/). 

There were no errors but there were a number of warnings which can be groups as follows:

<details><summary>Warning 1: Missing or unnecessary semi-colons</summary>
<img src="docs/testing/testing_jsval1.jpeg">
</details>

* Fix: remove or add semi-colons as appropriate


<details><summary>Warning 2: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.</summary>
<img src="docs/testing/testing_jsval2.jpeg">
<img src="docs/testing/testing_jsval3.jpeg">
</details>

* Fix: I did extensive investigation about these warnings, it seems to relate to the way I've written the function within the loop which could made the code difficult to read. There were 2 incidences of this within the code.
    1. One of them was within the Google Map API recommended syntax, I therefore left this function within the loop as this was what had been recommended by Google for use with their API.
    ```
    //Attach click event to the marker & populate page with data
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                highlightTitle.innerText = this.title;
                highlightText.innerText = this.text;
                imageOne.src = `assets/images/countries/highlights/${this.images[0].img}`;
                imageOne.alt = this.images[0].alt;
                imageTwo.src = `assets/images/countries/highlights/${this.images[1].img}`;
                imageTwo.alt = this.images[1].alt;
                imageThree.src = `assets/images/countries/highlights/${this.images[2].img}`;
                imageThree.alt = this.images[2].alt;
                imageFour.src = `assets/images/countries/highlights/${this.images[3].img}`;
                imageFour.alt = this.images[3].alt;
                highlightInfoDiv.classList.remove("hidden");
                // timeout to allow photos to load before scroll
                setTimeout(function () {
                    countryHighlightDiv.scrollIntoView(false, {
                        behavior: 'smooth'
                    });
                }, 150);

            });
        })(marker, data);
    ```
    2. The other place that this warning occured was in the tie breaker, where I had declared an anonymous function within a loop.
    ```
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

                    // Reveals results
                    chooseCountry();
                    showResults(topPersonality);
                });
            }

    ```

    I made a number of attempts to re-write the code in a way that declared the function outside of the loop, however each attempt caused a different console error and the app failed to work, with the tie breaker click event not working and the results not being calculated. I therefore decided to leave the code as it was, based on the fact that it was a warning that came down to the readability of the code, though learning from this for future JavaScript projects to avoid these warnings.


<details><summary>Warning 3: Do not use "new" for side effects</summary>
<img src="docs/testing/testing_jsval4.jpeg">
</details>

* Fix: This warning related to the Chart.js code. I had used the syntax and code suggested by Chart.js, but JSHint threw up a warning about using new with an undeclared variable. After researching online I found a solution [here](https://stackoverflow.com/questions/33287045/eslint-suppress-do-not-use-new-for-side-effects) and made the warning disappear by adding a new variable and storing the chart within that. However this then threw up a different warning about an unused variable (chart). I decided as this was a warning rather than an error to leave the code as it was as it had been taken directly from the chart.js documentation and was working correctly.
    ```
    // build piechart
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
    ```


<details><summary>Warning 4: Undefined Variables in Google Maps API and Chart.js</summary>
<img src="docs/testing/testing_jsval5.jpeg">
</details>

* Fix: This error related to variables declared elsewhere in the JavaScript code within Google Maps API and Chart.js. JSHint was unable to access this code to see the original variable declaration so threw up a warning, but, upon investigation, I found that this was only an issue relating to what information JSHint could access as I had followed good practice proceedures for both external JavaScript files as suggested in their documentation.
    ```
        // 'Chart' is defined in the external chart.js files
        // new Chart
        new Chart("myChart", {...
    ```
    ```
        // from map.js - parts that refer to 'google' which is defined in the external Google Maps API js files.
        // new map
        const map = new google.maps.Map(document.getElementById("map"), {

        // setting the map location
        let myLatlng = new google.maps.LatLng(data.lat, data.lng);

        // setting the map markers
        let marker = new google.maps.Marker({

        // adding the click event to the markers
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {...
    ```


<details><summary>Warning 5: Undeclared/Unused Variables</summary>
<img src="docs/testing/testing_jsval6.jpeg">
</details>

* Fix: remove undeclared variables where appropriate. One of these warnings was due to the function being called in index.html to handle the form submission for the username. This was shown to us as good practice for handling form submission by Code Institute so I left it as it was (see code snippet below).
    ```
    // In index.html
    <form id="start-form" method="POST" onsubmit="startGame(event)">

    // in quiz.js
    function startGame(event) {
    ```


#### **JavaScript Validation Post-Fix**

<details><summary>JavaScript Validation Final Results</summary>
<img src="docs/testing/testing_jsval_final.jpeg">
</details>


- - -

### Accessibility

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). 

#### **Accessibility Errors**

On index.html there were 2 warnings, some occurring on multiple elements:

<details><summary>Warning 1</summary>
<img src="docs/testing/testing_waveval1.jpeg">
</details>

* Missing heading level
* Fix: change `<h3>`to `<h2>`

<details><summary>Warning 2</summary>
<img src="docs/testing/testing_waveval2.jpeg">
<img src="docs/testing/testing_waveval3.jpeg">
</details>

* Possible headings x3
* Fix: Changed all recommended elements to heading elements, changing the CSS styling accordingly.

There were no errors or warnings on 404.html.

#### **Wave Web Accessibility Results Post-Fix**

<details><summary>Wave Web Accessibility Final Results - index.html</summary>
<img src="docs/testing/testing_waveval_final.jpeg">
</details>

<details><summary>Wave Web Accessibility Final Results - 404.html</summary>
<img src="docs/testing/testing_waveval_final2.jpeg">
</details>


#### **Additional Accessibility Improvements**

When tidying up the project in the final stages before submission I removed placeholders which I'd used in some of the HTML elements (e.g. headings, buttons, images, alt-values). These were elements that would later be populated based on user answers, e.g. the image of the winning country, or text about the user's personality. However, as a precaution I ran an additional accessibility test before submission to check the code. It threw up errors about empty elements and empty alt-values. I therefore decided to reinstate some basic placeholder content to the site to avoid these errors.

<details><summary>Test results - after removing placeholder data</summary>
<img src="docs/testing/testing_waveval4.jpeg">
</details>
<details><summary>Test results - after reinstating placeholder data</summary>
<img src="docs/testing/testing_waveval5.jpeg">
</details>


- - -

### Performance

I ran the site through Google Chrome Dev Tools' Lighthouse to check on its performance.

#### **Original Results**
<details><summary>Main Page</summary>
<img src="docs/testing/testing_lh_main_desktop.jpeg">

*Main Page - Desktop*

<img src="docs/testing/testing_lh_main_mobile1.jpeg">

*Main Page - Mobile*

<img src="docs/testing/testing_lh_main_mobile2.jpeg">

*Main Page - Mobile - Accessibility Warning*

</details>

<details><summary>404</summary>
<img src="docs/testing/testing_lh_404_desktop.jpeg">

*404 - Desktop*

<img src="docs/testing/testing_lh_404_mobile1.jpeg">

*404 - Mobile*

<img src="docs/testing/testing_lh_404_mobile2.jpeg">

*404 - Mobile - SEO Warning*

</details>

There were 2 issues of concern: 

1. The accessibilty score was being affected by the maximum scale attribute that I had added to the meta tag in the HTML to stop mobile browsers automatically zooming in on the input field where the user enters their name, which would then not reset when the game appeared, leaving the web page slightly zoomed in, which created a bad user experience. [See bugs section below](#4-mobile-input-zoom-in-not-resetting).
I had not considered the impact on accessibility, that not allowing users to zoom in might cause issues for those with visual impairment so in order to overcome this I did some research and discovered that mobile web browsers tend to only zoom in if the font size on an input is less than 16px. So I removed the maximum scale attribute and simply changed the size of the placeholder & user-inputted text to 16px.

2. On the 404 page the SEO score was being affected by the size of the social link icons, they needed to be bigger to be easy to click on a mobile device, though this warning didn't come up on the main page. Upon investigation I realised I had made changes to the footer on the main page and not on the 404 page, so the icons were displaying differently with less space between them. I fixed this code by replacing the footer on the 404 page with the correct one and this fixed the warning.


#### **Final Results**
<details><summary>Main Page</summary>
<img src="docs/testing/testing_lh_main_desktop_final.jpeg">

*Main Page - Desktop*

<img src="docs/testing/testing_lh_main_mobile_final.jpeg">

*Main Page - Mobile*

</details>

<details><summary>404</summary>
<img src="docs/testing/testing_lh_404_desktop_final.jpeg">

*404 - Desktop*

<img src="docs/testing/testing_lh_404_mobile_final.jpeg">

*404 - Mobile*

</details>

- - -
## Manual Testing
### Testing User Stories

I tested the site based on my user stories:

| No. | User Goal | How is it achieved? |
| :--- | :--- | :--- |
| 1 | I want to take part in a fun, online game to find out my travel personality and my ideal travel destination | The quiz is a fun, online game which gives people an insight in to their personality and recommends a destination. It has been designed to be highly personalised, makes real-world recommendations and has a light-hearted style to keep things fun. |
| 2 | I want to see information, images and a map of my recommended destination | The results section contains lots of information about the recommended destination, about the country in general as well as an interactive map from Google Maps API which can be clicked to find out about some of that country's top highlights. |
| 3 | I want to see a breakdown of my results to learn more about my personality | The personality results are detailed with a pie chart to make them visual as well as a colour key and percentage information. This also helps to explain to the user that the country recommendation is based on the full personality results and is therefore personalised to them. There is also text information about the personality type |
| 4 | I want to access the quiz on any device | The quiz has been designed to be fully responsive across desktop, tablet and mobile and extensively tested on each.|
| 5 | I want to navigate the site easily | The site has a linear navigation where you follow the quiz through and minimal clicks are required to submit answers. At all times there is a button to take you back to the beginning of the quiz.|

**Screen Recordings of User Stories**

<details><summary>User Story 1: I want to take part in a fun, online game to find out my travel personality and my ideal travel destination</summary>
<img src="docs/testing/testing_us1.gif">
</details>

<details><summary>User Story 2: I want to see information, images and a map of my recommended destination</summary>
<img src="docs/testing/testing_us2.gif">
</details>

<details><summary>User Story 3: I want to see a breakdown of my results to learn more about my personality</summary>
<img src="docs/testing/testing_us3.gif">
</details>

<details><summary>User Story 4: I want to access the quiz on any device</summary>
<img src="docs/testing/testing_us4_1.gif">
<img src="docs/testing/testing_us4_2.gif">
<img src="docs/testing/testing_us4_3.gif">
</details>

<details><summary>User Story 5: I want to navigate the site easily</summary>
<img src="docs/testing/testing_us5_1.gif">
<img src="docs/testing/testing_us5_2.gif">
<img src="docs/testing/testing_us5_3.gif">
</details>

- - -
### Feature Testing

#### **Responsiveness / Device Testing**

The site was tested on the following devices
* Apple Macbook Pro 16inch
* LG Ultrafine Display 27inch External Monitor
* Apple iMac 5K 27-inch
* Apple iPhone SE
* Apple iPhone 5S
* Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options

**Bugs found - specific to device testing:**
* [Google Map API on mobile & Safari - border-radius](#2-google-map-api-on-mobile--safari---border-radius)
* [Mobile input zoom-in not resetting](#4-mobile-input-zoom-in-not-resetting)
* [Button colour on mobile](#5-button-colour-on-mobile)
* [Button styling on mobile](#8-button-styling-on-mobile)


- - -
#### **Browser Compatibility**

The site was tested on the following browsers.
* Google Chrome
* Mozilla Firefox
* Apple Safari

**Bugs found - specific to browser testing:**
* [Console Error - Permissions Policy Header: on Chrome](#10-console-error-on-chrome-error-with-permissions-policy-header)


- - -
### Feature Testing Results Table

**Every Page / Section**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Whole Page | Layout is fully responsive | Checked all pages on various browsers and devices including Google Dev Tool device simulators | All elements were fully responsive on all devices tested | Pass |
| Main Page Contents | Background gradient, logo, footer & footer contents appear correctly and remain visible througout game | Checked on various browsers and devices throughout game | All content appeared as expected | Pass |
| Favicon | Appears in browser tab | Checked browser tabs in different browsers and devices | Favicon appeared as expected | Pass |
| Footer Image | Image changes on smallest devices | Check footer image using mobile device and with Dev Tools's inspect tool | Footer image changes to small version on small devices | Pass |
| Footer Social Links | Hover Effect with transition on hover | Hovered on icons | Hover colour change happens as expected | Pass |
| Footer Social Links | Open correct pages in separate tab | Clicked on social links | Links open correctly in separate tab | Pass |
| Console | No errors appear in console throughout game | Checked console in dev tools during game play | Console logged no errors. Warnings relating to Google Maps API did appear [more information here](#6-google-maps-api---console-errors) | Pass |

**Welcome Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Welcome Div Contents | Text, name input & start game button appear correctly | Loading page | All content appeared as expected | Pass |
| Welcome Section | Loads on page refresh - no other parts of game visible | Loading page | The correct divs load as expected | Pass |
| Name Input | Allows user to input name | Inputting name | User is able to input name | Pass |
| Name Input | User must enter name between 2-10 characters | Attempted to enter a name shorter than 2 & longer than 10 characters | Input box performs as expected ![Screen Recording](docs/testing/testing_features_welcome1.gif) | Pass |
| Start Quiz Button | Hover effect with transition on hover | Hovered on Start Quiz Button | Hover effect works as expected ![Screen Recording](docs/testing/testing_features_welcome2.gif) | Pass |
| Start Quiz Button | If no name inputted alert appears & game doesn't start | Clicked on start button with no name inputted | Alert pops up with message telling user to enter a name ![Screenshot](docs/testing/testing_features_welcome3.jpeg) | Pass |
| Start Quiz Button | Starts Quiz (hides welcome div and reveals game div) | Clicked on start game button (with username entered) | Game starts, welcome div disappears and game div appears | Pass |

**Game Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Game Div Contents | Progress text, progress bar, question text, 6x answer boxes with text contents & restart quiz button appear correctly  | Clicking start game button in Welcome Div | All content appeared as expected | Pass |
| Question & Answers | Correct question and answers load each time an answer is selected | Clicking through game and checking against questions and answers in questions array | All questions and answers appear as expected | Pass |
| Question & Answers | 10 questions & sets of answers appear in total | Clicking through game and counting questions | The correct number of questions appear | Pass |
| Answer Boxes | Hover Effect with transition on hover | Hovered on questions | Hover effect works as expected ![Screen Recording](docs/testing/testing_features_game1.gif) | Pass |
| Answer Boxes | Colour changes to orange with transition when user selects an answer | Clicked on answer | Answer box changes colour as expected ![Screen Recording](docs/testing/testing_features_game2.gif) | Pass |
| Answer Boxes | Brief timeout before question / answers refresh | Clicked on answer | Game pauses before refreshing (see gif above) | Pass |
| Answer Boxes | User cannot select another answer once a selection has been made during timeout | Clicked on an answer and attempted to select another quickly afterwards. Also checked console logs to if any additional answers were being added to the personalityTally array | Unable to select more than 1 answer during time out and nothing additional added to personalityTally | Pass |
| Answer Boxes | Colour of previously selected box changes back to original colour after question/answer refresh | Clicked on answer | Colour changes back on refresh as expected (see gif above) | Pass |
| Answer Boxes | Page scrolls to top on question/answer refresh | Using Dev Tool's device simulator scrolled down & clicked on answer | Page scrolls to top as expected ![Screen Recording](docs/testing/testing_features_game3.gif) | Pass |
| Progress Bar | Shows "Question 1 of 10" on inital load & pink bar at 10% | Loaded game and checked progress bar | Progress bar and text were correct (see gif below) | Pass |
| Progress Bar | Increments each time a question is selected with the correct numbers & bar width | Played game and checked progress bar | Progress bar increments correctly ![Screen Recording](docs/testing/testing_features_game4.gif) | Pass |
| Quiz functionality | Correct personality type is added to personalityTally array when user selects an answer | Log personalityTally to console for testing purposes and check it matches the selected answer | console logs match the selected answers ![Screen Recording](docs/testing/testing_features_game5.gif) | Pass |
| Quiz functionality | personalityTally contains 10 personality types once main quiz is complete | Log personalityTally to console for testing purposes and check number of items in array | code performs as expected (see gif above) | Pass |
| Tie Breaker | If there is a tied result tie breaker appears & main game is hidden | Selecting answers that will result in a tie | Tie breaker appears correctly | Pass |
| Tie Breaker | Tie breaker title and text appear if result is tied | Using console logs to check whether result is tied and matches what's in the personalityTally | Tie breaker only appears when the result is tied ![Screenshot](docs/testing/testing_features_game6.jpeg) | Pass |
| Tie Breaker | Tie breaker only contains images of the tied personality types | Using console logs to check which results are tied and by going through and selecting different combinations of answers that will result in a different number of tied results | The correct number of tie breaker images appear and match the number of tied results ![Screenshot](docs/testing/testing_features_game7.jpeg) | Pass |
| Tie Breaker Photos | Hover Effect with transition on hover | Hovered on tie breaker image | Hover effect worked as expected ![Screen Recording](docs/testing/testing_features_game8.gif) | Pass |
| Restart Quiz Button | Hover effect with transition on hover | Hovered on restart quiz button | Hover effect worked as expected ![Screen Recording](docs/testing/testing_features_game9.gif) | Pass |
| Restart Quiz Button | Refreshes page, hides game div and reveals welcome div, resets all scores | Clicked on restart quiz button during game play | Restart Quiz button works as expected | Pass |


**Results Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Personality Results Contents | Personality heading, pie chart, colour key, percentages & description appear correctly | Clicking on the final question | All content appeared as expected | Pass |
| Personality heading | Contains name inputted by user | Inputting name and checking it appears in results | Name appears correctly ![Screenshot](docs/testing/testing_features_results1.jpeg)![Screenshot](docs/testing/testing_features_results2.jpeg) | Pass |
| Personality heading | Contains correct personality type | Using console logs to check the winning personality at different stages of the game and checking it matches | Personality type appears correctly and matches the console logs ![Screenshot](docs/testing/testing_features_results3.jpeg)![Screenshot](docs/testing/testing_features_results4.jpeg)![Screenshot](docs/testing/testing_features_results5.jpeg) | Pass |
| Pie chart | Pie sections & colours match key | Visually checking the colours match between the key and the pie chart | All colours and percentages match | Pass |
| Pie chart | Results are correct based on user answers in game | Using console logs to check the percentages and matching those with the pie and key | All numbers, personality types and colours match ![Screenshot](docs/testing/testing_features_results6.jpeg)![Screenshot](docs/testing/testing_features_results7.jpeg)|  |
| Pie chart | All personality types are listed in descending order | Checking that the percentages are in reverse order, largest to smallest | The personality types appear in the correct order | Pass |
| Pie chart | Percentages total 100 | Using console logs and testing the game with a tie break result (where the rounding issue occurs) and checking everything adds up | The percentages add up to 100 ![Screenshot](docs/testing/testing_features_results8.jpeg) | Pass |
| Pie chart | Pie chart is clickable, showing the percentages of each section | Click on sections of pie chart | Functions as expected and text matches key ![Screenshot](docs/testing/testing_features_results8b.gif) | Pass |
| Personality Description | Matches winning personality type | Using console logs to check the winning time at different stages of the code and matching it to what appears on the page | The correct personality description appears ![Screenshot](docs/testing/testing_features_results9.jpeg)![Screenshot](docs/testing/testing_features_results10.jpeg) | Pass |
| Personality Description | 3rd paragraph contains reference to 2nd and 3rd place personalities if over 15% | Matching the 2nd and 3rd place personalties to what appears in the text using the pie chart and console logs | The correct personalities appear in the 3rd paragraph ![Screenshot](docs/testing/testing_features_results11.jpeg) | Pass |
| Recommended Country Contents | Country recommendation heading, photo & description appear correctly | Scrolling down the results and checking the content | All content appears as expected | Pass |
| Recommended Country | All contents recommend the correct country based on user answers | Using console logs and matching the result of those to the page content | The correct country appears ![Screenshot](docs/testing/testing_features_results12.jpeg)![Screenshot](docs/testing/testing_features_results13.jpeg) | Pass |
| Recommended Country Heading | Contains recommended country | Check country name against correct country | The correct country appears ![Screenshot](docs/testing/testing_features_results14.jpeg) | Pass |
| Recommended Country Image | Appears and matches the recommended country | Check image is of the correct country | The correct country image appears ![Screenshot](docs/testing/testing_features_results15.jpeg) | Pass |
| Recommended Country Text | Appears and matches the recommended country | Check the description is of the correct country | The description is of the correct country ![Screenshot](docs/testing/testing_features_results16.jpeg) | Pass |
| Country Highlights Contents | Highlights heading, map & map markers appear correctly | Scroll down to highlight content and check it appears correctly | All highlight content is present and works correctly | Pass |
| Country Highlights Heading | Contains the correct country name | Check heading contains the correct country name | Heading contains the correct country name ![Screenshot](docs/testing/testing_features_results17.jpeg) | Pass |
| Country Map | Calls the API correctly with no errors | Check the map appears and there are no console errors | The map appears correctly, some console warnings appear but no errors [see bugs section](#6-google-maps-api---console-errors) | Pass |
| Country Map | Shows the correct country | Check the map matches the recommended country | Map is of the correct place ![Screenshot](docs/testing/testing_features_results18.jpeg) | Pass |
| Country Map | Country is at an appropriate zoom level for device and screen size and all markers are visible | Check the country appears neatly within the map box and all markers are visible on different devices with appropriate zoom level | The country fits neatly within the map and all markers are visible on different devices ![Screenshot](docs/testing/testing_features_results19.jpeg) ![Screenshot](docs/testing/testing_features_results20.jpeg) | Pass |
| Country Map | Google Maps inbuilt functionality works (map/satellite, full screen, street view, zoom, pan & scroll on touchscreen devices) |  | All in built map functionality works correctly ![Screen Recording](docs/testing/testing_features_results21.gif) | Pass |
| Map Markers | Markers are clickable | Clicking on all markers | All markers are clickable and function correctly ![Screen Recording](docs/testing/testing_features_results22.gif) | Pass |
| Map Markers | Clicking on a marker reveals the correct highlight information below including text and images | Clicking on each marker and checking the highlight text and photos appear and are correct | All highlights' text and images are correct (see gif above) | Pass |
| Highlight Info | Page scrolls down smoothly to show all highlight info | Clicking on a marker and checking the page scrolls smoothly to the correct place | Page scrolls correctly (see gif above) | Pass |
| Highlight Info | Replaced when clicking on a different marker | Clicking on a marker and checking the content is replaced | Content is replaced correctly (see gif above) | Pass |
| Start Again Button & Text | Appear above footer | Scroll down and checking content appears correctly | Button and text appear correctly | Pass |
| Start Again Button | Hover effect with transition on hover | Hovering over button | Button hover effect works correctly ![Screen Recording](docs/testing/testing_features_results23.gif) | Pass |
| Start Again Button | Refreshes page, hides results div and reveals welcome div | Clicking Start Again button and checking the page reloads back to the welcome page | The page reloads correctly back to the welcome div | Pass |

**404 Page**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 404 page contents | Heading, text & 'go home' button appear correctly | Load 404 page, check all content is correct | All content appears correctly | Pass |
| 404 page functionality | Typing in a non-existent URL will bring up 404 page | Typing in a non-existent url on website | 404 page appears | Pass |
| Go Home Button | Hover effect with transition on hover | Hovering over Go Home button | Button hover effect works correctly ![Screen Recording](docs/testing/testing_features_404_1.gif) | Pass |
| Go Home Button | Refreshes page, hides results div and reveals welcome div | Clicking on Go Home button | Welcome page loads ![Screen Recording](docs/testing/testing_features_404_2.gif) | Pass |



- - -
## Bugs & Fixes

During development and testing, in addition to the improvements described in the validation section above, I encountered the following bugs:
- - -
#### **1: Inset Shadow stopped click on map**

After adding an inset shadow on the map using a ::before element created in CSS I realised it had disabled any interaction with the map. After some research I discovered I needed to disable pointer events on the overlay and enable it on the map again in order to click through and interact with the map.

```
#map {
    pointer-events: all;
}

#map::before {
    pointer-events: none;
}
```

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug1_before.gif">
<img src="docs/bugs/bug1_after.gif">

*Before & After*

</details>

- - -
#### **2: Google Map API on mobile & Safari - border-radius**

After deploying the site to GitHub pages and viewing on mobile and in Safari the Google Maps API was not contained within the div's border radius rounded corners. After investigating the issue using Dev tools and searching online I worked out that the issue related to the way that Google Maps API builds the HTML for the map, it creates a series of divs enclosed in each other and on certain browsers the border radius and overflow were not translating down in to these divs. I tried targeting all descendent divs, however I ran in to an issue where the overflow:hidden caused the map to disappear completely. After trial and error I discovered I needed to target the 2nd level of div with the CSS styling and this solved the issue.

```
#map > div > div {
    overflow: hidden;
    border-radius: 24px;
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
    -o-border-radius: 24px;
}
```
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug2_before.jpeg">
<img src="docs/bugs/bug2_after.jpeg">

*Before & After*

</details>

- - -
#### **3: Website not scrolling to top on reload & button click**

The website failed to scroll to the top when clicking on a button, this caused particular problems on mobile where less of the game was visible at once. I overcame this issue with the following techniques:

* Adding `<script>history.scrollRestoration = "manual"</script>` to the head element of the HTML file to turn off the automatic browser scroll settings.
* Adding `window.scrollTo({ top: 0, behavior: 'smooth' })` to the button clicks with a timeout to match the timeout on the button deselection.

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug3_before.gif">
<img src="docs/bugs/bug3_after.gif">

*Before & After*

</details>

- - -
#### **4: Mobile input zoom-in not resetting**

During testing on mobile, when selecting the name input box, the browser would zoom in make the box bigger. This was due to the input box having text smaller than 16px. However upon input the browser wasn't zooming out again. I fixed this by adding the following to the viewport data in the head element of the HTML code: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">.
However, later on, in performance testing using Google's Dev Tools Lighthouse I discovered that setting the maximum scale like this affected accessibility. You can see details of how I worked around this issue [here](#performance).


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug4_before.gif">
<img src="docs/bugs/bug4_after.gif">

*Before & After*

</details>

- - -
#### **5: Button colour on mobile**

I found that the button text colour on mobile was set to blue rather than black, presumably as a result of this being a clickable button. I fixed this by explicitly setting the color of the button text in the CSS.


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug5_before.jpeg">
<img src="docs/bugs/bug5_after.jpeg">

*Before & After*

</details>

- - -
#### **6: Google Maps API - Console Errors**

On page load Dev Tool's console was logging a series of errors relating to Google Maps API.

**Error 1**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error1.jpeg">

</details>

This error was also stopping the map from loading. I fixed this by changing the order that the `<script>` files were called in the index.html file footer. The Google Maps API script had to be called after the map.js file containing the initmap function as in the code below.

**Index.html Footer - script files order**

```
    <script src="assets/js/questions_array.js"></script>
    <script src="assets/js/countries_array.js"></script>
    <script src="assets/js/personalities_array.js"></script>
    <script src="assets/js/map.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
    <script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBp3bbw0F5d1sjzp5iet_vlxKb0RrevMCA&callback=initMap"></script>
    <script src="assets/js/quiz.js"></script>
```

**Error 2**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error2.jpeg">

</details>

This error was due to the initMap function not being fed an index value from the countries array as it hadn't been calculated yet. I overcame this using an if statement at the start of the initMap function that checked if the parameter was undefined (ie it hadn't been given a value yet) and if so it gave it the value of 0 to load the first country in the countries array. This got rid of the console error.
I found and adapted this solution from [here](https://www.javascripttutorial.net/es6/javascript-default-parameters/#:~:text=Setting%20JavaScript%20default%20parameters%20for,the%20default%20values%20of%20undefined%20.). (Credited in code comments.)


**Error 3**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error3.jpeg">

</details>

Upon load the Google Maps API was causing a number of warnings on the Dev Tools console relating to non-passive event handlers. I researched what was causing this and it appeared to be within the code of the Google Maps API and Google Chrome's Dev Tools being sensitive to non-passive event listeners. The JavaScript written within the API wasn't something I could access in order to make the event handlers passive. I was unable to find a solution to these warnings despite extensive searching online and using Code Institute's tutor support.
More information [here](https://stackoverflow.com/questions/47799388/javascript-google-maps-api-non-passive-event-handlers)


- - -
#### **7: Console Errors with Chart.js**

On page load Dev Tool's console was logging an error and failing to load the pie chart.


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug7_error.jpeg">

</details>

I found the solution to this [here](https://www.youtube.com/watch?v=ens3HK88h5E). It was happenning because the CDN link I was using to the chart.js library was out of date and I needed to update it to a more recent version - as in the code below.


```
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
```

- - -
#### **8: Button styling on mobile**

When testing on mobile I discovered that the button styling had changed compared to the main site and dev tools phone simulators.


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug8_before.jpeg">
<img src="docs/bugs/bug8_after.jpeg">

*Before & After*

</details>

I found the solution to this was to add the following code to the CSS to over-ride the mobile device's built in styling that it adds to certain buttons and inputs. Whilst only one of the buttons was affected (the only one with a 'type' attribute defined, I decided to over-ride the styling for all the buttons incase there were any issues on other mobile devices elsewhere.)

```
.btn-game-main {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
}
```
- - -

#### **9: Country results can end in a tie**

In some circumstances 2 countries can have equal points and the site will automatically suggest whichever occurs first in the countries array. This is not so much a bug but a slight hole in the way that the quiz works. I did think about ways to overcome this but as the game already contains a tie-breaker I didn't want to add any more complexity to the project. I have mentioned this issue in the [README](README.md) as an area for future development of the app.


#### **10: Console Error on Chrome: Error with Permissions-Policy header**

<details><summary>Screenshot</summary>

<img src="docs/bugs/bug10.jpeg">

</details>

During browser testing in Google Chrome I found that the console was throwing up an error of "Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'." I found various references online and in the Code Institute Slack group to this being an issue relating to Google's new tracking method [FLoC](https://www.howtogeek.com/724441/what-is-googles-floc-and-how-will-it-track-you-online/) which is being blocked by GitHub Pages. All references I found to it suggested that it was a browser issue rather than an issue with the site itself and that it can be safely disregarded.


[GitHub Blog Article](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/)

[Stack Overflow Question](https://stackoverflow.com/questions/69619035/error-with-permissions-policy-header-unrecognized-feature-interest-cohort)




