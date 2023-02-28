# The Travel Personality Quiz - Testing

![Mock-up]()

#### **By Emma Hewson**
[Click here to view the live web application](https://emmahewson.github.io/mp2_travel_quiz/)

This is the testing documentation for my web application: The Travel Personality Quiz.

[Full README available here](README.md).


## Table of Contents

1. [Section Name](#)
    * [Sub-Section Name](#)
        * [Sub-Section Name](#)

- - -
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

    I made a number of attempts to re-write the code in a way that declared the function outside of the loop, however each attempt caused a different console error and the app failed to work, with the tie breaker click event not working and the results not being calculated. I therefore decided to leave the code as it was, based on the fact that it was a warning that came down to the readability of the code, I would like to be able to make my code more readable in the future, but as this is my first project using JavaScript I didn't have the knowledge or experience to solve this warning in this case.


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

#### **Errors**

There were 2 warnings, some occurring on multiple elements:

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
* Fix: Changed recommended country name to a heading, but left the question & tie-breaker as `<p>` elements as this made more sense semantically and these were warnings rather than errors with the tool guessing what it thought was a heading.


#### **Wave Web Accessibility Results Post-Fix**

<details><summary>Wave Web Accessibility Final Results</summary>
<img src="docs/testing/testing_waveval_final.jpeg">
</details>


- - -

### Performance

I ran the site through Google Chrome Dev Tools' Lighthouse to check on its performance.

#### **Original Results**
<details><summary>Title</summary>
<img src="">
</details>

Amendments

#### **Final Results**
<details><summary>Title</summary>
<img src="">
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

<details><summary>User Story 1</summary>
<img src="">
</details>

<details><summary>User Story 2</summary>
<img src="">
</details>

<details><summary>User Story 3</summary>
<img src="">
</details>

<details><summary>User Story 4</summary>
<img src="">
</details>

<details><summary>User Story 5</summary>
<img src="">
</details>

- - -
### Full Testing

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

The site was tested on the following browsers
* Google Chrome
* Mozilla Firefox
* Apple Safari

**Bugs found - specific to browser testing:** REMOVE IF NONE!!

- - -
### Testing Results Table

**Every Page / Section**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Whole Page | Layout is fully responsive |  |  |  |
| Main Page Contents | Background gradient, logo, footer & footer contents appear correctly and remain visible througout game |  |  |  |
| Favicon | Appears in browser tab |  |  |  |
| Footer Image | Image changes on smallest devices |  |  |  |
| Footer Social Links | Hover Effect with transition on hover |  |  |  |
| Footer Social Links | Open correct pages in separate tab |  |  |  |
| Console | No errors appear in console throughout game |  |  |  |

**Welcome Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Welcome Div Contents | Text, name input & start game button appear correctly |  |  |  |
| Welcome Section | Loads on page refresh - no other parts of game visible |  |  |  |
| Name Input | Allows user to input name |  |  |  |
| Name Input | User must enter name between 2-10 characters |  |  |  |
| Start Quiz Button | Hover effect with transition on hover |  |  |  |
| Start Quiz Button | If no name inputted alert appears & game doesn't start |  |  |  |
| Start Quiz Button | Starts Quiz (hides welcome div and reveals game div) |  |  |  |

**Game Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Game Div Contents | Progress text, progress bar, question text, 6x answer boxes with text contents & restart quiz button appear correctly  |  |  |  |
| Question & Answers | Correct question and answers load each time an answer is selected |  |  |  |
| Question & Answers | 10 questions & sets of answers appear in total |  |  |  |
| Answer Boxes | Hover Effect with transition on hover |  |  |  |
| Answer Boxes | Colour changes to orange with transition when user selects an answer |  |  |  |
| Answer Boxes | Brief timeout before question / answers refresh |  |  |  |
| Answer Boxes | User cannot select another answer once a selection has been made during timeout |  |  |  |
| Answer Boxes | Colour of previously selected box changes back to original colour after question/answer refresh |  |  |  |
| Answer Boxes | Page scrolls to top on question/answer refresh |  |  |  |
| Progress Bar | Shows "Question 1 of 10" on inital load & pink bar at 10% |  |  |  |
| Progress Bar | Increments each time a question is selected with the correct numbers & bar width |  |  |  |
| Quiz functionality | Correct personality type is added to personalityTally array when user selects an answer |  |  |  |
| Quiz functionality | personalityArray contains 10 personality types once main quiz is complete |  |  |  |
| Tie Breaker | If there is a tied result tie breaker appears & main game is hidden |  |  |  |
| Tie Breaker | Tie breaker title and text appear if result is tied |  |  |  |
| Tie Breaker | Tie breaker only contains images of the tied personality types |  |  |  |
| Tie Breaker Photos | Hover Effect with transition on hover |  |  |  |
| Restart Quiz Button | Hover effect with transition on hover |  |  |  |
| Restart Quiz Button | Refreshes page, hides game div and reveals welcome div, resets all scores |  |  |  |


**Results Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Personality Results Contents | Personality heading, pie chart, colour key, percentages & description appear correctly |  |  |  |
| Personality heading | Contains name inputted by user |  |  |  |
| Personality heading | Contains correct personality type |  |  |  |
| Pie chart | Pie sections & colours match key |  |  |  |
| Pie chart | Results are correct based on user answers in game |  |  |  |
| Pie chart | All personality types are listed in descending order |  |  |  |
| Pie chart | Percentages total 100 |  |  |  |
| Personality Description | Matches winning personality type |  |  |  |
| Personality Description | 3rd paragraph contains reference to 2nd and 3rd place personalities if over 15% |  |  |  |
| Recommended Country Contents | Country recommendation heading, photo & description appear correctly |  |  |  |
| Recommended Country | All contents recommend the correct country based on user answers |  |  |  |
| Recommended Country Heading | Contains recommended country |  |  |  |
| Recommended Country Image | Appears and matches the recommended country |  |  |  |
| Recommended Country Text | Appears and matches the recommended country |  |  |  |
| Country Highlights Contents | Highlights heading, map & map markers appear correctly |  |  |  |
| Country Highlights Heading | Contains the correct country name |  |  |  |
| Country Map | Calls the API correctly with no errors |  |  |  |
| Country Map | Shows the correct country |  |  |  |
| Country Map | Whole country and all markers are visible |  |  |  |
| Country Map | Google Maps inbuilt functionality works (map/satellite, full screen, street view, zoom, pan & scroll on touchscreen devices) |  |  |  |
| Map Markers | Markers are clickable |  |  |  |
| Map Markers | Clicking on a marker reveals the correct highlight information below including text and images |  |  |  |
| Highlight Info | Page scrolls down smoothly to show all highlight info |  |  |  |
| Highlight Info | Replaced when clicking on a different marker |  |  |  |
| Start Again Button & Text | Appear above footer |  |  |  |
| Start Again Button | Hover effect with transition on hover |  |  |  |
| Start Again Button | Refreshes page, hides results div and reveals welcome div, resets all scores |  |  |  |

**404 Page**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 404 page contents | Heading, text & 'go home' button appear correctly |  |  |  |
| Go Home Button | Hover effect with transition on hover |  |  |  |
| Go Home Button | Refreshes page, hides results div and reveals welcome div, resets all scores |  |  |  |



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

<img src="">

*Before*

<img src="">

*After*

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

<img src="">

*Before*

<img src="">

*After*

</details>

- - -
#### **3: Website not scrolling to top on reload & button click**

The website failed to scroll to the top when clicking on a button, this caused particular problems on mobile where less of the game was visible at once. I overcame this issue with the following techniques:

* Adding `<script>history.scrollRestoration = "manual"</script>` to the head element of the HTML file to turn off the automatic browser scroll settings.
* Adding `window.scrollTo({ top: 0, behavior: 'smooth' })` to the button clicks with a timeout to match the timeout on the button deselection.

<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>

- - -
#### **4: Mobile input zoom-in not resetting**

During testing on mobile, when selecting the name input box, the browser would zoom in make the box bigger. This was due to the input box having text smaller than 16px. However upon input the browser wasn't zooming out again. I fixed this by adding the following to the viewport data in the head element of the HTML code: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">.
I wanted to make sure that accessibility wasn't affected by over-riding the zoom so I also increased the size of the name input box and start button.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>

- - -
#### **5: Button colour on mobile**

I found that the button text colour on mobile was set to blue rather than black, presumably as a result of this being a clickable button. I fixed this by explicitly setting the color of the button text in the CSS.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>

- - -
#### **6: Google Maps API - Console Errors**

On page load Dev Tool's console was logging a series of errors relating to Google Maps API.

**Error 1**
<details><summary>Screenshots</summary>

<img src="">

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

<img src="">

</details>

This error was due to the initMap function not being fed an index value from the countries array as it hadn't been calculated yet. I overcame this using an if statement at the start of the initMap function that checked if the parameter was undefined (ie it hadn't been given a value yet) and if so it gave it the value of 0 to load the first country in the countries array. This got rid of the console error.
I found and adapted this solution from [here](https://www.javascripttutorial.net/es6/javascript-default-parameters/#:~:text=Setting%20JavaScript%20default%20parameters%20for,the%20default%20values%20of%20undefined%20.). (Credited in code comments.)


**Error 3**
<details><summary>Screenshots</summary>

<img src="">

</details>

Upon load the Google Maps API was causing a number of warnings on the Dev Tools console relating to non-passive event handlers. I researched what was causing this and it appeared to be within the code of the Google Maps API and Google Chrome's Dev Tools being sensitive to non-passive event listeners. The JavaScript written within the API wasn't something I could access in order to make the event handlers passive. I was unable to find a solution to these warnings despite extensive searching online and using Code Institute's tutor support.
More information [here](https://stackoverflow.com/questions/47799388/javascript-google-maps-api-non-passive-event-handlers)


- - -
#### **7: Console Errors with Chart.js**

On page load Dev Tool's console was logging an error and failing to load the pie chart.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>

I found the solution to this [here](https://www.youtube.com/watch?v=ens3HK88h5E). It was happenning because the CDN link I was using to the chart.js library was out of date and I needed to update it to a more recent version - as in the code below.


```
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
```

- - -
#### **8: Button styling on mobile**

When testing on mobile I discovered that the button styling had changed compared to the main site and dev tools phone simulators.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

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



