const boxes = document.querySelectorAll("cell");

/*Storing status element here*/
const statusDisplay = document.querySelector('.game-status');

let gameActive = true;

let currentPlayer = "X";

let clickedCell,clickedCellIndex;

/* checking to see winner*/
const winningConditions = [
    /*left to right*/
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    /*Diagonal*/
    [0,5,10,15],
    [3,6,9,12],
    /*sideways*/
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15]];

/*store current game state here, the form of empty strings allow to easily track played cells and validate game*/
let gameState = ["","","","","","","","","","","","","","","","",]

/*messages to display to user*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () =>    `Game ended in a Draw!`;
const currentPlayerTurn = () =>`It's ${currentPlayer}'s turn`;

/*Setting initial message*/
statusDisplay.innerHTML = currentPlayerTurn();

/*Functions i Will be using to make tic tac toe operational*/
function handleCellPlayed(){
    /*updating internal game state and UI*/
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}
function handlePlayerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(currentPlayer);
    statusDisplay.innerHTML = currentPlayerTurn();

}
function handelResultValidation(){
    handlePlayerChange();
}
function handleCellClick(clickedCellEvent){
    
    /*Saving clicked html element in variable*/
     clickedCell = clickedCellEvent.target;

    /*Grabbing data-cell-index attribute from clicked, it returns string so we use a parseint to turn to integer*/
     clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

    /*cehcking whether the cell has already been played or if game is paused*/
        if(gameState[clickedCellIndex] != "" || !gameActive){
            return;
        }
    /*continueing flow of game*/
    handleCellPlayed(clickedCell,clickedCellIndex);
    handelResultValidation();

}
function handleRestartGame(){

}
/*Adding event listener to game cells*/
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click",handleCellClick));
document.querySelector(".information3").addEventListener("click",handleRestartGame);