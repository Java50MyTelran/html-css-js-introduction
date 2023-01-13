//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["question1", "answer1"], ["question2","answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
//functions
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display='none'
    resultMessage.innerHTML='';
    wordElement.innerHTML = getWordDivs();

}
function getWordDivs() {
    //TODO
}
function checkWord() {
  //TODO
}
function processLetter() {
    //TODO
}
function takeChance() {
    //TODO
}
function finishGame() {
    //TODO
}
//actions
startGame();