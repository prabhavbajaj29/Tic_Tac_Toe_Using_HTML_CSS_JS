console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let tie = new Audio("tie.mp3");
let turn = "X";
let isgameover = false;
let moves = 0;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win or tie
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = `${boxtext[e[0]].innerText} wins!`;
      document.querySelector(".info").style.color = "#ff7f50"; // Set color for X
      document.querySelector(".info").style.backgroundColor = "#ffdab9"; // Set background color for X
      isgameover = true;
      document.querySelector(".imgbox").getElementsByTagName("img")[0].src = "excited.gif";
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      gameover.play(); // Play game over music
    }
  });

  moves++;
  if (moves === 9 && !isgameover) {
    document.querySelector(".info").innerText = "It's a Tie!";
    document.querySelector(".info").style.color = "#20b2aa"; // Set color for tie
    document.querySelector(".info").style.backgroundColor = "#afeeee"; // Set background color for tie
    isgameover = true;
    tie.play(); // Play tie music
  }
};

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.querySelector(".info").innerText = `Turn for ${turn}`;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  moves = 0;
  document.querySelector(".info").innerText = `Turn for ${turn}`;
  document.querySelector(".info").style.color = "black"; // Reset color
  document.querySelector(".info").style.backgroundColor = "initial"; // Reset background color
  document.querySelector(".imgbox").getElementsByTagName("img")[0].src = "";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0";
});
