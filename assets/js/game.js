var availableChoices = ["r", "p", "s"];

var winRules = {
    'r': 's',//rock beats scissors
    'p': 'r',//paper beats rock
    's': 'p'//scissors beats paper
}

var keyPressed = "";
var computerChoice = "";

var wins = 0;
var losses = 0;
var ties = 0;

function getRandomChoice() {
    return (availableChoices[Math.floor(Math.random() * availableChoices.length)]);
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0;// tie
    }
    else if (winRules[playerChoice] === computerChoice) {
        return 1;// win
    }
    else {
        return -1;// loss
    }
}

function displayStats() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#ties").text(ties);
}

$(document).ready(function () {
    // listen for keys that players type
    $(document).keyup(function (event) {
        keyPressed = event.key.toLowerCase();
        // console.log(keyPressed);

        $(".choices").css("display", "none");

        // we only care about "r", "p", "s"
        if (availableChoices.indexOf(keyPressed) > -1) {
            computerChoice = getRandomChoice();
            // console.log("computerChoice='" + computerChoice + "'");

            switch (computerChoice) {
                case 'r':
                    $("#rock").css("display", "block");
                    break;
                case 'p':
                    $("#paper").css("display", "block");
                    break;
                case 's':
                    $("#scissors").css("display", "block");
                    break;
            }

            switch (keyPressed) {
                case 'r':
                    $("#myRock").css("display", "block");
                    break;
                case 'p':
                    $("#myPaper").css("display", "block");
                    break;
                case 's':
                    $("#myScissors").css("display", "block");
                    break;
            }

            switch (compareChoices(keyPressed, computerChoice)) {
                case 1:
                    wins++;
                    break;
                case -1:
                    losses++;
                    break;
                case 0:
                    ties++;
                    break;
            }

            displayStats();
            // console.log("wins=" + wins);
            // console.log("losses=" + losses);
            // console.log("ties=" + ties);
        }
    });
});
