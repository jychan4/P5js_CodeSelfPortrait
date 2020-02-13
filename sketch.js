//Yew Journ Chan
// Weekly Assigment 3
// Code Self Portrait P5.js

var stateKey;
var stateStatic = 0; //Tough Guy
var stateScared = 1;  //Rough Guy
var stateSurprise = 2; //Enough Guy
var stateAngry = 3; //Puff Guy
var stateTough = 4; //Bad Guy

//----------------------------------------------------------------------------
//setup canvas, background, static states
function setup() {
  createCanvas(500,600);
  background(40,214,235);
  state = stateStatic;
}

//----------------------------------------------------------------------------
//function to call which state to draw when triggered
function draw() {
  //if (state != stateStatic) {
    //checkKeyUp();
  //}
  if (state == stateStatic) {
    drawStatic();
  }
  else if (state == stateScared) {
    drawScared();
  }
  else if (state == stateAngry) {
    drawAngry();
  }
  else if (state == stateSurprise) {
    drawSurprise();
  }
  else if (state == stateTough) {
    drawTough();
  }
}

//----------------------------------------------------------------------------
//draws original static image 
function drawStatic() {
  background(102,194,255);
  stroke(0);
  fill(0);
  textSize(25);
  textFont("Helvetica");
  text("so you're a", 125, 400);
  stroke(255);
  fill(255);
  textSize(30);
  text("Tough Guy;", 255, 400);

  //draw hair
  var y = 150;
  var yLowerLimit = 110;
  for (var j = 150;j<178;j=j+3){
    stroke(0);
    if(y<yLowerLimit){
      y=yLowerLimit;
    }else{
      y=y-5;
      if(y<yLowerLimit){
        y=yLowerLimit;
      }
    }
    line(j,150,j,y);
  }
 //rest of hair
 for (var i = 175; i < 351; i = i+3) {
   stroke(0);
   line(i, 150, i, yLowerLimit);
 }
  // draw face
  stroke(253, 235, 212);
  fill(253, 241, 212);
  rect(150, 150, 200, 200);
  var leftX = 215;
  var rightX = 315;
  var y = 207;
  var eyeWidth =50;
  var eyeHeight =40;
  
  //left eye
  fill(255);
  stroke(255);
  ellipse(200,200,eyeWidth,eyeHeight);
  fill(0);
  ellipse(leftX,y,13,10);
  
  //right eye
  fill(255);
  stroke(255);
  ellipse(300,200,eyeWidth, eyeHeight);
  fill(0);
  ellipse(rightX,y,13,10);
  
  //mouth
  fill(0);
  stroke(0);
  rect(215,285,68,7);
  rect(230,300,24,3);

  //nose
  stroke(111,88,63);
  fill(0);
  triangle(250,270,240,270,260,270);
  triangle(250,230,240,270,260,270);
  
  //sides
  stroke(199,32,43);
  fill(199,32,43);
  rect(150,150,200,20); 
  fill(0);
  stroke(0);
  rect(150,320,200,30); 

  //ears
  stroke(253, 235, 212);
  fill(253, 235, 212);
  rect(140,215,10,30);
  rect(350,215,10,30);
}
//----------------------------------------------------------------------------
//prints new state when '1' is pressed
function drawScared() {
  background(255,184,41);
  stroke(0);
  fill(0);
  textSize(25);
  textFont("Kreon");
  text("like it really", 125, 400);
  stroke(255);
  fill(255);
  textSize(30);
  text("Rough Guy;", 255, 400);

  //draw hair
  var y = 150;
  var yLowerLimit = 110;
  for (var j = 150;j<178;j=j+3){
    stroke(0);
    if(y<yLowerLimit){
      y=yLowerLimit;
    }else{
      y=y-5;
      if(y<yLowerLimit){
        y=yLowerLimit;
      }
    }
    line(j,150,j,y);
  }
 //rest of hair
 for (var i = 175; i < 351; i = i+3) {
   stroke(0);
   line(i, 150, i, yLowerLimit);
 }
  // draw face
  stroke(253, 235, 212);
  fill(253, 241, 212);
  rect(150, 150, 200, 200);
  var leftX = 190;
  var rightX = 290;
  var y = 207;
  var eyeWidth =60;
  var eyeHeight =60;
  
  //left eye
  fill(255);
  stroke(255);
  ellipse(200,200,eyeWidth,eyeHeight);
  fill(0);
  ellipse(leftX,y,20,20);

  //right eye
  fill(255);
  stroke(255);
  ellipse(300,200,eyeWidth, eyeHeight);
  fill(0);
  ellipse(rightX,y,20,20);
  
  //nose
  stroke(111,88,63);
  fill(0);
  triangle(250,270,240,270,260,270);
  triangle(250,230,240,270,260,270);

  //ears
  stroke(253, 235, 212);
  fill(253, 235, 212);
  rect(140,215,10,30);
  rect(350,215,10,30);

  //animate smile
  if (mouseIsPressed == true) {
      noStroke();
  fill(232,58,87);
  arc(mouseX, mouseY, 70, 70, 0, PI, CHORD);
  }

}
//----------------------------------------------------------------------------
//prints new state when '2' is pressed
function drawAngry() {
  background(79,138,255);
  stroke(0);
  fill(0);
  textSize(25);
  textFont("Helvetica");
  text("just can't get", 105, 400);
  stroke(255);
  fill(255);
  textSize(30);
  text("Enough Guy;", 255, 400);

   //draw hair
  var y = 150;
  var yLowerLimit = 110;
  for (var j = 150;j<178;j=j+3){
    stroke(0);
    if(y<yLowerLimit){
      y=yLowerLimit;
    }else{
      y=y-5;
      if(y<yLowerLimit){
        y=yLowerLimit;
      }
    }
    line(j,150,j,y);
  }
 //rest of hair
 for (var i = 175; i < 351; i = i+3) {
   stroke(0);
   line(i, 150, i, yLowerLimit);
 }
  // draw face
  stroke(253, 235, 212);
  fill(253, 241, 212);
  rect(150, 150, 200, 200);
  var leftX = 200;
  var rightX = 300;
  var y = 182;
  var eyeWidth =50;
  var eyeHeight =50;
  
  //Draw loop to run every frame
  //Set initial position of pupils
  var leftX = 200;
  var rightX = 300;
  var y = 215;
  //Set eye size globaly 
  var eyeWidth =60;
  var eyeHeight = 60;
  //Get the position of the mouse to move the pupils around
  if(mouseX<250&&mouseY>150&&mouseY<350){
    leftX = 185;
    rightX = 285;
  }else if(mouseX>=250&&mouseY>150&&mouseY<350){
    leftX = 215;
    rightX = 315;
  }else if(mouseY<150){
    y = 200;
  }else if(mouseY>250){
    y = 230;
  }
  //Left Eye
  fill(255);
  stroke(255);
  ellipse(200,215,eyeWidth,eyeHeight);
  fill(0);
  ellipse(leftX,y,20,20);
  //Right Eye
  fill(255);
  stroke(255);
  ellipse(300,215,eyeWidth,eyeHeight);
  fill(0);
  ellipse(rightX,y,20,20);
  
  //mouth
  fill(0);
  stroke(0);
  ellipse(270,300,60,10);

  //nose
  stroke(111,88,63);
  fill(0);
  triangle(250,270,240,270,260,270);
  triangle(250,230,240,270,260,270);
  
  //sides
  fill(10);
  rect(150,315,200,30); 

  //ears
  stroke(253, 235, 212);
  fill(253, 235, 212);
  rect(140,215,10,30);
  rect(350,215,10,30);

}
//----------------------------------------------------------------------------
//prints new state when '3' is pressed
function drawSurprise() {
  background(237,19,19);

  // draw face and body
  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(250, 200, 200, 200);
  ellipse(255, 600, 700, 700);
  var leftX = 200;
  var rightX = 300;
  var y = 182;
  var eyeWidth =50;
  var eyeHeight =50;
  
  //Draw loop to run every frame
  //Set initial position of pupils
  var leftX = 200;
  var rightX = 300;
  var y = 215;
  //Set eye size globaly 
  var eyeWidth =60;
  var eyeHeight = 60;
 
  //Left Eye
  fill(0);
  ellipse(leftX,y,20,30);

  //Right Eye
  fill(0);
  ellipse(rightX,y,20,30);
  
  //mouth
  fill(0);
  stroke(0);
  rect(210,210,90,10);
  
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(25);
  textFont("Helvetica");
  text("chest always so", 80, 400);
  strokeWeight(1.5);
  stroke(0);
  fill(255);
  textSize(35);
  text("PUFF GUY;", 265, 400);

}
//----------------------------------------------------------------------------
//prints new state when '4' is pressed
function drawTough() {
  background(0);
  textFont("Helvetica");
  textSize(20);
  strokeWeight(1.5);
  stroke(249,255,64);
  fill(249,255,64);
  text("when we all fall asleep where do we go?", 70, 100);

  //Draw loop to run every frame
  //Set initial position of pupils
  var leftX = 200;
  var rightX = 300;
  var y = 215;
  //Set eye size globaly 
  var eyeWidth =60;
  var eyeHeight = 50;
  //Get the position of the mouse to move the pupils around
  if(mouseX<250&&mouseY>150&&mouseY<350){
    leftX = 185;
    rightX = 285;
  }else if(mouseX>=250&&mouseY>150&&mouseY<350){
    leftX = 215;
    rightX = 315;
  }else if(mouseY<150){
    y = 200;
  }else if(mouseY>250){
    y = 230;
  }
  //Left Eye
  fill(255);
  stroke(255);
  ellipse(200,215,eyeWidth,eyeHeight);
  fill(0);
  ellipse(leftX,y,15,20);
  //Right Eye
  fill(255);
  stroke(255);
  ellipse(300,215,eyeWidth,eyeHeight);
  fill(0);
  ellipse(rightX,y,15,20); 

  if (mouseIsPressed == true) {
      noStroke();
  fill(0);
  rect(0, 110, 500, 600);
  }
 
}
//----------------------------------------------------------------------------
//function to define switching states when different numbers are pressed
function keyPressed() {
  if (key == '1') {
    state = stateScared;
    stateKey = key;
  }
  if (key == '3') {
    state = stateSurprise
    stateKey = key
  }
  if (key == '2'){
    state = stateAngry
    stateKey = key
  }
  if (key == '4') {
    state = stateTough
    stateKey = key
  }
  if (key == '0'){
    state = stateStatic
    stateKey = key
  }
}