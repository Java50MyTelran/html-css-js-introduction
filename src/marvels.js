//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessageElement = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const guessButtonElement = document.getElementById("guess-button");
let wordLettersElement;
//global variables
const questionsWords = [["Type in JS containing any symbols", "string"],
["Type in JS, value of which being added to 5 will give number on 5 more","number"],
["conatins value received at function call", "parameter"],
["value passed at function call", "argument"],
["job you are looking for", "developer"],
["Profession you would like to master", "programmer"],
["May be passed, taken, returned, called in JS", "function"],
["Related to programming, but not programming language", "english"]];
let currentIndex = 0;
let word;
let initialLettersNumber;
let remainedLettersNumber;
let resultMessage; 
//functions
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    guessButtonElement.hidden = false;
    letterInputElement.readOnly = false;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display='none'
    resultMessageElement.innerHTML='';
    word = questionsWords[currentIndex][1];
    wordElement.innerHTML = getWordDivs();
    wordLettersElement = document.querySelectorAll(".letter");
    remainedLettersNumber = Math.ceil(word.length * 0.25);
    initialLettersNumber = remainedLettersElement;
   fillRemainedTrials();

}
function fillRemainedTrials() {
    remainedLettersElement.innerHTML = `remained ${remainedLettersNumber} trials for letters entering`
}
function getWordDivs() {
    const wordAr = Array.from(word);
    const divs = wordAr.map(function(letter) {
        return `<div class="letter">${letter}</div>`
    })
    return divs.join('');
}
function checkWord() {
  wordLettersElement.forEach(function(div) {
    div.style.background = "white";
  })
 resultMessage = "Sorry, but you have failed with guess"
  if (word === wordInputElement.value) {
    resultMessage = "Congratulations, you are winner"
  }
  
  finishGame();

}
function processLetter() {
  remainedLettersNumber--;
  fillRemainedTrials();
  const letter = letterInputElement.value;
  letterInputElement.value =''
  wordLettersElement.forEach(function(div, index) {
    if(word[index] === letter) {
        div.style.background = "white"
    }
  })
  if (remainedLettersNumber === 0) {
    takeChance();
  }
}
function takeChance() {
   wordInputElement.readOnly = false;
   letterInputElement.readOnly = true;
}
function finishGame() {
    currentIndex++;
    if(currentIndex === questionsWords.length) {
        currentIndex = 0;
    }
    resultMessageElement.innerHTML = resultMessage;
    playAgain.style.display='block'
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = true;
    guessButtonElement.hidden = true;
}
//actions
startGame();