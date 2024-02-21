'user strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
const button = document.querySelector('.check');
const buttonAgain = document.querySelector(".again")

let score = 20;
let highScore = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message')

  if (!guess) {
    message.textContent = 'Nothing entered 👎';
  } else if(secretNumber === guess){

    document.querySelector(".number").textContent = secretNumber;
    message.textContent = "You're right !"
    document.querySelector(".number").style.width = "30rem";
    document.querySelector('body').style.backgroundColor = "#60b347";

    if(score > highScore){
        highscore = score;
        document.querySelector(".highscore").textContent =  highscore
    }

  } else if(guess !== secretNumber) {
    score--;
    document.querySelector(".score").textContent = score
    if(score > 20){
      
    }
    if(score >= 1){
        guess > secretNumber ? 
          message.textContent = "Too high !" :
          message.textContent ="Too low !"
    }
  }
});

buttonAgain.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});

