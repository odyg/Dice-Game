document.querySelector("button").onclick = function () {
  rollDice();
};
function rollDice() {
  var diceNumber1 = Math.random();
  var diceNumber2 = Math.random();
  diceNumber1 = Math.floor(diceNumber1 * 6);
  diceNumber2 = Math.floor(diceNumber2 * 6);
  var dicePosi = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  var output1 = dicePosi[diceNumber1];
  var output2 = dicePosi[diceNumber2];

  document.querySelector(".img1").setAttribute("src", output1);
  document.querySelector(".img2").setAttribute("src", output2);

  if (diceNumber1 > diceNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
  } else if (diceNumber1 < diceNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a draw";
  }
}
