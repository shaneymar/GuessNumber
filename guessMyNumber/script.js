'use strict';

// console.log(document.querySelector('.message').textContent ); //Start Guessing

// //document.querySelector('.message').textContent = 'Correct Number👌'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value); //input value so used to get values


//Handling Events

//Resetting or Playing Game Again;
const playAgain = document.querySelector('.again');

function reset(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
}

playAgain.addEventListener('click', function(){
    reset();
});



//secret Number
let score = 20;
let highscore = 0;
const randomNumber = Math.trunc(Math.random() * 20) + 1;



const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value); //converting string to number
    console.log(guess);

    //No Player
    if(!guess){
        document.querySelector('.message').textContent = '❌ NO NUMBER, PLEASE ENTER A NUMBER TO CHECK';
    }

    //When Player Wins
    else if(guess === randomNumber)
    {
        document.querySelector('.message').textContent = `👍 You're Correct ${randomNumber}`;

        const secretNumber = document.querySelector('.number');
        secretNumber.textContent = randomNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //checking HighScore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
      
    }

    //Guess is Too High
    else if(guess > randomNumber){
        if(score > 1)
        {
            document.querySelector('.message').textContent = 'Too High';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //Guess is Too Low
    else if(randomNumber > guess){
        if(score > 1)
        {
        document.querySelector('.message').textContent = 'Too Low';
        score = score - 1
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    
})