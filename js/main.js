

$(document).ready(function() {
    main();
});

var gameBoardUser = document.getElementById("gameBoardUser");
var gameBoardComputer = document.getElementById("gameBoardComputer");
var inputForm = document.getElementById("inputForm");

function createStartButton() {
    var startButton = document.createElement("button");
    var textButton = document.createTextNode("START GAME");
    startButton.setAttribute("id", "startButton");
    startButton.appendChild(textButton);
    inputForm.appendChild(startButton);
}

function createTestField() {
    var textField = document.createElement("input");
    textField.setAttribute("id", "textField");
    textField.setAttribute("placeholder", "Введите ваше имя");
    inputForm.appendChild(textField);
}


function createBoard(gameBoardContainer) {
    var rows = 10;
    var cols = 10;
    var squareSize = 50;

// make the grid columns and rows
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {

            var square = document.createElement("div");
            gameBoardContainer.appendChild(square);

            square.id = 's' + j + i;

            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;

            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}

var hitCount = 0;

var gameBoard = [
 [0,0,0,1,0,1,1,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,1,0,0,0],
 [0,0,0,0,0,0,1,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [1,0,0,0,0,0,1,1,1,1],
 [1,0,0,0,0,0,0,0,0,0],
 [1,0,0,1,0,0,0,0,0,0],
 [1,0,0,1,0,0,0,0,0,0],
 [1,0,0,0,0,0,0,0,0,0]
 ]


gameBoardComputer.addEventListener("click", fireTorpedo, false);


 function fireTorpedo(e) {
 if (e.target !== e.currentTarget) {
 var row = e.target.id.substring(1,2);
 var col = e.target.id.substring(2,3);

 if (gameBoard[row][col] == 0) {
 e.target.style.background = '#bbb';
 gameBoard[row][col] = 3;

 } else if (gameBoard[row][col] == 1) {
 e.target.style.background = 'red';
 gameBoard[row][col] = 2;

 hitCount++;
 if (hitCount == 17) {
 alert("All enemy battleships have been defeated! You win!");
 }

 } else if (gameBoard[row][col] > 1) {
 alert("Stop wasting your torpedos! You already fired at this location.");
 }
 }
 e.stopPropagation();
 }




function main() {
    createTestField();
    createStartButton();
    createBoard(gameBoardUser);
    createBoard(gameBoardComputer);
    fireTorpedo();
}
