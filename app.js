//DOM
// const choices = document.querySelectorAll('.choice');
// const score = document.getElementById('score');
// const result = document.getElementById('result');
// const restart = document.getElementById('restart');
// const modal = document.querySelector('.modal');
// const scoreboard = {
//   player: 0,
//   computer: 0
// }


//Game JS
//Game Logic
function play(playerChoice) {
  //Choices
  let choices = ["Rock", "Paper", "Scissors"];

  //Computer Logic
  let compchoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(compchoice)

  //NOTE CHOOSE PAPER:
  if (playerChoice == "Paper") {
    if (playerChoice == compchoice) {
      alert("Draw")
    } else if (compchoice == "Rock") {
      alert("Paper beats Rock \n You Win\n")
    } else {
      alert("Paper doesn't beat Scissors \nYou Lose\n")
    };
  }//NOTE CHOOSE ROCK
  else if (playerChoice == "Rock") {
    if (playerChoice == compchoice) {
      alert("Draw")
    } else if (compchoice == "Paper") {
      alert("Rock doesn't beat Paper \nYou Lose\n")
    } else {
      alert("Rock beats Scissors \nYou Win\n")
    };
  }//NOTE CHOOSE SCISSORS
  else {
    if (playerChoice == compchoice) {
      alert("Draw")
    } else if (compchoice == "Rock") {
      alert("Scissors doesn't beat Rock \nYou Lose\n")
    } else {
      alert("Scissors beats Paper \nYou Win\n")
    };
  }
}
