const rockPaperScissors = (function () {
    let computerChoice = "";

    let gameStarted = false;

    let wins = 0;
    let losses = 0;
    let ties = 0;

    let hasPlayerWon = false;
    let hasComputerWon = false;

    const availableChoices = ["r", "p", "s"];

    const winRules = {
        'r': 's',//rock beats scissors
        'p': 'r',//paper beats rock
        's': 'p'//scissors beats paper
    };

    function getRandomChoice() {
        return (availableChoices[Math.floor(Math.random() * availableChoices.length)]);
    };

    return {
        getAvailableChoices() {
            return availableChoices;
        },
        getGameStarted() {
            return gameStarted;
        },
        getWins() {
            return wins;
        },
        getLosses() {
            return losses;
        },
        getTies() {
            return ties;
        },
        compareChoices(playerChoice) {
            if (availableChoices.indexOf(playerChoice) > -1) {
                computerChoice = getRandomChoice();
                // console.log("computerChoice='" + computerChoice + "'");
    
                if (playerChoice === computerChoice) {
                    ties++;
                }
                else if (winRules[playerChoice] === computerChoice) {
                    hasPlayerWon = true;
                    wins++;
                }
                else {
                    hasComputerWon = true;
                    losses++;
                }
            }

            // console.log("wins=" + wins);
            // console.log("losses=" + losses);
            // console.log("ties=" + ties);

            return {
                hasPlayerWon: hasPlayerWon,
                hasComputerWon: hasComputerWon,
                playerChoice: playerChoice,
                computerChoice: computerChoice
            };
        },
        newGame() {
            wins = 0;
            losses = 0;
            ties = 0;
            gameStarted = false;
        },
        newRound() {
            hasPlayerWon = false;
            hasComputerWon = false;
            gameStarted = true;
        }
    };
})();
