Tic-Tac-Toe Game
A simple Tic-Tac-Toe game built with React.js.

Table of Contents
Demo
Features
Installation
Usage
Components
Game Logic
Styling
Contributing
License
Demo
Check out the live demo here.

Features
Player vs Player mode
Displays the winner when the game is won
Simple and intuitive UI
Installation
To get a local copy up and running follow these simple steps:

Clone the repo:
sh
Copy code
git clone https://github.com/DeepeshHial/Tic-Tac-Toe
Navigate to the project directory:

Copy code
cd tic-tac-toe
Install NPM packages:

Copy code
npm install
Usage
To start the app locally, run:


Copy code
npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

Components
Board.js: The main game board component.
Square.js: A single square component on the game board.
Game Logic
The game board is managed by the Board component which maintains the state of the game. The state includes:

state: An array of 9 elements representing the 9 squares of the game board.
xoro: A boolean that toggles between true and false to determine the current player's move (X or O).
The clickhandle function updates the state when a square is clicked. The checkwinner function checks for a winning combination.

Styling
The styles for the components are defined in board.module.css.
