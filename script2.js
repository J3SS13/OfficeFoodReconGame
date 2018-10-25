
const welcomeboardElement = document.querySelector('.welcome-board');
const boardElement = document.querySelector('#board-id');
const characterElement = document.querySelector('.character');
const body = document.querySelector('body');
const header = body.querySelector('header');
const playGameButton = body.querySelector('button');


/////////////////////    Welcome Page      /////////////////////

const buildWelcomePage = function() {
  playGameButton.className = "play-game";
  playGameButton.addEventListener("click", function(){
    setTimeout(clickButton, 175);
    setTimeout(buildBoard, 175);
  });
}

buildWelcomePage();

const clickButton = ()=>{
  playGameButton.removeEventListener('click', (buildBoard));
  playGameButton.className = "hidden";
  boardElement.className = "board";
  boardElement.innerHTML = "";
  // header.innerHTML = '<h1>Office Food Recon</h1>';
  // change button to hidden
  // change .game-info to .hidden
}

/////////// TIMER  Global Variables /////////////

let setTimer;
let timeOut = 20;
let footerDiv = body.querySelector('#timer')


/////////////////////     GAME      ///////////////////////////


const character = {x:11, y:11};
const friends = [{x:10, y:0}];

const friendZone = [
  {x:11, y:0},
  {x:10, y:1},
  {x:9, y:0},
];
let foodEaten = 0;

const desks = [
  {x:0, y:10},
  {x:1, y:10},
  {x:2, y:10},
  {x:0, y:6},
  {x:1, y:6},
  {x:2, y:6},
  {x:0, y:3},
  {x:1, y:3},
  {x:2, y:3},
  {x:5, y:11},
  {x:5, y:10},
  {x:5, y:9},
  {x:4, y:7},
  {x:4, y:6},
  {x:4, y:5},
  {x:4, y:2},
  {x:4, y:1},
  {x:4, y:0},
  {x:8, y:11},
  {x:8, y:10},
  {x:8, y:9},
  {x:8, y:0},
  {x:8, y:1},
  {x:8, y:2},
  {x:8, y:7},
  {x:9, y:7},
  {x:10, y:7},
  {x:9, y:4},
  {x:10, y:4},
  {x:11, y:4}
];

const coworkers = [
  {x:1, y:2},
  {x:3, y:4},
  {x:2, y:9},
  {x:6, y:3},
  {x:8, y:5},
  {x:9, y:9},
];

const foodz = [
  {x:0, y:1},
  {x:0, y:7},
  {x:1, y:4},
  {x:2, y:0},
  {x:5, y:1},
  {x:6, y:7},
  {x:9, y:5}
];

/// Render desks to board
const renderDesks = () => {
  for (let i = 0; i < desks.length; i +=1){
    const desk = desks[i];
    const deskElement = document.createElement('div');
    deskElement.className = 'desk';
    deskElement.style.left = (desk.x * 100).toString() + 'px';
    deskElement.style.top = (desk.y * 100).toString() + 'px';
    boardElement.appendChild(deskElement);
  }
}


/// Render coworkers to board
const renderCoworkers = () => {
  for (let i = 0; i < coworkers.length; i +=1){
    const coworker = coworkers[i];
    const coworkerElement = document.createElement('div');
    coworkerElement.className = 'coworker';
    coworkerElement.id= `coworker${i}`;
    coworkerElement.style.left = (coworker.x * 100).toString() + 'px';
    coworkerElement.style.top = (coworker.y * 100).toString() + 'px';
    boardElement.appendChild(coworkerElement);
  }
}

/// Render food to board
const renderFood = () => {
  for (let i = 0; i < foodz.length; i +=1){
    const food = foodz[i];
    const foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.id= `food${i}`;
    foodElement.style.left = (food.x * 100).toString() + 'px';
    foodElement.style.top = (food.y * 100).toString() + 'px';
    boardElement.appendChild(foodElement);
  }
}

//render friend
const renderFriend = () => {
  for(let i = 0; i < friends.length; i +=1){
    const friend = friends[i];
    const friendElement = document.createElement('div');
    friendElement.id = "friend"
    friendElement.style.left = (friend.x * 100).toString() + 'px';
    friendElement.style.top = (friend.y * 100).toString() + 'px';
    boardElement.appendChild(friendElement);
  }

}

// render hero character
const renderCharacterStyle = () => {
  characterElement.id = "hero"
  characterElement.style.left = (character.x * 100).toString() + 'px';
  characterElement.style.top = (character.y * 100).toString() + 'px';
  }


