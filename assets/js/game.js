function displayStats() {
    $("#wins").text(rockPaperScissors.getWins());
    $("#losses").text(rockPaperScissors.getLosses());
    $("#ties").text(rockPaperScissors.getTies());
};

$(document).ready(function () {
    const validChoices = rockPaperScissors.getAvailableChoices();

    $(document).keyup(function (event) {
        let keyPressed = event.key.toLowerCase();

        $(".choices").css("display", "none");

        // we only care about "r", "p", "s"
        if (validChoices.indexOf(keyPressed) > -1) {

            let result = rockPaperScissors.compareChoices(keyPressed);

            switch (result.computerChoice) {
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

            switch (result.playerChoice) {
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

            displayStats();
        }
    });
});
