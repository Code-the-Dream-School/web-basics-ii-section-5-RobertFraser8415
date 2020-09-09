
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

window.localStorage.setItem("keepNames", "")

function gameInit(){
  const keepNames = window.localStorage.getItem("keepNames")
let redPlayer = keepNames ? window.localStorage.getItem("player1Name") : prompt("What is your name");
let bluePlayer = keepNames ? window.localStorage.getItem("player2Name") : prompt("What is your name?");
window.localStorage.setItem("player1Name", redPlayer)
window.localStorage.setItem("player2Name", bluePlayer)
document.getElementById("name_player1").innerText = redPlayer;
document.getElementById("name_player2").innerText = bluePlayer;

let nameSpot = document.getElementById("name_player1");
console.log(nameSpot);

let player1Board = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];
let numberOfBoats = 0; 
while (numberOfBoats <= 3) {
  
  let x = Math.round(Math.random() * 3);
  let y = Math.round(Math.random() * 3);
  let isBoatPresent = player1Board[x][y] === 1;
  if (!isBoatPresent) {player1Board[x][y] = 1;
      numberOfBoats++}
}               
let player2Board = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];
numberOfBoats = 0; 
while (numberOfBoats <= 3) {
  
  let x = Math.round(Math.random() * 3);
  let y = Math.round(Math.random() * 3);
  let isBoatPresent = player2Board[x][y] === 1;
  if (!isBoatPresent) {player2Board[x][y] = 1;
      numberOfBoats++}

}  
let player1Boats = 4;
let player2Boats = 4;
const board_Player1 = document.getElementById('board_player1');
console.log(player2Board);
for (var x = 0; x < 4; x++) {

    const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement('div');
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
      cell.value = 0;//state of the cell

      //this function adds the click event to each cell
      cell.addEventListener( 'click', (e) => {
          
          let cell = e.target; // get the element clicked
          let x = parseInt(cell.textContent[0]);
          let y = parseInt(cell.textContent[2]);
          let hit = player1Board[x][y] === 1;
          if (hit){player1Boats--; player1Board[x][y] === 0;
            cell.style.background ="red";}
            else {cell.style.visibility = 'hidden';}
          console.log( cell.textContent) 
          if (player1Boats === 0 ){alert(`Congratulations ${bluePlayer}! You Win!`)}//display the coordinates in the console
          // this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
           //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
      });

      li.appendChild(cell); //adding each cell into the row number x
    }

     board_Player1.appendChild(li); //adding each row into the board
}
const board_Player2 = document.getElementById('board_player2');

for (var x = 0; x < 4; x++) {

    const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement('div');
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
      cell.value = 0;//state of the cell

      //this function adds the click event to each cell
      cell.addEventListener( 'click', (e) => {
        let cell = e.target; // get the element clicked
        let x = parseInt(cell.textContent[0]);
        let y = parseInt(cell.textContent[2]);
        let hit = player2Board[x][y] === 1;
        console.log(hit);
        console.log(player2Board, x, y);
        if (hit){player2Boats--; player2Board[x][y] === 0;
          cell.style.background ="blue";}
          else {cell.style.visibility = 'hidden';}
        console.log( cell.textContent) 
        if (player2Boats === 0 ){alert(`Congratulations ${redPlayer}! You Win!`)} // get the element clicked
          console.log( cell.textContent) //display the coordinates in the console
          // this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
          //cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
      });

      li.appendChild(cell); //adding each cell into the row number x
    }

     board_Player2.appendChild(li); //adding each row into the board
}
}
gameInit(false, false);
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function clearBoards(){
  removeAllChildNodes(document.getElementById('board_player1'))
  removeAllChildNodes(document.getElementById('board_player2'))
}
function clearBoardsAndStartGame(){
  clearBoards();
  window.localStorage.setItem("keepNames", "")
  gameInit();
}
function startNewGame(){
  clearBoards();
  window.localStorage.setItem("keepNames", "true")
  gameInit();
}
document.querySelector("#reset").addEventListener('click', clearBoardsAndStartGame) 
document.querySelector("#new-game").addEventListener('click', startNewGame)
         