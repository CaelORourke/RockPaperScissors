var availableChoices = ["r", "p", "s"];

var keyPressed = "";
var computerChoice = "";

var wins = 0;
var losses = 0;
var ties = 0;

function getRandomChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    console.log("computerChoice='" + computerChoice + "'");
}

$(document).ready(function () {
    // listen for keys that players type
    $(document).keyup(function (event) {
        keyPressed = event.key.toLowerCase();
        console.log(keyPressed);

        // we only care about "r", "p", "s"
        if (availableChoices.indexOf(keyPressed) > -1) {
            computerChoice = getRandomChoice();

            // TODO: check who won
        }
    });
});
