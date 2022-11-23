let getUserName = document.querySelector("#name-button");
getUserName.addEventListener("click", userName);
const div1 = document.querySelectorAll(".button");

let winnerName = document.querySelector("#winner-name");
let showComputerChoice = document.querySelector("#computer-choice");

function userName(event) {
  event.preventDefault();

  const input = document.querySelector("#name-input");
  let userNameText = document.querySelector("#user-name");
  userNameText.innerText = `Choose an option, ${input.value}`;
  input.value = "";
}

let userCounter = 0;
let computerCounter = 0;

let userPoints = document.querySelector("#user-points");
userPoints.innerText = `Player: ${userCounter}`;

let computerPoints = document.querySelector("#computer-points");
computerPoints.innerText = `Computer: ${computerCounter}`;

let roundCounter = document.querySelector("#round-counter");
const userChoices = document.querySelectorAll("#user-btn");
for (let i = 0; i < userChoices.length; i++) {
  userChoices[i].addEventListener("click", playGame);
}

function playGame(event) {
  let computerChoice = Math.floor(Math.random() * 3);

  showComputerChoice = document.querySelector("#computer-choice");
  if (computerChoice == 0) {
    showComputerChoice.innerText = "Computer chose: rock";
  } else if (computerChoice == 1) {
    showComputerChoice.innerText = "Computer chose: paper";
  } else {
    showComputerChoice.innerText = "Computer chose: scissors";
  }

  let showUserChoices = document.querySelector("#user-choices");
  if (event.target == userChoices[0]) {
    showUserChoices.innerText = "You chose: rock";
  } else if (event.target == userChoices[1]) {
    showUserChoices.innerText = "You chose: paper";
  } else {
    showUserChoices.innerText = "You chose: scissors";
  }

  if (
    (computerChoice == 0 && event.target == userChoices[0]) ||
    (computerChoice == 1 && event.target == userChoices[1]) ||
    (computerChoice == 2 && event.target == userChoices[2])
  ) {
    roundCounter.innerText = "Tie!";
  } else if (
    (computerChoice == 0 && event.target == userChoices[1]) ||
    (computerChoice == 1 && event.target == userChoices[2]) ||
    (computerChoice == 2 && event.target == userChoices[0])
  ) {
    userCounter++;
    roundCounter.innerText = "You win!";
    userPoints.innerText = `Player: ${userCounter}/3`;
    if (userCounter == 3) {
      winnerName = document.querySelector("#winner-name");
      winnerName.innerText = "You won the match!";
      document.body.style.backgroundColor = "#B5FF33";
    }
  }

  if (
    (computerChoice == 0 && event.target == userChoices[2]) ||
    (computerChoice == 1 && event.target == userChoices[0]) ||
    (computerChoice == 2 && event.target == userChoices[1])
  ) {
    roundCounter.innerText = "Computer won!";
    computerCounter++,
      (computerPoints.innerText = `Computer: ${computerCounter}/3`);
    if (computerCounter == 3) {
      winnerName = document.querySelector("#winner-name");
      winnerName.innerText = "Computer won the match!";
      document.body.style.backgroundColor = "#FF8D33";
    }
  }

  let restart = document.querySelector("#restart-game");
  restart.addEventListener("click", restartGame);

  function restartGame(event) {
    event.preventDefault();

    roundCounter.innerText = "";
    winnerName.innerText = "";

    userCounter = 0;
    computerCounter = 0;
    userPoints.innerText = `Player: ${userCounter}`;
    computerPoints.innerText = `Computer: ${computerCounter}`;
    showUserChoices.innerText = "";
    showComputerChoice.innerText = "";
    document.body.style.backgroundColor = "white";
  }
}
