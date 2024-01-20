'use strict';

// document references the html file
// querySelector('.message) gives us the tag with the class message
// textContent grabs the text from the element
// console.log(document.querySelector('.message').textContent);

// changing text
// document.querySelector('.message').textContent = 'Correct Number';

// For an input field like a text box, instead of textContent we use the 
// method value, ex. document.querySelector('.someButton').value

// IMPLEMENTING GAME LOGIC

function textSetter(element, text) {

    document.querySelector(element).textContent = text;
    
}

function newRandNumber(){
    return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = newRandNumber(); // secret number
let score = 20;
let highScore = 0;

//displaying secret number for testing reasons
//comment out this code when done
// document.querySelector('.number').textContent = secretNumber;

// We will be using Event Listeners to handle click events

// We select the button element and add an event listener to it
// the addEventListener method takes in type of interaction as a string,
// and also a function defining what happens when the event takes place.
// We can send in functions stored in variables or define a function expression
// as an argument.
document.querySelector('.check').addEventListener('click', function(){
    // the input is returned as a string so we convert to number
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess);

    if(!guess){ 
        textSetter('.message', '⛔ No Number!');
    } else if (guess === secretNumber) {
        textSetter('.message', '✅ Correct Number!');
        textSetter('.message', String(secretNumber));

        if (score > highScore){ 
            highScore = score;
            textSetter('.highscore', String(highScore));
        }

        // we're selecting an element tag and then accessing it's style components
        // using .style and .backgroundColor gives us access to the 
        // background-color property
        document.querySelector('body').style.backgroundColor = '#60b347';

        //increasing width of number display
        document.querySelector('.number').style.width = '30rem';
    } else {
        if (score > 1){
            textSetter('.message', guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            textSetter('.score', score);
        } else {
            textSetter('.message', '☹️ You Lost!');
            score = 0;
            textSetter('.score', score);
        }
    } 

});

// Again! (reset) button functionality

document.querySelector('.again').addEventListener('click', function() {

    secretNumber = newRandNumber();

    score = 20;
    textSetter('.score', score);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    textSetter('.message', 'Start guessing...');
    textSetter('.number', '?');
    document.querySelector('.guess').value = '';

})