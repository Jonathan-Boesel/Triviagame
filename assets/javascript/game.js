/* global $ */

// Game Questions object arrays
var questions = [{
        question: "Which of these characters did not appear in the 64 version of Super Smash Bros?",
        wrongAnswers: ["Nes", "Fox", "Jigglypuff"],
        rightAnswer: "Bowser"
    },
    {
        question: "Which of these characters had never appeared on the N64 before, or again?",
        wrongAnswers: ["Pikachu", "Luigi", "Yoshi"],
        rightAnswer: "Samus"
    },
    {
        question: "What is Kirby’s taunt?",
        wrongAnswers: ["Jumps and turns into an anvil", "Runs back and forth", "Sucks in air and holds it until he turns blue"],
        rightAnswer: "Waves and says hi"
    },
    {
        question: "Which of these characters does not have a projectile move?",
        wrongAnswers: ["Yoshi", "Luigi", "Link"],
        rightAnswer: "Donkey Kong"
    },
    {
        question: "What is the move called that knocks opponents off the stage with no hope of recovery?",
        wrongAnswers: ["Comet kick", "Death smash", "Meteor kick"],
        rightAnswer: "Meteor smash"
    },
    {
        question: "When Mario taunts he grows in size, what does his Luigi do?",
        wrongAnswers: ["Shrinks", "A backflip", "Holds a green fireball over his head"],
        rightAnswer: "Bashfully kicks his foot"
    },
    {
        question: "Captain Falcon yells something when you use his taunt, what is it?",
        wrongAnswers: ["I've been waiting for you!", "I can't let you do that!", "Falcon!"],
        rightAnswer: "Show me your moves!"
    }
];

// Game variables
var images = ["assets/images/bowser.gif", "assets/images/Samus.gif", "assets/images/Kirby.gif", "assets/images/DK.gif", "assets/images/meteor2.gif", "assets/images/luigi.gif", "assets/images/falcon.gif", "assets/images/SSB.gif"];
var numberCorrect = 0
var numberWrong = 0
var numberUnanswered = 0
var currentQuestion = ""
var time = 23
var gameClock;
var timeLeft;
var correctAnswer = ""
var userChoice = ""


// Sets up game clock display - timeOuts in each page setup
function startGameClock() {
    gameClock = setInterval(decrement, 1000)
}

function decrement() {
    time--;
    $("#timer").html("Time remaining: " + time + " seconds!!");
}

// Sets up each screen, hides/shows various elements as needed
function homeScreen() {
    $("#restartbutton").hide()
    $("#startbutton").show()
    $("#startbutton").html('<button style="border: none; background-color: transparent; width: 200px)"></button>');
    $("#timer").hide()
    $("#questionfield").text("");
    $("#answerone").text("");
    $("#answertwo").text("");
    $("#answerthree").text("");
    $("#answerfour").text("");
    currentQuestion = 0;
    $("#home").css('background-image', 'url(' + "assets/images/Home.jpg" + ')');
}

