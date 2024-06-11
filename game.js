var gamePattern = [];
var userClickPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#level-title").text("Level " + level);  
    level++;
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]){
        if (currentLevel < gamePattern.length - 1){
            pass;
        }else{
            setTimeout(nextSequence, 1000);
            userClickPattern = [];    
        }
    }else{
        makeSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");  
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickPattern = [];
}

function makeSound(key){
    switch (key) {
        case key:
            var key = new Audio("https://github.com/jordianojr/SimonGame/blob/main/" + key + ".mp3");
            key.play();
        break;

        default:
    }
}

function buttonPress(key){
    var currentKey = document.querySelector("#" + key);
    currentKey.classList.add("pressed");
    setTimeout(function(){    
        currentKey.classList.remove("pressed");
    },100)}

$(document).on("click", ".btn", function () {
    var userChosenPattern = this.id;
    userClickPattern.push(userChosenPattern);
    makeSound(userChosenPattern);
    buttonPress(userChosenPattern);
    checkAnswer(userClickPattern.length - 1);
})

$(document).on("keydown", function(){
    if (level !== 0){
        makeSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");  
        startOver();
    }else{
    nextSequence();
    $("body").removeClass("game-over");
    }
})

