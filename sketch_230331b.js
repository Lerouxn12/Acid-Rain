// Nelly Leroux
// Pascal Huynh
// 502-A22-LA WEB AND FX: FROM THEORY TO PRACTICE section 00001
// Acid Rain
// The URL link to your interactive experience
/* the user has the option of moving the flower using their preferred method, such as dragging the mouse while pressing, 
using the arrow keys and also by clicking on the mouse around the screen.
The player moves the flower from left to right to avoid the acid rain drops.
The purpose of the game is to get the highest score possible indicated in the top right corner. */
/* The message behind this interactive game is with all the global climate change and pollution, it is difficult to grow greens.
The flowers show how easily nature can be destroyed by human made pollution. */

let x, y, size; 
let isGrowing = false; 
let s = 50; // starting y position 
let speed = 2; // speed of movement 
let diameter = 50; // diameter of the circle 
let obstacles = []; // array to store obstacle positions and sizes 
let score = 0; 

function setup() { 
  createCanvas(500, 500); 
  frameRate(30); // 30 frames per second 
  background(105, 255, 241); 
  textSize(20); 
  textAlign(RIGHT, TOP); 
  fill(255,0,0); 
  text("Score:", width - 80, 10); 
   
 // set the initial position and size of the flower 
  x = width/1; 
  y = height - 75; 
  size = 5; 
} 
  
function draw() { 
  background(105, 255, 241); 
// update and draw all the obstacles 
  for (let i = 0; i < obstacles.length; i++) { 
    let obstacle = obstacles[i]; 
    obstacle.y += speed; 
    fill(99, 212, 113); //the color of the obstacle 
    circle(obstacle.x, obstacle.y, obstacle.size); // draw the obstacle 
         
    let distance = dist(obstacle.x, obstacle.y, x, y); 
    if (distance < (obstacle.size / 2 + size / 2)) { 
 // collision detected, game over 
      textSize(40); 
      textAlign(CENTER, CENTER); 
      fill(255,0,0); 
      text("Game Over", width/2, height/2); 
      noLoop(); 
    } 
         
// check if obstacle is out of screen 
    if (obstacle.y > height) { 
      obstacles.splice(i, 1); // remove the obstacle from the array 
      score++; // increase the score 
    } 
  } 
   
// flower size limit 
  if (isGrowing) { 
    size += 2; 
    if (size >= 30) {  
      isGrowing = false; // set isGrowing to false to stop the growth 
    } 
  } 
   
// create a new obstacle periodically 
  if (frameCount % 20 == 0) { 
    createObstacle(); 
  } 
   
// display score 
  textAlign(RIGHT, TOP); 
  text(score, width - 10, 10); 
  
// petals 
  fill(random(255), random(255), random(255)); 
    circle(x+10,y+10,size); 
    circle(x,y+10,size); 
    circle(x-10,y+10,size); 
    circle(x-10,y,size); 
    circle(x+10,y-10,size); 
    circle(x+10,y,size); 
    circle(x-10,y-10,size); 
    circle(x,y-10,size); 
   
// center 
  fill(247, 203, 21); 
  circle(x, y, size, size); 
   
// stem 
  let stemLength = height - y - size/2; 
    stroke(148, 157, 106); 
    line(x, y+size/2, x, y+size/2+stemLength);  
  } 
  function createObstacle() { 
    let obstacleSize = random(15, 100); //the size of the obstacle 
    let obstacleX = random(width); //the x position of the obstacle 
    let obstacleY = random(-height, 0); //the y position of the obstacle above the screen 
    obstacles.push({x: obstacleX, y: obstacleY, size: obstacleSize}); //add obstacle to array 
  } 
  
  function mousePressed() { 
    x = mouseX; 
    isGrowing = true; 
  } 

  function keyPressed() {
// move the flower using arrow keys
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  } else if (keyCode === UP_ARROW) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    y += 10;
  }
}

  function mouseDragged() {
// move the flower using mouse dragged
  x = mouseX;
  y = mouseY;
}
