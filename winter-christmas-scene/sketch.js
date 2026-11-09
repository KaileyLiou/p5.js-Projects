let snowY1 = 0
let snowX1 = 160
let snowY2 = 45
let snowX2 = 280
let snowY3 = 70
let snowX3 = 380
let snowY4 = 20
let snowX4 = 450
let snowY6 = 48
let snowX6 = 534
let snowY7 = 79
let snowX7 = 600
let snowY9 = 67
let snowX9 = 70
let snowY10 = 58
let snowX10 = 120
let c = 0
let a = 255
let b = 250
let speed = 5;
let speed2 = 3
let smokeY = 160;
let smokeSize = 0;
let r = 300;
let t = 0;
let x = 116;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(158, 255, 239);
  
  
    var sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 8)
      
    }

    fill (69, 181, 191);
    stroke(69, 181, 191);
    strokeWeight(0.5);
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);

  drawStar(25,65);
   drawStar(163,36);
   drawStar(239,111);
   drawStar(340,76);
   drawStar(520,60);
  drawStar(mouseX,mouseY);

  t = t + 1;

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX1, snowY1, 8, 8);
  snowY1 = snowY1 + 1;
  if (snowY1 > 400) {
    snowY1 = 0;
    snowX1 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX2, snowY2, 8, 8);
  snowY2 = snowY2 + 1;
  if (snowY2 > 400) {
    snowY2 = 0;
    snowX2 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX3, snowY3, 8, 8);
  snowY3 = snowY3 + 1;
  if (snowY3 > 400) {
    snowY3 = 0;
    snowX3 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX4, snowY4, 8, 8);
  snowY4 = snowY4 + 1;
  if (snowY4 > 400) {
    snowY4 = 0;
    snowX4 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX6, snowY6, 8, 8);
  snowY6 = snowY6 + 1;
  if (snowY6 > 400) {
    snowY6 = 0;
    snowX6 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX7, snowY7, 8, 8);
  snowY7 = snowY7 + 1;
  if (snowY7 > 400) {
    snowY7 = 0;
    snowX7 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX9, snowY9, 8, 8);
  snowY9 = snowY9 + 1;
  if (snowY9 > 400) {
    snowY9 = 0;
    snowX9 = random(600);
  }

  stroke(1);
  fill(212, 255, 251);
  ellipse(snowX10, snowY10, 8, 8);
  snowY10 = snowY10 + 1;
  if (snowY10 > 400) {
    snowY10 = 0;
    snowX10 = random(600);
  }

  stroke(1);
  stroke(117, 115, 115);
  fill(240, 245, 244);
  ellipse(200, 330, 70, 70);
  fill(240, 245, 244);
  ellipse(200, 280, 50, 50);
  fill(240, 245, 244);
  ellipse(200, 250, 35, 35);
  noStroke(0);
  fill(0, 0, 0);
  ellipse(200, 350, 10, 10);
  fill(0, 0, 0);
  ellipse(200, 335, 10, 10);
  fill(0, 0, 0);
  ellipse(200, 320, 10, 10);
  fill(0, 0, 0);
  ellipse(200, 290, 10, 10);
  fill(0, 0, 0);
  ellipse(200, 275, 10, 10);
  fill(0, 0, 0);


  noStroke(0);
  fill(0, 0, 0);
  ellipse(208, 245, 8, 8);
  fill(0, 0, 0);
  ellipse(193, 245, 8, 8);

  noStroke(0);
  fill(73, 165, 245);
  textFont("Times");
  textSize(20);
  text("Let is snow ❄️️, Let it snow ⛄, Let it snow 🥶!!!", 30, 40)

  stroke(1);
  fill(99, 67, 25);
  rect(420, 370, 30, 30);

  print(mouseX, mouseY);
  stroke(1);
  fill(45, 168, 123)
  triangle(312, 371, 568, 368, 436, 145)
  drawStar(418,156);

  strokeWeight(3);
  stroke(157, 201, 252)
  line(408, 201, 482, 225)
  line(496, 245, 361, 289)
  line(343, 321, 556, 349)

  stroke(255, 253, 120);
  fill(c, a, b);
  ellipse(415, 210, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  stroke(255, 253, 120);
  fill(a, c, b);
  ellipse(465, 225, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(b, c, a, c);
  ellipse(440, 217, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, a, c);
  ellipse(475, 260, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(b, c, a);
  ellipse(440, 270, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, c, b);
  ellipse(410, 280, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, b, b);
  ellipse(380, 290, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(a, c, b);
  ellipse(370, 330, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(a, b, c, c);
  ellipse(410, 338, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, a, c);
  ellipse(450, 345, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, b, b);
  ellipse(490, 350, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  if (t == 60)
    stroke(255, 253, 120);
  fill(c, c, b, a);
  ellipse(530, 355, 15, 15);
  c = c + speed;
  if (c > 255) {
    speed = -0.5;
  }
  if (c < 0) {
    speed = 0.5;
  }

  noStroke(0);
  fill(120, 156, 255);
  textSize(18);
  text("Happy Holidays, and Happy New Year!!!", 30, 70);

  fill(255, 255, 255)
  rect(0, 356, 180, 50)
  triangle(180, 357, 180, 403, 333, 401)

  fill(13, 114, 168);
  textFont("Times", 13);
  text("By: Kailey Liou, 2020-2021", 4, 380);

  noStroke();
  fill(230, 230, 230, 200);
  ellipse(43, smokeY, 5 + smokeSize, 20 + smokeSize);
  smokeY = smokeY - 0.5;
  smokeSize = smokeSize + 0.1;
  if (smokeY < -50) {
    smokeY = 160;
    smokeSize = 0;
  }

  stroke(0, 0, 0);
  strokeWeight(1);
  fill(200, 0, 0);
  rect(40, 210, 10, 45);
  fill(128, 79, 27);
  rect(30, 255, 100, 100);
  triangle(30, 256, 78, 174, 132, 256);


  stroke(94, 71, 37);
  strokeWeight(1);

  if (t == 60)
    t = 0

  stroke(0, 0, 0);
  strokeWeight(1);
  line(192, 258, 193, 261);
  line(193, 261, 206, 260);
  line(206, 260, 211, 258);
  stroke(255, 150, 46);
  strokeWeight(2);
  fill(255, 150, 46);
  triangle(200, 253, 211, 253, 201, 255);

  noStroke(0);
  fill(0, 0, 0);
  rect(53, 305, 50, 50);

  fill(255, 255, 255);
  stroke(115, 113, 111);
  strokeWeight(1);
  ellipse(60, 330, 6, 6);

  noStroke(0);
  fill(41, 54, 74);
  if (snowY6 < 100) {
    text("Merry Christmas!!! 🎄", 32, 95);
  } else if (snowY6 < 300) {
    text("Santa Claus! 🎅", 34, 109);
  } else {
    text("Winter! 🌨", 32, 128);
  }

  if (snowY2 < 300) {
    fill(0, 0, 0);
    stroke(1);
    fill(213, 217, 224);
    rect(493, 40, 10, 10);
    rect(550, 69, 10, 10);
    fill(112, 255, 250);
    ellipse(498, 68, 40, 40);
    fill(104, 152, 242);
    ellipse(554, 97, 40, 40);
    stroke(1);
    line(481, 0, 498, 42, 521, 2);
    line(498, 42, 518, 0, 283, 3);
    line(539, 1, 556, 71, 582, 2);
    line(556, 71, 582, 2, 606, 17);
  } else {
    fill(c, c, a);
    ellipse(554, 97, 40, 40);
    fill(213, 217, 224);
    rect(550, 69, 10, 10);
    line(539, 1, 556, 71, 582, 2);
    line(556, 71, 582, 2, 606, 17);
    c = c + speed;
    if (c > 255) {
      speed = -0.5;
    }
  }
 
   if (c < 0) {
    speed = 0.5;
  } else {
    fill(c, a, b);
    ellipse(498, 68, 40, 40);
    fill(213, 217, 224);
    rect(493, 40, 10, 10);
    line(481, 0, 498, 42, 521, 2);
    line(498, 42, 518, 0, 283, 3);
    c = c + speed;
    if (c > 255) {
      speed = -0.5;
    }
  }
  if (c < 0) {
    speed = 0.5;
  } else {
    fill(c, c, a);
    ellipse(554, 97, 40, 40);
    fill(213, 217, 224);
    rect(550, 69, 10, 10);
    line(539, 1, 556, 71, 582, 2);
    line(556, 71, 582, 2, 606, 17);
    c = c + speed;
    if (c > 255) {
      speed = -0.5;
    }
  }

  noStroke(0);
  fill(58, 61, 59);
  rect(176, 230, 50, 10);
  rect(185, 210, 30, 20);

  r = random(255);
  fill(r, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(1);
  ellipse(x, 255, 10, 10);
  x = x + speed2;
  if (x > 130) {
    speed2 = -3;
  }
  if (x < 30) {
    speed2 = 3;
  }

}

function drawStar(sx,sy){
  stroke(173, 173, 173);
  strokeWeight(1);
  fill(255, 246, 145);
  //sx= 418,  sy= 152
  triangle(sx, sy, sx+18, sy-30, sx+37, sy);
  triangle(sx+1, sy-23, sx+34, sy-22, sx+19, sy+3);

}

