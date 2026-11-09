let x = 200;
let y = 200;
let deltaX = 0;
let deltaY = 0;
let score = 60;
let carrotX;
let carrotY;
let rainX;
let rainY;
let gotCarrot = false;
let gotRain = false;
let numCarrots = 0;
let numRain = 0;
let c = 0;
let a = 255;
let b = 400;
let speed = 5;
let snowX = 100;
let snowY = 0;
let snowY2 = 45;
let snowX2 = 280;
let snowY3 = 70;
let snowX3 = 380;
let snowY4 = 20;
let snowX4 = 450;
let snowY5 = 48;
let snowX5 = 534;
let level = 1;
let badCloudX;
let badCloudY;
let badCloudDeltaX = -1;
let badCloudDeltaY = -1;

function setup() {
  createCanvas(500, 400);
  carrotX = random(500);
  carrotY = random(400);
  badCloudX = random(400);
  badCloudY = random(500);
}

function draw() {
  if (level == 1) {
  }
  background(214, 246, 255);
  print(mouseX, mouseY);

  //Boundaries
  //Border

  fill(0, 0, 0);
  stroke(255, 255, 255);
  ellipse(x - 1, y - 81, 1, 1);
  ellipse(x - 65, y + 46, 1, 1);
  ellipse(x + 55, y + 152, 1, 1);
  ellipse(x - 7, y + 185, 1, 1);

  if (x < 0) {
    x = 0;
  }

  if (x > 500) {
    x = 500;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > 400) {
    y = 400;
  }

  //Color
  
  stroke(237, 237, 237);
  strokeWeight(50);
  line(0, 413, 143, 389);
  line(143, 389, 343, 389);
  line(343, 389, 430, 394);
  line(430, 394, 526, 413);
  strokeWeight(1);

  //Background shapes

  //Christmas tree

  noStroke();
  fill(45, 168, 123, 100);
  triangle(343, 370, 413, 129, 480, 369);
  fill(115, 77, 34, 100);
  rect(395, 370, 40, 40);
  fill(253, 255, 207, 200);
  triangle(400, 157, 413, 118, 424, 157);
  triangle(393, 132, 431, 134, 411, 157);

  stroke(255, 255, 255);
  line(395, 197, 434, 211);
  line(437, 220, 376, 260);
  line(376, 260, 458, 296);
  line(464, 315, 354, 336);

  noStroke(0);
  fill(c, a, b, 150);
  ellipse(405, 201, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(a, c, b, 150);
  ellipse(425, 208, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, a, c, 150);
  ellipse(430, 227, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(b, c, c, 150);
  ellipse(410, 238, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, c, b, 150);
  ellipse(387, 253, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, a, b, 150);
  ellipse(402, 271, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(a, c, b, 150);
  ellipse(425, 284, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(b, b, c, 150);
  ellipse(449, 293, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, c, a, 150);
  ellipse(453, 319, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, a, b, 150);
  ellipse(422, 324, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(b, c, b, 150);
  ellipse(392, 328, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  fill(c, a, c, 150);
  ellipse(364, 334, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  //Enemy/Bad Guy (Cloud)

  fill(89, 203, 255);
  noStroke(0);
  ellipse(badCloudX, badCloudY, 30, 40);
  ellipse(badCloudX, badCloudY, 30, 40);
  ellipse(badCloudX, badCloudY, 30, 40);
  ellipse(badCloudX, badCloudY, 30, 40);
  ellipse(badCloudX, badCloudY, 30, 40);

  if (dist(badCloudX, badCloudY, x, y) < 100) {
    fill(0, 0, 0);
    textSize(50);
    text("Don't melt!", 37, 224);
  }

  if (badCloudX > 550) {
    badCloudDeltaX = -1 - random(5);
  }

  if (badCloudX < 30) {
    badCloudDeltaX = 1 + random(5);
  }

  if (badCloudY > 350) {
    badCloudDeltaY = -1 - random(5);
  }

  if (badCloudY < 30) {
    badCloudDeltaY = 1 + random(5);
  }

  //Snowman shapes

  stroke(161, 161, 161);
  fill(255, 255, 255);
  ellipse(x, y, 80, 80);
  ellipse(x - 3, y + 77, 100, 100);
  ellipse(x - 4, y + 150, 120, 120);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  rect(x - 40, y - 40, 80, 12);
  rect(x - 30, y - 80, 60, 40);

  fill(255, 190, 140);
  noStroke(0);
  triangle(x - 2, y + 7, x + 18, y + 10, x - 2, y + 16);

  stroke(0, 0, 0);
  line(x - 18, y + 22, x - 2, y + 25);
  line(x - 2, y + 25, x + 21, y + 22);

  fill(0, 0, 0);
  ellipse(x - 15, y - 6, 10, 10);
  ellipse(x + 11, y - 6, 10, 10);

  ellipse(x - 3, y + 48, 10, 10);
  ellipse(x - 3, y + 70, 10, 10);
  ellipse(x - 3, y + 118, 10, 10);
  ellipse(x - 3, y + 154, 10, 10);
  ellipse(x - 3, y + 187, 10, 10);

  x = x + deltaX;
  y = y + deltaY;
  badCloudX = badCloudX + badCloudDeltaX;
  badCloudY = badCloudY + badCloudDeltaY;

  //Getting carrots, hit by raindrops, and countdown

  x = x + deltaX;
  y = y + deltaY;

  noStroke(0);
  fill(255, 190, 140);
  triangle(
    carrotX,
    carrotY,
    carrotX + 35,
    carrotY + 8,
    carrotX + 2,
    carrotY + 21
  );

  if (dist(carrotX + 25, carrotY, x, y) < 20) {
    gotCarrot = true;
    carrotX = random(400);
    carrotY = random(400);
    numCarrots = numCarrots + 1;
  }

  if (gotCarrot == true) {
    fill(255, 190, 140);
    noStroke(0);
    triangle(x - 7, y + 7, x + 16, y + 9, x - 5, y + 16);
  }

  noStroke(0);
  fill(50, 111, 168);
  textSize(15);
  text("Collect as many carrots as you can in 1 minute!", 16, 54);
  text("To collect carrots, touch the snoman's face with the carrot.", 16, 75);
  fill(35, 87, 135);
  text("You need at least 3 carrots in order to win!", 16, 96);
  fill(24, 59, 92);
  text("Stay away from the raindrop!", 16, 117);

  noStroke(0);
  fill(24, 24, 112);
  if (numCarrots == 1) {
    text("You have " + numCarrots + " Carrots Collected! Great job!", 12, 355);
  } else {
    text("You have " + numCarrots + " Carrots Collected! Great job!", 12, 355);
  }

  if (score>0){
    score = score - 1/60;
  }
  
  fill(65, 176, 240);
  textSize(17);
  text("Countdown = " + round(score), 17, 31);
  
  if(score<=0){
    if (numCarrots <= 2){
      level = 3
    }
    else {
      level = 2
    }
  }

  if (dist(rainX + 25, rainY, x, y) < 20) {
    gotRain = true;
    rainX = random(400);
    rainY = random(400);
    numRain = numRain + 1;
  }

  //Color Boundary
  
  fill(156, 233, 255);
  rect(0, 0, 500, 5);
  
  if (red(get(x, y-2))==156) { 
    y=y+10; 
  }

  fill(255, 255, 255);
  ellipse(x, y-78, 1, 1);
  
  //Words and Text

  noStroke(0);
  fill(13, 114, 168);
  textFont("Times", 15);
  text("By: Kailey Liou, 2021-2022", 13, 381);

  //Snow

  fill(255, 255, 255);
  ellipse(snowX, snowY, 12, 12);
  snowY = snowY + 3;
  if (snowY > 400) {
    snowY = 0;
    snowX = random(500);
  }

  fill(255, 255, 255);
  ellipse(snowX2, snowY2, 12, 12);
  snowY2 = snowY2 + 3;
  if (snowY2 > 400) {
    snowY2 = 0;
    snowX2 = random(500);
  }

  fill(255, 255, 255);
  ellipse(snowX3, snowY3, 12, 12);
  snowY3 = snowY3 + 3;
  if (snowY3 > 400) {
    snowY3 = 0;
    snowX3 = random(500);
  }

  fill(255, 255, 255);
  ellipse(snowX4, snowY4, 12, 12);
  snowY4 = snowY4 + 3;
  if (snowY4 > 400) {
    snowY4 = 0;
    snowX4 = random(500);
  }

  fill(255, 255, 255);
  ellipse(snowX5, snowY5, 12, 12);
  snowY5 = snowY5 + 3;
  if (snowY5 > 400) {
    snowY5 = 0;
    snowX5 = random(500);
  }

  //Level 2

  if (level == 2) {
    background(167, 201, 200);
    if (x < 0) {
      level = 1;
      x = 400;
    }

    stroke(94, 3, 58);
    textFont("Times", 13);
    textSize(100);
    text("The End!", 68, 159);
    noStroke(0);
    textSize(40);
    text("Your final score: " + numCarrots, 111, 242);
    text("carrots!", 181, 289);
    
    stroke(255, 255, 255);
    fill(230, 244, 245);
    rect(166, 320, 160, 50);
    
    fill(168, 168, 168);
    textSize(30);
    text("Replay", 202, 354);
    
    if(mouseIsPressed&&mouseX>165&&mouseX<326&&mouseY>321&&mouseY<369){
      level=1
      gotCarrot = false;
      gotRain = false;
      numCarrots = 0;
      numRain = 0;
      score = 60;
      x = 200;
      y = 200;
    }
    
  }
  
  //Level 3
  
 if (level == 3) {
    background(167, 201, 200);

    stroke(94, 3, 58);
    textFont("Times", 13);
    textSize(100);
    text("You Lost!", 68, 159);
    noStroke(0);
    textSize(40);
    text("Your final score: " + numCarrots, 111, 242);
    text("carrots", 181, 289);
    
    stroke(255, 255, 255);
    fill(230, 244, 245);
    rect(166, 320, 160, 50);
    
    fill(168, 168, 168);
    textSize(30);
    text("Replay", 202, 354);
    
    if(mouseIsPressed&&mouseX>165&&mouseX<326&&mouseY>321&&mouseY<369){
      level=1
      gotCarrot = false;
      gotRain = false;
      numCarrots = 0;
      numRain = 0;
      score = 60;
      x = 200;
      y = 200;
    }
    
  }
  
  //Key pressed game part

  x = x + deltaX;
  y = y + deltaY;

  if (keyIsPressed) {
    if (key == "d") {
      x = x + 3;
    }
    if (key == "a") {
      x = x - 3;
    }
    if (key == "w") {
      y = y - 3;
    }
    if (key == "s") {
      y = y + 3;
    }
  }

  //WASD part

  function keyPressed() {
    if (key == "a") {
      deltaX = -5;
    }
    if (key == "d") {
      deltaX = 5;
    }
    if (key == "w") {
      deltaY = -5;
    }
    if (key == "s") {
      deltaY = 5;
    }
    if (key == "A") {
      deltaX = -10;
    }
    if (key == "D") {
      deltaX = 10;
    }
    if (key == "S") {
      deltaY = 10;
    }
    if (key == "W") {
      deltaY = -10;
    }
  }

  function keyReleased() {
    if (key == "a") {
      deltaX = 0;
    }
    if (key == "d") {
      deltaX = 0;
    }
    if (key == "w") {
      deltaY = 0;
    }
    if (key == "s") {
      deltaY = 0;
    }
  }
}