const boardElement = document.querySelector('.board');
const characterElement = document.querySelector('.character');

const character = {x:0, y:0};

const friend = [
  {x:11, y:11}
]
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
renderDesks();

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
    console.log(coworker);
  }
}
renderCoworkers();

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
    console.log(food);
  }
}
renderFood();




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
      return true;
    }
  }
  return false;
}

const eatTheFood = function(x,y){
  for(let i = 0; i < foodz.length; i +=1){
    const food = foodz[i];
    if(food.x === character.x && food.y === character.y) {
      console.log('this is happening')
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
  return true;
};

// Move character
const moveCharacter = function (x,y){
  const character = document.querySelector('.character');
  character.style.top = (y*100).toString() + "px";
  character.style.left= (x*100).toString() + "px";
  eatTheFood();
}



// if canMoveTo return true,  run moveCharacter()

const moveRight = function(){
  if (canMoveTo(character.x + 1, character.y)){
    character.x +=1;
    console.log("right");
    moveCharacter(character.x , character.y)
  }
}

const moveLeft = function(){
  if(canMoveTo(character.x - 1, character.y)){
    character.x -=1;
    console.log("left");
    moveCharacter(character.x, character.y);
  }
}

const moveUp = function(){
  if(canMoveTo(character.x, character.y - 1)){
    character.y -=1;
    console.log("up");
    moveCharacter(character.x, character.y);
  }
}

const moveDown = function(){
  if(canMoveTo(character.x, character.y + 1)){
    character.y +=1;
    console.log("down")
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

// /Pickup food
// function collectFood(){
//   for(let i = 0; i < food.length; i +=1){
//       if (food[i].x === character.x &&  food[i].y ===character.y) {
//         console.log('this is happening')
//         const food = document.querySelector(`#food${i}`)
//       food.setAttribute('style', 'display: none')
//         food[i].x = null;
//         food[i].y = null;
//       }
//   }
//
// }
