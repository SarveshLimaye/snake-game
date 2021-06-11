import { expandSnake,onSnake } from "./snake.js";
import{randomGridPosition} from "./grid.js"


let food=getRandomFoodPosition();
const EXPANSION_RATE=2

export function update(){
 if (onSnake(food)){
     expandSnake(EXPANSION_RATE)
     food=getRandomFoodPosition()
 }
}

 export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)


}

function getRandomFoodPosition(){
  let newfoodPosition 
  while(newfoodPosition==null || onSnake(newfoodPosition)){

  
  newfoodPosition=randomGridPosition();
}
return newfoodPosition

}