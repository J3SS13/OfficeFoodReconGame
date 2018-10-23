

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





.food {
  width: 80px;
  height: 80px;
  background: pink;
}
