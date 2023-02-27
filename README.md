# The Travel Personality Quiz

![Mock-up]()

#### **By Emma Hewson**
[Click here to view the live web application]()

This is the documentation for my web application: The Travel Personality Quiz. It has been built using HTML5, CSS3 & JavaScript for educational purposes as part of Code Institute’s Diploma in Web Application Development Course.


## Table of Contents

1. [Section Name](#)
    * [Sub-Section Name](#)
        * [Sub-Section Name](#)


## Project Development & Planning
Throughout the development of this game I followed the principles of User Experience (UX), including the 5 planes of Strategy, Scope, Structure, Skeleton & Surface. At all times I wanted to make sure that the website was easy to use, responsive, accessible and intuitive as well as meeting the goals and needs of the user and client.

### Project Goals

#### **Project Purpose**
A web-based quiz that allows users to learn more about their 'travel personality' and recommends a destination for them to visit based on their answers.

#### **Client Goals**
The quiz was built as a milestone project on my Diploma in Web Application Development with [Code Institute](https://codeinstitute.net/) as a learning tool for interactive frontend development and my first project using JavaScript and so didn't have a specific client.
However in order to make the end product more professional and to help with create a clear scope for the project I treated it as a real-world application which could be used by a travel agency or travel blogger, with a focus on more exotic or lesser known destinations. This client's goals would be:
* Engaging users with interactivity and a fun application on their site
* Allowing users to learn more about lesser-known destinations
* Helping users to choose where to go
* Helping users learn more about their travel personality

#### **User Goals**
The audience for this quiz would be people who are looking to travel or go on holiday but are unsure where to go. They perhaps want to experience more exotic destinations or want to go somewhere off the beaten track and wish to find a destination that would suit their personality and tastes.
User Goals:
* Learning more about themselves and their travel personality
* Having fun doing a short quiz
* Getting recommendations of where to go travelling or on holiday
* Learning more about a lesser-known destination that suits their travel personality


### Research

#### **Market Review**
I looked at a variety of online travel quizzes. Most were hosted by travel agencies or travel bloggers. I looked at the style and content of their questions and answers, how the results were presented, the design and style of the websites and how the quiz was structured. I also looked more broadly at personality tests. Some of the websites that I researched are below.

[Conde Nast Quiz](https://www.cntraveler.com/story/where-should-you-go-on-vacation-next) | [Jessie On A Journey](https://jessieonajourney.com/travel-personality-quiz/) | [Inspiring Travel](https://www.inspiringtravel.co.uk/other-shores/on-trend/holiday-destination-quiz/) | [British Airways](https://bahighlife.com/destinations/quiz-which-holiday-destination-is-right-for-you) | [Truity](https://www.truity.com/test/travel-personality-test) | [16 Personalities](https://www.16personalities.com)

#### **Key Takeaways from Market Review**
* 10 questions is a good length to keep a user's interest
* Most questions were about travel though some focused more on personality
* Many of the quizzes featured simple animations on hover or click
* Most of the quizzes didn't offer a back button to change an answer


### User Stories
Based on the research and goal development above I created a list of user stories. I felt that the quiz was most likely to be something that a visitor used once, rather than repeatedly, as it would likely form part of a bigger website e.g. a tour operator or travel agent site, with a user moving on to discover more about the products offered, so all user stories relate to a first time user.

* I want to take part in a fun, online game to find out my travel personality and my ideal travel destination
* I want to see information, images and a map of my recommended destination
* I want to see a breakdown of my results to learn more about my personality
* I want to access the quiz on any device
* I want to navigate the site easily


### Design, Layout & Structure


#### **Wireframes**
I decided to create a fully designed site in Figma, developing the structure, skeleton and layout as well as the style and look of the site, making all major creative design decisions, including the colours, fonts & layout prior to beginning coding. I created designs for desktop, tablet and mobile to make sure that responsiveness was at the forefront of the application from the beginning.

<details><summary>Welcome</summary>
<img src="docs/wireframes/wireframes_welcome.png">
</details>

<details><summary>Game</summary>
<img src="docs/wireframes/wireframes_game.png">
</details>

<details><summary>Results</summary>
<img src="docs/wireframes/wireframes_results.png">
</details>
   

#### **Structure**

The structure of the site is informed by the scope, user and business goals as well as the principles of IXD (interaction design) to make sure I was conforming to users' expectations and making everything as intuitive as I could.

The site has a simple structure, everything apart from the 404 page is contained on a single web page (index.html) with all the content replaced by the JavaScript code at different points in the game. There are 3 main divs within the page which appear and disappear depending on where you are in the game, these are:

Welcome - a brief intro with a name capture input to personalise the user's results and a start game button
Game - the main game play area, with a progress bar, question, answer options to choose from and a 'restart game' button
Results - the results of the quiz, showing the user's personality results breakdown in the form of a pie chart and text information as well as a recommended destination based on their responses to the quiz. This page also contains a button to take the user back to the start to begin the quiz again.

There is also a 404 page for when a user lands on a non-existent page with a button to link back to index.html to start the quiz again

Both the main index.html and 404 page contain a logo at the top (not clickable to avoid the user mistakenly clicking it and having to start the quiz again) and a cloud graphics footer, containing my name and social links.


#### **Colour & Design**

The design of the site is influenced by the view out the window on a plane journey, with the 'paper-like' clouds with drop shadows at the bottom as the footer and a light, airy gradient background as the sky. I have therefore used shades of blue for the colour palette, with a contrasting shades of orange for key elements to allow for good legibility.

![Main Colour Pallette](docs/colors/color-pallette-01.jpg)

In addition I created a colour palette for the pie chart and personality types, with each colour corresponding to a personality. These make the data more visual for the user. These colours are all soft, slightly desaturated to match the overall light, airy feel of the site design.

![Pie Chart Colour Pallette](docs/colors/color-pallette-02.jpg)

**Other Design Choices**
* The use of drop shadows & inner shadows to match the layered paper effect on the footer
* Consistent use of border radius to give the site a soft, rounded feel and match the rounded cloud design


#### **Fonts**

I imported [Google Fonts](https://fonts.google.com/) and used [Righteous](https://fonts.google.com/specimen/Righteous) (with a fallback of Sans Serif) for the logo and some of the main headings. I felt this font had a slightly exotic, exciting look which added to the travel theme. It also has good legibility and is eye-catching. I also used [Raleway](https://fonts.google.com/specimen/Raleway) (with a fallback of Sans Serif) for the main body text as it contrasted well with the heading font, had good flexibility with a range of weights and is known for being clear and legible as an online font, as well as having a warm, friendly roundness to it.


## Technologies Used

### Languages
* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Tools

* [Git](https://git-scm.com/)
    * Used for version control via GitPod by using the terminal to Git and Push to GitHub
* [GitHub](https://github.com/)
    * Used to store the project code after being created in GitPod / Git
* [Gitpod](https://www.gitpod.io/)
    * Used to create, edit & preview the project's code
* [Figma](https://www.figma.com/)
    * Used to develop the wireframes in to a full mockup including colours, fonts, proportions etc
* [Google Fonts](https://fonts.google.com/)
    * Used to select & import the fonts to the project (Poppins & Fira Sans)
* [Font Awesome](https://fontawesome.com/)
    * Used to add icons to the site
* [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html)
    * Used to help create the colour pallette as well as designing some of the graphic elements such as the buttons
* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html)
    * Used to crop, adjust and resize the photos to optimise them for the site
* [Tiny PNG](https://tinypng.com/)
    * Used to further optimise the images for the site and reduce file size
* [Bulk Image Crop](https://bulkimagecrop.com/)
    * Used to bulk crop bulk
* [Favicon.io](https://favicon.io/favicon-converter/)
    * Used to create and add the favicon to the browser tab
* [Chart.js](https://www.chartjs.org/)
    * Used to create and style the pie chart based on user personality results
* [Google Maps API](https://developers.google.com/maps)
    * Linked to Google Maps API to load the relevant country map and create clickable markers


## Features

### All Sections/Pages

#### **Favicon**

<details><summary>Screenshots</summary>

<img src="">

*Favicon*

</details>

* I included a Favicon for the site using the little plane graphic from the logo. This helped to build the brand and continue the site design in the user's browser tab.

#### **Logo**

<details><summary>Screenshots</summary>

<img src="">

*Logo*

</details>

* A simple logo with the name of the game
* The logo appears on all pages
* The logo is responsive and changes sized based on the user's screen size
* The logo isn't clickable. I had originally made it go back to the home page but during testing and based on feedback from my mentor I discovered this could cause a user to accidentally reset the quiz back to the start. This would cause a negative emotional response from a user so I broke the convention of having the logo link to the home page in this case as I felt it provided the best user experience.


#### **Footer**

<details><summary>Screenshots</summary>

<img src="">

*Footer on desktop*

<img src="">

*Footer on tablet*

<img src="">

*Footer on mobile*

</details>

* The footer is made of a series of layered 'paper-like' clouds to give a feeling of being above the clouds in a plane.
* The footer contains the text "Made By Emma Hewson" and links to my relevant social media sites so that it can be used as a portfolio project
* The footer social icons have aria labels to make them accessible
* The footer social icons have a hover effect with a smooth colour transition
* The footer is responsive, the cloud image adjusts as a background image down to tablet-size screens and is replaced by a smaller image on mobile to make the design work and the site perform well.


### Welcome Section

![Welcome Section - Mock Up]()

<details><summary>Screenshots</summary>

<img src="">

*Alert if no name entered*

<img src="">

*Hover effect on button*

</details>

* Brief text info about the game, how it works & encouraging the user to play
* Layout is responsive with margins changing on smaller devices
* Name input box
    * User must enter a name to start game - alert with appears if no name entered
    * Name is used in the results section to personalise the results
    * Has a character max of 10 and min of 2 to make the text in the results section work visually
* Start Quiz button - launches the quiz
    * Has a hover effect on non touchscreen devices with a smooth colour transition


### Game Section

![Game Section - Mock Up]()

<details><summary>Screenshot</summary>

<img src="">

*Game Section*

</details>

* The game section is fully responsive with the answers stacking full width on smaller devices and in 2 columns on larger devices as well as other layout changes


#### **Progress Bar**

<details><summary>Screenshots</summary>

<img src="">

*Progress Bar updates with each question answered*

</details>

* Gives the user an indication of where they are in the quiz and how many questions are left
* Contains both a visual reference in the pink bar and a number reference in the question number
* Updates when a user selects an answer and the question is repopulated


#### **Question**

<details><summary>Screenshots</summary>

<img src="">

*Question*

</details>

* Question text updates (along with the corresponding answers) each time a user makes a selection


#### **Answers**

<details><summary>Screenshots</summary>

<img src="">

*Answers*

</details>

* Updates with the next set of answers (along with the corresponding question) each time the user makes a selection
* Has a darker blue hover effect on non touchscreen devices with a smooth transition
* Once the user has selected an answer it turns orange
* There is a brief timeout to allow the orange to appear before the question & answers update, this gives the user a sense that the answer has definitely been selected and submitted and gives them time to see the question update happenning - all part of creating an intuitive and positive user experience.
* This also avoids having a separate 'next question' button which would add more clicks and may annoy a user
* During the time out the user cannot select another answer - this avoids accidental selections or duplicate results


#### **Restart Quiz Button**

<details><summary>Screenshots</summary>

<img src="">

*Restart Quiz Button*

</details>

* A button to allow the user to go back to the start of the quiz
* Has a hover effect with a short, smooth colour transition on non touchscreen devices


### Tie Breaker

![Tie Breaker - Mock Up]()

<details><summary>Screenshots</summary>

<img src="">

*Tie Breaker layouts*

</details>

As there are only 10 questions and each ones selects one of 6 personality types, there was a high chance of a tied result. I wanted to find a way to make the results as accurate and personalised as possible, so, where a tie happens, this round puts the final result decision in to the hands of the user, using images to find out what their perfect trip would look like. This helps it stand apart from the other questions and highlights its importance to the user.

* Images appear which relate to the tied winning personality results, each image representing a personality e.g. "foodie", "culture-vulture" etc.
* User selects one of them, this becomes the winning personality
* This round only appears if there is a tied result
* This round is also taken in to account in the final personality statistics
* There can be anything from 2-5 images depending on how many results were tied
* The images have associated "alt" values to make them accessible
* The layout is fully responsive depending on the screen size and the number of images that appear


### Results Section

![Results Section - Mock Up]()

* The results section is fully responsive with the answers stacking full width on smaller devices and in 2 columns on larger devices as well as other layout changes


#### **Personality Type**

<details><summary>Screenshots</summary>

<img src="">

*Personality Type Box*

<img src="">

*User's name and personality type heading*

<img src="">

*Pie Chart and statistics*

<img src="">

*Text about personality type*

<img src="">

*Paragraph about the influence of 2nd and 3rd place personality results on the country recommendation*

</details>

* This section gives detailed information about the user's personality results
* It is personalised to the user with their name
* The pie chart has a colour key with each personality type having an associated colour
* Each answer selected by the user is associated with one of the personality types, the percentages are calculated based on these, including the tie break
* The pie chart animates on
* Includes text information about the personality type
* The final paragraph is bespoke to the user's results, if they have high % scores in the 2nd and 3rd place personalities these are included here.
    * The recommended country is based on all the personality types chosen, not just the winning one - this helps explain this to the user.
    * This gives a sense of results being truly personalised to the user
* The personality results are fully responsive, stacking on smaller screens


#### **Recommended Country**

<details><summary>Screenshots</summary>

<img src="">

*Country Recommendation*


</details>

The recommended country is calculated using all the answers given by the user. This adds more accuracy to the results, taking in to account various different aspects of their personality, rather than just associating a single country with a personality type.

It is calculated as follows:
* Each answer relates to a personality type
* Each time the user selects an answer, points are awarded to 3 countries, based on how relevant the personality type is to the destination
    * e.g. if the 'food' answer is selected Mexico gets 3 points, New Zealand gets 2 and Peru gets 1
* These are added up at the end and a winning country is selected

The country recommendation section contains
* The name of the country selected
* A hero image of the country (including an "alt" value to make this accessible)
* Text about the country



#### **Country Highlights**

<details><summary>Screenshots</summary>

<img src="">

*Country Highlights - Whole section*

<img src="">

*Clickable marker with page scroll*

<img src="">

*Responsive map zoom*

<img src="">

*Google Maps Built in Functionality*


</details>

* A map which shows the recommended country using Google Maps API with clickable markers to find out more information about key highlights in that destination
* The highlight information is hidden until the user clicks on a marker
* Each marker is located at the site of a tourist attraction
* Each time a user clicks on a marker it replaces the information, this keeps the page short and neat and creates a better user experience as well as adding interactivity
* There is explanatory text at the top telling the user to click on a marker, though the markers in themselves encourage users to click on them due to the popularity of Google Maps and people's knowledge of it
* When a marker is clicked text and images appear about that destination highlight
* The highlight images have associated "alt" values to make them accessible
* The page scrolls to the bottom of the highlights section when a marker is clicked, this makes sure that the user can see the photos that appear
* This section is fully responsive, as well as layout changes to the main div and photos the map zoom level also changes for different devices to allow the whole country to appear on the user's screen and all markers to be visible and not too close together.
* The map also has Google's in-built functionality including:
    * Zoom buttons
    * Touchscreen zoom and scroll
    * Satellite and map view options
    * Streetview
    * Full screen button


#### **Start Again Button**

<details><summary>Screenshots</summary>

<img src="">

*Start Again Button*

</details>

* A button to allow users to re-take the quiz
* Allows users to navigate the site easily and start again if they're not happy with their results
* Has explanatory text to give the site a friendly 'voice'
* Button has a hover effect with a short, smooth colour transition on non touchscreen devices


### 404 Page

![404 Page - Mock Up]()

* 404 page to smoothly handle user's who have ended up on a non-existent part of the site
* This bespoke 404 page provides a positive emotional response to the user and a better user experience
* The page has the same design as the rest of the site, so the users don't feel like they have left the site, encouraging them to return to the home page
* The text is light hearted and relevant to the theme of the quiz
* There is a button to take the user back to the home page so there is no need to user the browser back button


### Future Features
I would like to expand the site in the future with the following features

#### **User Account**
Give the user the ability to save their results and recommendations, creating an account and log in so that they can re-access their data.

#### **Multiple / More Detailed Recommendations**
Give the user more detailed country recommendations, with multiple options and more countries available



## Testing & Bugs

### HTML Validation

I ran the code for all the pages through the [W3C HTML Validator](https://validator.w3.org/nu/).
<details><summary>HTML Validation Results</summary>
<img src="">
</details>

#### **Results**

#### **HTML Validation After Fixes**
<details><summary>Title</summary>
<img src="">
</details>


### CSS Validation

I ran the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 
<details><summary>CSS Validation Results</summary>
<img src="">
</details>

### Accessibility

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). 

#### **Error**
<details><summary>Screenshot</summary>
    <img src="">
    </details>

Description


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


### Responsiveness / Device Testing

The site was tested on the following devices
* Apple Macbook Pro 16inch
* LG Ultrafine Display 27inch External Monitor
* Apple iMac 5K 27-inch
* Apple iPhone SE
* Apple iPhone 5S
* Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options

DETAILS OF BUGS (Link to bugs below?)


### Browser Compatibility

The site was tested on the following browsers
* Google Chrome
* Mozilla Firefox
* Apple Safari

DETAILS OF BUGS (Link to bugs below?)

### Bugs & Fixes

During development and testing, in addition to the improvements described in the validation section above, I encountered the following bugs:

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


#### **4: Mobile input zoom-in not resetting**

During testing on mobile, when selecting the name input box, the browser would zoom in make the box bigger. This was due to the input box having text smaller than 16px. However upon input the browser wasn't zooming out again. I fixed this by adding the following to the viewport data in the head element of the HTML code: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">.
I wanted to make sure that accessibility wasn't affected by over-riding the zoom so I also increased the size of the name input box and start button.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>


#### **5: Button colour on mobile**

I found that the button text colour on mobile was set to blue rather than black, presumably as a result of this being a clickable button. I fixed this by explicitly setting the color of the button text in the CSS.


<details><summary>Screenshots</summary>

<img src="">

*Before*

<img src="">

*After*

</details>


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

### Testing User Stories

I tested the site based on my user stories:

#### **1. Description of user story:**

<details><summary>Screen Recording</summary>

<img src="">

</details>

<details><summary>Screenshots</summary>
<img src="">
</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Example Text | Example Text | Example Text | Example Text |


## Deployment

### GitHub Pages

The site was deployed to GitHub pages. The steps to deploy are as follows: 
1. In the GitHub repository, navigate to the Settings tab 
2. From the left hand menu select 'Pages'
3. From the source select Branch: main
4. Click 'Save'
5. A live link will be displayed when published successfully. 

The live link can be found here -  LINK TO GO HERE!!

### Forking the GitHub Repository

You can fork the repository by following these steps:
1. Go to the GitHub repository
1. Click on Fork button in upper right hand corner

### Cloning the GitHub Repository

You can clone the repository to use locally by following these steps:
1. Navigate to the GitHub Repository you want to clone
2. Click on the code drop down button
3. Click on HTTPS
4. Copy the repository link to the clipboard
5. Open your IDE of choice (git must be installed for the next steps)
6. Type git clone copied-git-url into the IDE terminal

The project will now be cloned locally for you to use.

## Credits

### Code

* Small code snippets & methods taken from online searches. All relevant code is credited in JavaScript files.
* [Chart.js](https://www.chartjs.org/): ChartJS library used to create pie chart
* [Google Maps API](https://developers.google.com/maps): Connected to Google Maps API for the map and clickable markers

### Content

* [Planet Aware](https://www.planetware.com/tourist-attractions/new-zealand-nz.htm): New Zealand Text
* [Lonely Planet](https://www.lonelyplanet.com/articles/best-places-to-visit-in-mexico): Mexico Text
* [Planet Aware](https://www.planetware.com/tourist-attractions/peru-per.htm): Peru Text
* [Planet Aware](https://www.planetware.com/tourist-attractions/china-chn.htm): China Text
* [Secret Africa](https://secretafrica.com/top-10-tourist-attractions-in-zambia/): Zambia Text
* [Wild Frontiers Travel](https://www.wildfrontierstravel.com/en_GB/blog/places-to-visit-in-kyrgyzstan): Kyrgyzstan Text

### Media

* Background Cloud Image [Image by rawpixel.com on Freepik](https://www.freepik.com/free-vector/cloud-background-pastel-paper-cut-style-vector_18220838.htm#&position=8&from_view=collections)

#### **Photos**

**New Zealand**
* New Zealand Main [Casey Horner](https://unsplash.com/photos/O_wC7v1Jh8A)
* Queenstown 1 [Adventure Activities](https://www.queenstownnz.co.nz/things-to-do/adventure-activities/)
* Queenstown 2 [Financial Times](https://propertylistings.ft.com/propertynews/queenstown/6109-five-reasons-to-live-in-queenstown-new-zealand.html)
* Queenstown 3 [Virtuoso](https://www.virtuoso.com/travel/articles/city-guide-queenstown-new-zealand)
* Queenstown 4 [Bucketlistly](https://www.bucketlistly.blog/posts/queenstown-things-to-do-backpacking)
* Fjordland 1 [Britannica](https://cdn.britannica.com/51/59851-050-02ED07E5/Mitre-Peak-waters-Milford-Sound-Fiordland-National.jpg)
* Fjordland 2 [NZ Pocket Guide](https://nzpocketguide.com/wp-content/uploads/2018/03/Doubtful-Sound-credit-Fland-Heli2-waterfall-fiordland-landscape-scenery-scenic-flight-Credit-Fiordland-Helicopters-Feature-Mandatory-Credit-Destination-Fiordland.jpg)
* Fjordland 3 [PSU.edu](https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/3/61309/files/2017/01/Fiordland-National-Park-Photo-143jraf.jpg)
* Fjordland 4 [NZ Pocket Guide](https://nzpocketguide.com/wp-content/uploads/2018/05/Lake-mapourika-best-kayak-tours-in-new-zealand-Feature-Mandatory-Credit-NZPocketGuide.com_.jpg)
* Bay of Islands 1 [Britannica](https://cdn.britannica.com/23/124823-050-723623CC/Russell-Bay-of-Islands-New-Zealand.jpg)
* Bay of Islands 2 [NZ Pocket Guide](https://nzpocketguide.com/wp-content/uploads/2020/08/Kerikeri-Rainbow-Falls-Feature-Mandatory-Credit-Unsplash-3.jpg)
* Bay of Islands 3 [NZ Pocket Guide](https://nzpocketguide.com/wp-content/uploads/2017/07/Kayaking-Haruru-Falls-Paihia-Feature-Mandatory-Credit-NZPocketGuide.com_.jpg)
* Bay of Islands 4 [Zu Blu](https://www.zubludiving.com/images/Pacific/New-Zealand/Bay-of-Islands/Bay-of-Islands-New-Zealand-scuba-diving-11.jpg)
* Tongariro National Park 1 [Love Taupo](https://d3qvqlc701gzhm.cloudfront.net/full/dc34abf72f24b44c88de4520ab3a4df190ba2a3b502969f010d055fc7d9598cc.jpg)
* Tongariro National Park 2 [Love Taupo](https://www.lovetaupo.com/en/scenic-attractions/tongariro-alpine-crossing/)
* Tongariro National Park 3 [Franks Travel Box](https://franks-travelbox.com/wp-content/uploads/2017/11/neuseeland-die-tongariro-alpine-crossing-tour-fucc88hrt-zu-den-spektakulacc88ren-gipfeln-des-ngauruhoe-und-des-tongariro-im-tongariro-nationalpark-in-neuseeland-tim90-shutterstock-1200x800.jpg)
* Tongariro National Park 4 [Love Taupo](https://www.lovetaupo.com/en/scenic-attractions/tongariro-alpine-crossing/?asset=2475-ig-1811475489148930068_233983843)
* Kaikoura 1 [Audley Travel](https://cdn.audleytravel.com/1050/750/79/7992863-kaikoura-new-zealand.webp)
* Kaikoura 2 [Kaikoura Kayaks](https://www.kaikourakayaks.nz/library/images/01-kaikoura-canterbury-kyle-mulinder.jpg)
* Kaikoura 3 [Trip Advisor](https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/b9/cb/2-day-guided-seal-kayaking.jpg?w=1200&h=900&s=1)
* Kaikoura 4 [Dolphin Encounter](https://www.dolphinencounter.co.nz/assets/Dolphin-Encounter-Files/6fb981f931/Dolphins_People_0007-v2__FocusFillWyItMC4yMyIsIi0wLjI4IiwxMjAwLDgwMF0.jpg)


**Peru**
* Peru Main [Alexander Schimmeck](https://unsplash.com/photos/MraFXV3v7Ts)
* Huaraz 1 [Evaneos](https://static1.evcdn.net/images/reduction/120921_w-1600_h-1200_q-75_m-crop.jpg)
* Huaraz 2 [Matador Network](https://cdn1.matadornetwork.com/blogs/1/2019/07/Huaraz-and-glaciers-1200x853.jpg)
* Huaraz 3 [Rainforest Cruises](https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_745/v1625762935/Huaraz-Best-Hikes-Laguna-69/Huaraz-Best-Hikes-Laguna-69.jpg)
* Huaraz 4 [Dave's Travel Corner](https://www.davestravelcorner.com/wp-blog/wp-content/uploads/2006/02/Bike-Riding-Huaraz.jpg)
* Amazon 1 [Planet of Hotels](https://planetofhotels.com/guide/en/peru/puerto-maldonado)
* Amazon 2 [Steppes Travel](https://planetofhotels.com/guide/en/peru/puerto-maldonado)
* Amazon 3 [Pinterest](https://www.pinterest.co.uk/pin/20-places-everyone-should-visit-in-south-america--36028865747984505/)
* Amazon 4 [World Travel Guide](https://www.worldtravelguide.net/wp-content/uploads/2019/01/shu-peru-amazon-rainforest-hut-in-river-226692121-1440x823.jpg)
* Cusco 1 [Rough Guides](https://deih43ym53wif.cloudfront.net/cusco-peru-shutterstock_346277210.jpg_45fc70bd52.jpg)
* Cusco 2 [Tour Scanner](https://tourscanner.com/blog/wp-content/uploads/2022/05/things-to-do-in-Cusco-Peru.jpg)
* Cusco 3 [Destinationless Travel](https://destinationlesstravel.com/wp-content/uploads/2022/06/3-women-dressed-in-traditional-clothing-in-Cusco-Peru.jpg)
* Cusco 4 [Britannica](https://cdn.britannica.com/30/94530-050-99493FEA/Machu-Picchu.jpg)
* Lake Titicaca 1-4 [World Atlas](https://www.worldatlas.com/lakes/lake-titicaca.html)
* Nazca 1 [PBS](https://www.pbs.org/wgbh/nova/media/original_images/nasca-1089342.jpg)
* Nazca 2 [The Guardian](https://www.theguardian.com/world/2020/oct/18/huge-cat-found-etched-desert-nazca-lines-peru)
* Nazca 3 [CNN](http://cdn.cnn.com/cnnnext/dam/assets/190905001543-01-nazca-lines-restricted.jpg)
* Nazca 4 [Viator](https://www.viator.com/en-GB/tours/Nazca/Nazca-lines-Overflight/d32679-71751P41)

**Kyrgyzstan**
* Kyrgyzstan Main [Amir Asakeev](https://unsplash.com/photos/1y6xSXuiVHU)
* Arslanbob 1 & 2 [Remote Lands](https://www.remotelands.com/destination/arslanbob-valley)
* Arslanbob 3 [Outpost Magazine](https://outpostmagazine.com/kyrgyzstan-arslanbob-forest-walnuts-way-life/)
* Arslanbob 4 [Journal of Nomads](https://www.journalofnomads.com/arslanbob-kyrgyzstan-travel-guide/)
* Bishkek 1 [Minzifa Travel](https://minzifatravel.com/destinations-blog/travel-to-bishkek-the-capital-of-kyrgyzstan/)
* Bishkek 2 [Itinari](https://www.itinari.com/country/kyrgyzstan/region/kg-bishkek)
* Bishkek 3 [Epic Backpacker Tours](https://epicbackpackertours.com/blog/kyrgyzstan-food/)
* Bishkek 4 [Silk Explore](https://silkroadexplore.com/blog/going-to-restaurants-in-kyrgyzstan-whats-happening/)
* Jety-Oguz 1 [Travel Land](https://trvlland.com/kyrgyzstan/sights/jety-oguz)
* Jety-Oguz 2 [Pinterest](https://www.pinterest.co.uk/pin/the-seven-bulls-of-jetioguz-kyrgyzstan--456411743467474442/)
* Jety-Oguz 3 & 4 [Adventures of Lil Nicki](https://adventuresoflilnicki.com/jeti-oguz-kyrgyzstan/)
* Issyk Kul 1 - 3 [](https://theplanetd.com/issyk-kul-lake-kyrgyzstan/)
* Issyk Kul 4 [Kalpak Travel](https://kalpak-travel.com/blog/issyk-kul/)
* Song Kul all highlight photos [Kalpak Travel](https://kalpak-travel.com/blog/song-kul-kyrgyzstan/)

**Mexico**
* Mexico Main [Fer Gomez](https://unsplash.com/photos/Z2RdKLpLbDs)
* Mexico City [Bloomberg](https://www.bloomberg.com/news/articles/2021-07-16/what-it-s-like-to-visit-mexico-city-right-now-great-food-rising-cases)
* Mexico City [Expedia](https://www.expedia.co.uk/Paseo-De-La-Reforma-Mexico-City.d179290.Attraction)
* Mexico City [Britannica](https://cdn.britannica.com/75/189875-050-0D548407/Frida-Kahlo-Museum-Coyoacan-Mexico.jpg)
* Mexico City [The Taco Trail](https://thetacotrail.files.wordpress.com/2013/07/img_6394.jpg)
* Tulum [Forbes](https://imageio.forbes.com/blogs-images/emilysiegel/files/2017/02/tulum-1200x750.jpg?format=jpg&width=1200)
* Tulum [Travel & Leisure](https://www.travelandleisure.com/travel-guide/tulum)
* Tulum [Peter Ruprecht](https://images.adsttc.com/media/images/5c8f/dbd6/284d/d1e4/9400/0712/large_jpg/2.jpg?1552931787)
* Tulum [Island Life Mexico](https://www.islandlifemexico.com/wp-content/uploads/2021/01/playa-del-carmen-cenote-square.jpg)
* Chichén Itzá [Itinari](https://img.itinari.com/pages/images/original/c2bd2f41-9cb2-4b12-98f1-0cdad06f35a6-istock-481272289.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=5fdfd987d045ea767baf8689a12fde32)
* Chichén Itzá [Road Affair](https://www.roadaffair.com/visiting-chichen-itza-guide/)
* Chichén Itzá [Carnival](https://www.carnival.com/shore-excursions/yucatan-progreso/chichen-itza-cenote-swim--buffet-320077)
* Chichén Itzá [Magic Blue Planet](https://magicblueplanet.com/wp-content/uploads/2021/04/Cenotes-Guide.jpeg?ezimgfmt=rs:352x235/rscb1/ngcb1/notWebP)
* Copper Canyon Railway [PTG Tours](https://www.ptg.co.uk/row-tour/railway-holiday-mexico/)
* Copper Canyon Railway [Travel Dudes](https://traveldudes.com/wp-content/uploads/2021/03/Copper-Canyon-Mexico.jpg)
* Copper Canyon Railway [Birding The Brooke and Beyond](https://birdingthebrookeandbeyond.files.wordpress.com/2015/06/img_4595.jpg)
* Copper Canyon Railway [The Whole World or Nothing](https://thewholeworldornothing.com/copper-canyon-railway-guide/)
* Oaxaca City [Nomadic Matt](https://www.nomadicmatt.com/travel-blogs/oaxaca/)
* Oaxaca City [Mexperience](https://www.mexperience.com/travel/colonial/oaxaca/)
* Oaxaca City [The Discoveries Of](https://www.thediscoveriesof.com/things-to-do-in-oaxaca/)
* Oaxaca City [Guide Oaxaca](https://guideoaxaca.com/wp-content/uploads/2020/06/San-Isidro-Roaguia-Hierve-el-Agua-Oct-2015-730.jpg)

**China**
* China Main [Teddy2 H](https://unsplash.com/photos/mjA7HPG2SYA)
* The Great Wall of China - all highlight photos [World Atlas](https://www.worldatlas.com/heritage-sites/great-wall-of-china.html)
* Potala Palace - all highlight photos [Britannica](https://www.britannica.com/topic/Potala-Palace)
* The Terracotta Army - all highlight photos [Britannica](https://www.britannica.com/topic/terra-cotta-army)
* Panda Centre [Air Pano](https://www.airpano.com/files/video_china_pandas_01_big.jpg)
* Panda Centre [China Discovery](https://www.chinadiscovery.com/assets/images/travel-guide/chengdu/chengdu-panda-base/red-panda.jpg)
* Panda Centre [Klook](https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/activities/sv1tqmzrlzuvnjyy9gct/GiantPandaBreedingResearchBaseTicketChengdu-IDCardDirectEntry.webp)
* Panda Centre [ABC News](https://s.abcnews.com/images/Lifestyle/gty_baby_pandas_02_jc_160930_16x9_992.jpg)
* The Yangtze River [Wikipedia](https://en.wikipedia.org/wiki/Three_Gorges)
* The Yangtze River [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:One_of_three_gorges_on_Yangtze_river.jpg)
* The Yangtze River [Links Travel and Tours](https://linkstravelandtours.co.uk/destinations/china/tours/yangtze-river-cruise/)
* The Yangtze River [Petrex GMBH](https://www.petrexgmbh.com/wp-content/uploads/2020/05/yangtze-river-2-1080x675.jpeg)

**Zambia**
* Zambia Main [Bibhash (Knapsnack.life) Banerjee ](https://unsplash.com/photos/ZbJwMkhj_yI)
* Victoria Falls 1 & 2 [Britannia](https://www.britannica.com/place/Victoria-Falls-waterfall-Zambia-Zimbabwe)
* Victoria Falls [Trip Savvy](https://www.tripsavvy.com/swimming-at-devils-pool-victoria-falls-1454647)
* Victoria Falls [Travelstart](https://www.travelstart.co.za/blog/adventure-activities-victoria-falls/)
* Lower Zambezi National Park [Time Magazine](https://time.com/collection/worlds-greatest-places-2022/6194631/lower-zambezi-national-park-zambia/)
* Lower Zambezi National Park [Robin Pope Safaris](https://www.robinpopesafaris.net/wp-content/uploads/lower-zambezi-national-park-robin-pope-safaris-scaled.jpg)
* Lower Zambezi National Park all highlight photos [Rachel Rebibo Photography](https://www.rachelrebibo.com/photography/lower-zambezi-national-park)
* South Luangwa National Park all highlight photos [Rachel Rebibo Photography](https://www.rachelrebibo.com/photography/south-luangwa-national-park)
* Kafue National Park all highlight photos [Natucate](https://www.natucate.com/en/blog/travel-guide/zambia-kafue-national-park)
* Lake Kashiba [Fast Track Visa](https://www.fasttrackvisa.com/blog/entry-to-zambia/)
* Lake Kashiba [Kafakumba](https://www.kafakumbalogistics.com/)
* Lake Kashiba 3 & 4[Pwando24](https://www.facebook.com/pwando24/posts/2509074145889425?locale=ne_NP&paipv=0&eav=AfYGwDvL2chHGT9GCnQUqZUz47BTVoe4SKmfArQofASI_-oNa-ngjRXBOLwrX3rjusY&_rdr)


### Acknowledgements

* My mentor [Gareth McGirr](https://github.com/Gareth-McGirr/) for all his help and advice throughout the project
* The whole team at [Code Institute](https://codeinstitute.net/) for their teaching and support