const buildBoard = function(){
debugger

footerDiv.innerHTML = "Ready?";
    setTimer =  setInterval(() => {
footerDiv.innerHTML = "Set!";
          if (timeOut > 0){
            footerDiv.innerHTML = timeOut + " seconds left!";
            timeOut -=1;
          }
          else if (timeOut === 0){
            timeOut = 20;
            resetBoard();
          }
      }, 1000);

  renderDesks();
  renderCoworkers();
  renderFood();
  renderFriend();
  renderCharacterStyle();


}

// buildBoard();


/// MOVE LOGIC :
// check to see if character is on the board
const isCoordinateInGrid =(x,y) =>{
  if (x<0 || y<0 || x>11 || y>11) {
    return false;
  }
    return true;
}
//check to see if the square contains desk
const isThereDesk = function(x,y){
  for (let i = 0; i < desks.length; i +=1) {
    const desk = desks[i];
    if (desk.x === x && desk.y === y) {
      return true;
    }
  }
  return false;
}
//check to see if the square contains coworker
const isThereCoworker = function(x,y){
  for (let i = 0; i < coworkers.length; i +=1) {
    const coworker = coworkers[i];
    if (coworker.x === x && coworker.y === y) {
      lose();
      return true;
    }
  }
  return false;
}


const isThereFriend = function(x,y){
  for (let i = 0; i < friends.length; i +=1) {
    const friendLocal = friends[i];
    if (friendLocal.x === x && friendLocal.y === y) {
      // setTimeout(()=> window.alert("I'm so hungryyyy"), 200);
      return true;
    }
  }
  return false;
}



const isThereFriendZone = function(x,y){
  for (let i = 0; i < friendZone.length; i +=1){
    const friendZ = friendZone[i];
      if (friendZ.x === character.x && friendZ.y === character.y && foodEaten >= foodz.length){
        console.log("win");
        win();
      } if (friendZ.x === character.x && friendZ.y === character.y && foodEaten < foodz.length){
        console.log("hungry");
        setTimeout(()=> window.alert("I'm so hungryyyy"), 200);
      }
  }
}


const eatTheFood = function(x,y){
  for(let i = 0; i < foodz.length; i +=1){
    const food = foodz[i];
    if(food.x === character.x && food.y === character.y) {
      const food = document.querySelector(`#food${i}`)
    food.setAttribute('style', 'display: none')
      foodEaten += 1;

    }
  }
}


//Check to see if character can move to a space
const canMoveTo = (x, y) => {
  // If the coordinate to move is outside of the grid,
  // the player can't move to it.
  if (!isCoordinateInGrid(x, y)) {
    return false;
  }
  // If there is a rock at the coordinate,
  // the player can't move to it.
  if (isThereDesk(x, y)) {
    return false;
  }
  if (isThereCoworker(x, y)) {
    return false;
  }
  if (isThereFriend(x, y)) {
    return false;
  }
  return true;
};

// Move character
const moveCharacter = function (x,y){
  const character = document.querySelector('.character');
  character.style.top = (y*100).toString() + "px";
  character.style.left= (x*100).toString() + "px";
  eatTheFood();
  isThereFriendZone();
}



// if canMoveTo return true,  run moveCharacter()

const moveRight = function(){
  if (canMoveTo(character.x + 1, character.y)){
    character.x +=1;
    moveCharacter(character.x , character.y)
  }
}

const moveLeft = function(){
  if(canMoveTo(character.x - 1, character.y)){
    character.x -=1;
    moveCharacter(character.x, character.y);
  }
}

const moveUp = function(){
  if(canMoveTo(character.x, character.y - 1)){
    character.y -=1;
    moveCharacter(character.x, character.y);
  }
}

const moveDown = function(){
  if(canMoveTo(character.x, character.y + 1)){
    character.y +=1;
    moveCharacter(character.x, character.y);
  }
}


document.body.addEventListener('keydown', evt => {
  const keyCode = evt.keyCode;
  if ([37, 38, 39, 40].includes(evt.keyCode)) {
    evt.preventDefault();
  }
  switch (evt.keyCode) {
    case 37:
    moveLeft();
    break;
    case 38:
    moveUp();
    break;
    case 39:
    moveRight();
    break;
    case 40:
    moveDown();
    break;
  }
});



const win = function() {
        setTimeout(()=> window.alert("Good job finding all the food! Now, let's eat!"), 200);
        // removeListeners();
        setTimeout(resetBoard, 200);
}

const lose = function(){
  setTimeout(()=> window.alert("Hey! I need you to fix my computer."), 200);
  // removeListeners();
  setTimeout(resetBoard, 200);
}

const resetBoard = function(){
      clearInterval(setTimer);
      timeOut = 20;
      boardElement.innerHTML = '';
      foodEaten = 0;
      character.x = 11;
      character.y = 11;
      characterElement.style.top = "1100px";
      characterElement.style.left = "1100px"
      buildBoard();
}
