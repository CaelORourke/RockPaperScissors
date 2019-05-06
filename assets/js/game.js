function displayStats() {
    $("#wins").text(rockPaperScissors.getWins());
    $("#losses").text(rockPaperScissors.getLosses());
    $("#ties").text(rockPaperScissors.getTies());
};

function newGame() {
    rockPaperScissors.newGame();
    displayStats();
    $("#instructions").text("Press any key to get started!");
};

function newRound() {
    rockPaperScissors.newRound();
    $("#instructions").text("Press r, p, or s to play. Press spacebar to quit.");
};

$(document).ready(function () {
    const validChoices = rockPaperScissors.getAvailableChoices();

    const rock = $("#rock");
    const paper = $("#paper");
    const scissors = $("#scissors");

    const myRock = $("#myRock");
    const myPaper = $("#myPaper");
    const myScissors = $("#myScissors");

    newGame();

    $(document).keyup(function (event) {
        let keyPressed = event.key.toLowerCase();

        $(".choices").css({ display: "none", left: ""});

        if (rockPaperScissors.getGameStarted()) {
            if (event.which === 32)// spacebar
            {
                newGame();
            }

            // we only care about "r", "p", "s"
            if (validChoices.indexOf(keyPressed) > -1) {

                let result = rockPaperScissors.compareChoices(keyPressed);

                switch (result.computerChoice) {
                    case 'r':
                        rock.css("display", "block");
                        break;
                    case 'p':
                        paper.css("display", "block");
                        break;
                    case 's':
                        scissors.css("display", "block");
                        break;
                }

                switch (result.playerChoice) {
                    case 'r':
                        myRock.css("display", "block");
                        break;
                    case 'p':
                        myPaper.css("display", "block");
                        break;
                    case 's':
                        myScissors.css("display", "block");
                        break;
                }

                if (result.hasComputerWon) {
                    switch (result.computerChoice) {
                        case 'r':
                            rock.animate({ left: '-250px' });
                            break;
                        case 'p':
                            paper.animate({ left: '-250px' });
                            break;
                        case 's':
                            scissors.animate({ left: '-250px' });
                            break;
                    }
                }

                if (result.hasPlayerWon) {
                    switch (result.playerChoice) {
                        case 'r':
                            myRock.animate({ left: '250px' });
                            break;
                        case 'p':
                            myPaper.animate({ left: '250px' });
                            break;
                        case 's':
                            myScissors.animate({ left: '250px' });
                            break;
                    }
                }

                displayStats();
                newRound();
            }
        }
        else {
            $("#instructions").text("Press r, p, or s to play. Press spacebar to quit.");
            newRound();
        }
    });
});