function firstQuestion() {
    console.log(questions[0].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").text(questions[0].question);
    $("#answerone").text(questions[0].wrongAnswers[0]);
    $("#answerfour").text(questions[0].wrongAnswers[1]);
    $("#answerthree").text(questions[0].wrongAnswers[2]);
    $("#answerfour").show()
    $("#answertwo").text(questions[0].rightAnswer);
    $("#home").css('background-image', 'url(' + "assets/images/hyrule2.jpg" + ')');
    currentQuestion = 1;
    correctAnswer = 2;
}

function secondQuestion() {
    console.log(questions[1].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[1].question);
    $("#answerone").text(questions[1].wrongAnswers[0]);
    $("#answertwo").text(questions[1].wrongAnswers[1]);
    $("#answerthree").text(questions[1].wrongAnswers[2]);
    $("#answerfour").text(questions[1].rightAnswer);
    currentQuestion = 2;
    correctAnswer = 4
}

function thirdQuestion() {
    console.log(questions[2].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[2].question);
    $("#answerfour").text(questions[2].wrongAnswers[0]);
    $("#answertwo").text(questions[2].wrongAnswers[1]);
    $("#answerthree").text(questions[2].wrongAnswers[2]);
    $("#answerone").text(questions[2].rightAnswer);
    currentQuestion = 3;
    correctAnswer = 1;
}

function fourthQuestion() {
    console.log(questions[3].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[3].question);
    $("#answerone").text(questions[3].wrongAnswers[0]);
    $("#answertwo").text(questions[3].wrongAnswers[1]);
    $("#answerfour").text(questions[3].wrongAnswers[2]);
    $("#answerthree").text(questions[3].rightAnswer);
    currentQuestion = 4;
    correctAnswer = 3;
}

function fifthQuestion() {
    console.log(questions[4].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[4].question);
    $("#answerone").text(questions[4].wrongAnswers[0]);
    $("#answerthree").text(questions[4].wrongAnswers[1]);
    $("#answerfour").text(questions[4].wrongAnswers[2]);
    $("#answertwo").text(questions[4].rightAnswer);
    currentQuestion = 5;
    correctAnswer = 2;
}

function sixthQuestion() {
    console.log(questions[5].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[5].question);
    $("#answerone").text(questions[5].wrongAnswers[0]);
    $("#answertwo").text(questions[5].wrongAnswers[1]);
    $("#answerfour").text(questions[5].wrongAnswers[2]);
    $("#answerthree").text(questions[5].rightAnswer);
    currentQuestion = 6;
    correctAnswer = 3;
}

function seventhQuestion() {
    console.log(questions[6].question);
    startGameClock();
    $("#timer").show();
    $("#timer").html("Time remaining: " + time + " seconds!!");
    timeLeft = setTimeout(timeOut, 1000 * 23);
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").text(questions[6].question);
    $("#answerfour").text(questions[6].wrongAnswers[0]);
    $("#answertwo").text(questions[6].wrongAnswers[1]);
    $("#answerthree").text(questions[6].wrongAnswers[2]);
    $("#answerone").text(questions[6].rightAnswer);
    currentQuestion = 7;
    correctAnswer = 1;
}

function finalPage() {
    $("#questionfield").show()
    $("#answerone").show()
    $("#answertwo").show()
    $("#questionfield").html("<strong>Thank you for playing!!</strong>");
    $("#answerone").html("Questions right: " + numberCorrect);
    $("#answertwo").html("Questions wrong: " + numberWrong);
    $("#answerthree").html("Questions unanswered: " + numberUnanswered)
    $("#answerfour").hide();
    $("#restartbutton").show()
    $("#restartbutton").html("<button>RESTART</button>");
    currentQuestion = 8;
}


// Start/Reset buttons
$("#startbutton").on("click", function() {
    nextQuestion()
    $("#startbutton").hide()
})

$("#restartbutton").on("click", function() {
    nextQuestion();
    numberCorrect = 0
    numberWrong = 0
    numberUnanswered = 0
    // $("#restartbutton").hide()
})

// User input check
$(document).on("click", ".choice", function() {
    userChoice = ($(this).data("choice"))
    if (userChoice === correctAnswer) {
        numberCorrect++;
        correctSlide();
    }
    else {
        numberWrong++;
        incorrectSlide();
    }
})

// Inbetween Pages
var slideClock;

function startSlideClock() {
    setTimeout(nextQuestion, 5000)
    clearInterval(slideClock)
}

// Functions for user input type
function correctSlide() {
    clearInterval(gameClock);
    clearTimeout(timeLeft)
    startSlideClock()
    time = 23
    $("#timer").hide();
    $("#questionfield").hide()
    $("#answerone").hide()
    $("#answertwo").hide()
    $("#answerthree").text("You're right!!")
    $("#answerfour").html("<img src=" + images[currentQuestion - 1] + " width='400px'>")
}

function incorrectSlide() {
    clearInterval(gameClock);
    clearTimeout(timeLeft)
    startSlideClock()
    time = 23
    $("#timer").hide();
    $("#questionfield").hide()
    $("#answerone").hide()
    $("#answertwo").hide()
    $("#answerthree").text("Wrong!! The correct answer was " + questions[currentQuestion - 1].rightAnswer)
    $("#answerfour").html("<img src=" + images[currentQuestion - 1] + " width='400px'>")
}

function timeOut() {
    clearInterval(gameClock);
    clearTimeout(timeLeft)
    startSlideClock()
    time = 23
    numberUnanswered++;
    $("#timer").hide();
    $("#questionfield").hide()
    $("#answerone").hide()
    $("#answertwo").hide()
    $("#answerthree").text("You ran out of time! The correct answer was " + questions[currentQuestion - 1].rightAnswer)
    $("#answerfour").html("<img src=" + images[currentQuestion - 1] + " width='400px'>")

}

// Where to functions
function nextQuestion() {
    if (currentQuestion === 0) {
        firstQuestion();
        return;
    }
    if (currentQuestion === 1) {
        secondQuestion();
        return;
    }
    if (currentQuestion === 2) {
        thirdQuestion();
        return;
    }
    if (currentQuestion === 3) {
        fourthQuestion();
        return;
    }
    if (currentQuestion === 4) {
        fifthQuestion();
        return;
    }
    if (currentQuestion === 5) {
        sixthQuestion();
        return;
    }
    if (currentQuestion === 6) {
        seventhQuestion();
        return;
    }
    if (currentQuestion === 7) {
        finalPage();
        return;
    }
    if (currentQuestion === 8) {
        homeScreen();
        return;
    }

}


homeScreen();
