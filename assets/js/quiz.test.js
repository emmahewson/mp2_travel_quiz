/**
 * @jest-environment jsdom
 */

let startGame = require("./quiz.js", "./questions_array.js", "./countries_array.js", "./map.js", "./personalities_array.js");
let addQuestionContent = require("./quiz.js", "./questions_array.js", "./countries_array.js", "./map.js", "./personalities_array.js");

beforeEach( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8"); 
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Question Populate tests", () => {
    test("expect question content to contain 'At a party you are most likely to be found…' when startGame is run", () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        window.scrollTo = jest.fn();
        window.alert = jest.fn();
        startGame(fakeEvent);
        expect(document.getElementById("question-text").innerHTML).toEqual("At a party you are most likely to be found…");
    });
});

describe("Add Question Content Test", () => {
    test("expect question content to contain 'At a party you are most likely to be found…' when addQuestionContent is given an index of 0", () => {
        addQuestionContent(0);
        expect(document.getElementById("question-text").innerHTML).toEqual("At a party you are most likely to be found…");
    });
});
