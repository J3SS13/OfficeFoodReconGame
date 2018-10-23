

![alt text](https://github.com/J3SS13/OfficeFoodReconGame/blob/master/IntroDialog.png)


Objective:
Avoid the orange dots, collect the stars, and bring them to your friend.
You cannot walk off the board or through the desks and orange dots. You lose if you run into an orange dot. You win when you collect all the stars, and find your friend.

Game Play:
The UI interaction will be an office setting. The triangle is the character, navigating the office to find free food. They must avoid annoying coworkers, walk around desks, and collect the food. Once they have collected all the food, they need to meet their friend in the room at the top right. If they run into an orange dot, they will have to start over.

![alt text](https://github.com/J3SS13/OfficeFoodReconGame/blob/master/styleguide10x10.jpg)



Phase 2:  
Add home page with rules, an introduction, story & start button.
The orange dots pace back and forth.

Phase 3:
Set a time limit with a count down clock (change lose condition to running out of time).  Now, if you run into an orange dot, there is a text box you read and then the triangle is reset to the starting position.

Main Technologies:
Javascript, grid collision

Foreseen Issues:
I plan to use Blerg as my guide for how I should work on this.  I foresee issues with the the features outlined in steps 2 & 3, and since they are not essential for an MVP, I will tackle those if I have time.


Technical Specifications:

The page will load with the triangle in the lower right corner.  The user will control the triangle with the arrow keys on their keyboard.

They cannot move off the game board, through walls or into any circle. Nothing besides lack of movement will be an effect of running into a wall or to the edge of the gameboard, but if the user tries to move the triangle to a square with an orange circle, they lose and the game will reset.

The objective of the game is to collect all the stars and then move to the square next to the green circle. When you win, a dialog box will appear & the game will reset (or proceed to the next game level- if the level exists).
