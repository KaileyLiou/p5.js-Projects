let pic;
let pic2;
let pic3;
let pic4;
let pic5;
let pic6;
let pic7;
let pic8;
let pic9;
let pic10;
let pic11;
let pic12;
let pic13;
let pic14;
let pic15;
let pic16;
let pic17;
let pic18;
let picAX = 0;
let picAY = 520;
let picAX2 = 80;
let picAY2 = 620;
let picBX = 100;
let picBY = 520;
let picBX2 = 180;
let picBY2 = 620;
let picCX = 200;
let picCY = 520;
let picCX2 = 280;
let picCY2 = 620;
let picDX = 300;
let picDY = 520;
let picDX2 = 380;
let picDY2 = 620;
let picEX = 400;
let picEY = 520;
let picEX2 = 480;
let picEY2 = 620;
let picFX = 500;
let picFY = 520;
let picFX2 = 580;
let picFY2 = 620;
let picGX = 600;
let picGY = 520;
let picGX2 = 680;
let picGY2 = 620;
let picHX = 700;
let picHY = 520;
let picHX2 = 780;
let picHY2 = 620;
let picIX = 800;
let picIY = 520;
let picIX2 = 880;
let picIY2 = 620;
let picJX = 0;
let picJY = 650;
let picJX2 = 80;
let picJY2 = 750;
let picKX = 100;
let picKY = 650;
let picKX2 = 180;
let picKY2 = 750;
let picLX = 200;
let picLY = 650;
let picLX2 = 280;
let picLY2 = 750;
let picMX = 300;
let picMY = 650;
let picMX2 = 380;
let picMY2 = 750;
let picNX = 400;
let picNY = 650;
let picNX2 = 480;
let picNY2 = 750;
let picOX = 500;
let picOY = 650;
let picOX2 = 580;
let picOY2 = 750;
let picPX = 600;
let picPY = 650;
let picPX2 = 680;
let picPY2 = 750;
let picQX = 700;
let picQY = 650;
let picQX2 = 780;
let picQY2 = 750;
let picRX = 800;
let picRY = 650;
let picRX2 = 880;
let picRY2 = 750;
let pickedUp = false;
let pickedUppic = false;
let pickedUppic2 = false;
let pickedUppic3 = false;
let pickedUppic4 = false;
let pickedUppic5 = false;
let pickedUppic6 = false;
let pickedUppic7 = false;
let pickedUppic8 = false;
let pickedUppic9 = false;
let pickedUppic10 = false;
let pickedUppic11 = false;
let pickedUppic12 = false;
let pickedUppic13 = false;
let pickedUppic14 = false;
let pickedUppic15 = false;
let pickedUppic16 = false;
let pickedUppic17 = false;
let pickedUppic18 = false;

function setup() {
  createCanvas(900, 800);
  pic = loadImage("hersheykiss.jpg");
  pic2 = loadImage("playdough.jpg");
  pic3 = loadImage("pringles.jpg");
  pic4 = loadImage("macncheese.jpg");
  pic5 = loadImage("spam.jpg");
  pic6 = loadImage("frootloops.jpg");
  pic7 = loadImage("cocacola.jpg");
  pic8 = loadImage("pooh.jpg");
  pic9 = loadImage("piglet.jpg");
  pic10 = loadImage("hamilton.jpg");
  pic11 = loadImage("mandalorian.jpg");
  pic12 = loadImage("obiwankenobi.jpg");
  pic13 = loadImage("brideofchucky.jpg");
  pic14 = loadImage("chucky.jpg");
  pic15 = loadImage("harrypotter.jpg");
  pic16 = loadImage("strawberryshortcake.jpg");
  pic17 = loadImage("thegrinch.jpg");
  pic18 = loadImage("mickeymouse.jpg");
}

function draw() {
  background(43, 43, 43);

  //Background

  noStroke();
  fill(255, 255, 255);
  rect(0, 500, 900, 300);

  fill(255, 127, 126);
  rect(0, 0, 120, 100);
  fill(255, 191, 127);
  rect(0, 100, 120, 100);
  fill(255, 223, 128);
  rect(0, 200, 120, 100);
  fill(255, 254, 127);
  rect(0, 300, 120, 100);
  fill(190, 255, 128);
  rect(0, 400, 120, 100);

  fill(0, 0, 0);
  stroke(0, 0, 0);
  noFill(0);
  rect(0, 0, 900, 100);
  rect(0, 100, 900, 100);
  rect(0, 200, 900, 100);
  rect(0, 300, 900, 100);
  rect(0, 400, 900, 100);

  noStroke();
  fill(0, 0, 0);
  textSize(20);
  text("S", 52, 60);
  textSize(20);
  text("A", 52, 160);
  textSize(20);
  text("B", 52, 260);
  textSize(20);
  text("C", 52, 360);
  textSize(20);
  text("D", 52, 460);

  //Images

  image(pic, picAX, picAY, 100, 100);
  image(pic2, picBX, picBY, 100, 100);
  image(pic3, picCX, picCY, 100, 100);
  image(pic4, picDX, picDY, 100, 100);
  image(pic5, picEX, picEY, 100, 100);
  image(pic6, picFX, picFY, 100, 100);
  image(pic7, picGX, picGY, 100, 100);
  image(pic8, picHX, picHY, 100, 100);
  image(pic9, picIX, picIY, 100, 100);
  image(pic10, picJX, picJY, 100, 100);
  image(pic11, picKX, picKY, 100, 100);
  image(pic12, picLX, picLY, 100, 100);
  image(pic13, picMX, picMY, 100, 100);
  image(pic14, picNX, picNY, 100, 100);
  image(pic15, picOX, picOY, 100, 100);
  image(pic16, picPX, picPY, 100, 100);
  image(pic17, picQX, picQY, 100, 100);
  image(pic18, picRX, picRY, 100, 100);

  //Hover over images

  if (
    mouseX > picAX &&
    mouseX < picAX + 100 &&
    mouseY > picAY &&
    mouseY < picAY + 100
  ) {
    fill(0, 0, 0);
    stroke(3, 202, 252);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Hershey Kiss", mouseX, mouseY);
  }

  if (mouseX > picBX && mouseX < picBX2 && mouseY > picBY && mouseY < picBY2) {
    fill(0, 0, 0);
    stroke(255, 255, 0);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Play-Doh", mouseX, mouseY);
  }

  if (mouseX > picCX && mouseX < picCX2 && mouseY > picCY && mouseY < picCY2) {
    fill(0, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Pringles", mouseX, mouseY);
  }

  if (mouseX > picDX && mouseX < picDX2 && mouseY > picDY && mouseY < picDY2) {
    fill(0, 0, 0);
    stroke(0, 102, 255);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Mac & Cheese", mouseX, mouseY);
  }

  if (mouseX > picEX && mouseX < picEX2 && mouseY > picEY && mouseY < picEY2) {
    fill(0, 0, 0);
    stroke(52, 52, 235);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Spam", mouseX, mouseY);
  }

  if (mouseX > picFX && mouseX < picFX2 && mouseY > picFY && mouseY < picFY2) {
    fill(0, 0, 0);
    stroke(235, 52, 52);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Froot Loops", mouseX, mouseY);
  }

  if (mouseX > picGX && mouseX < picGX2 && mouseY > picGY && mouseY < picGY2) {
    fill(0, 0, 0);
    stroke(235, 52, 52);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Coca-Cola", mouseX, mouseY);
  }

  if (mouseX > picHX && mouseX < picHX2 && mouseY > picHY && mouseY < picHY2) {
    fill(0, 0, 0);
    stroke(235, 186, 52);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Pooh", mouseX, mouseY);
  }

  if (mouseX > picIX && mouseX < picIX2 && mouseY > picIY && mouseY < picIY2) {
    fill(0, 0, 0);
    stroke(235, 52, 183);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Piglet", mouseX, mouseY);
  }

  if (mouseX > picJX && mouseX < picJX2 && mouseY > picJY && mouseY < picJY2) {
    fill(0, 0, 0);
    stroke(235, 98, 52);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Hamilton", mouseX, mouseY);
  }

  if (mouseX > picKX && mouseX < picKX2 && mouseY > picKY && mouseY < picKY2) {
    fill(0, 0, 0);
    stroke(104, 235, 52);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Mandalorian", mouseX, mouseY);
  }

  if (mouseX > picLX && mouseX < picLX2 && mouseY > picLY && mouseY < picLY2) {
    fill(0, 0, 0);
    stroke(117, 84, 40);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Obi Wan Kenobi", mouseX, mouseY);
  }

  if (mouseX > picMX && mouseX < picMX2 && mouseY > picMY && mouseY < picMY2) {
    fill(0, 0, 0);
    stroke(227, 227, 39);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Tiffany", mouseX, mouseY);
  }

  if (mouseX > picNX && mouseX < picNX2 && mouseY > picNY && mouseY < picNY2) {
    fill(0, 0, 0);
    stroke(227, 136, 39);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Chucky", mouseX, mouseY);
  }

  if (mouseX > picOX && mouseX < picOX2 && mouseY > picOY && mouseY < picOY2) {
    fill(0, 0, 0);
    stroke(33, 219, 39);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Harry Potter", mouseX, mouseY);
  }

  if (mouseX > picPX && mouseX < picPX2 && mouseY > picPY && mouseY < picPY2) {
    fill(0, 0, 0);
    stroke(219, 33, 154);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Strawberry Shortcake", mouseX, mouseY);
  }

  if (mouseX > picQX && mouseX < picQX2 && mouseY > picQY && mouseY < picQY2) {
    fill(0, 0, 0);
    stroke(33, 219, 132);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("The Grinch", mouseX, mouseY);
  }

  if (mouseX > picRX && mouseX < picRX2 && mouseY > picRY && mouseY < picRY2) {
    fill(0, 0, 0);
    stroke(219, 33, 33);
    strokeWeight(1);
    textFont("American Typewriter", 15);
    text("Mickey Mouse", mouseX, mouseY);
  }

  //Moving Images

  // if (
  //   mouseX > picAX &&
  //   mouseX < picAX + 100 &&
  //   mouseY > picAY &&
  //   mouseY < picAY + 100 &&
  //   mouseIsPressed
  // ) {
  //   picAX = mouseX - 50;
  //   picAY = mouseY - 50;
  //   picAX2 = mouseX - 50 + 80;
  //   picAY2 = mouseY - 50 + 100;
  // }

  //   if (
  //     mouseX > picBX &&
  //     mouseX < picBX + 100 &&
  //     mouseY > picBY &&
  //     mouseY < picBY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picBX = mouseX - 50;
  //     picBY = mouseY - 50;
  //     picBX2 = mouseX - 50 + 80;
  //     picBY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picCX &&
  //     mouseX < picCX + 100 &&
  //     mouseY > picCY &&
  //     mouseY < picCY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picCX = mouseX - 50;
  //     picCY = mouseY - 50;
  //     picCX2 = mouseX - 50 + 80;
  //     picCY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picDX &&
  //     mouseX < picDX + 100 &&
  //     mouseY > picDY &&
  //     mouseY < picDY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picDX = mouseX - 50;
  //     picDY = mouseY - 50;
  //     picDX2 = mouseX - 50 + 80;
  //     picDY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picEX &&
  //     mouseX < picEX + 100 &&
  //     mouseY > picEY &&
  //     mouseY < picEY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picEX = mouseX - 50;
  //     picEY = mouseY - 50;
  //     picEX2 = mouseX - 50 + 80;
  //     picEY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picFX &&
  //     mouseX < picFX + 100 &&
  //     mouseY > picFY &&
  //     mouseY < picFY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picFX = mouseX - 50;
  //     picFY = mouseY - 50;
  //     picFX2 = mouseX - 50 + 80;
  //     picFY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picGX &&
  //     mouseX < picGX + 100 &&
  //     mouseY > picGY &&
  //     mouseY < picGY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picGX = mouseX - 50;
  //     picGY = mouseY - 50;
  //     picGX2 = mouseX - 50 + 80;
  //     picGY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picHX &&
  //     mouseX < picHX + 100 &&
  //     mouseY > picHY &&
  //     mouseY < picHY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picHX = mouseX - 50;
  //     picHY = mouseY - 50;
  //     picHX2 = mouseX - 50 + 80;
  //     picHY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picIX &&
  //     mouseX < picIX + 100 &&
  //     mouseY > picIY &&
  //     mouseY < picIY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picIX = mouseX - 50;
  //     picIY = mouseY - 50;
  //     picIX2 = mouseX - 50 + 80;
  //     picIY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picJX &&
  //     mouseX < picJX + 100 &&
  //     mouseY > picJY &&
  //     mouseY < picJY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picJX = mouseX - 50;
  //     picJY = mouseY - 50;
  //     picJX2 = mouseX - 50 + 80;
  //     picJY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picKX &&
  //     mouseX < picKX + 100 &&
  //     mouseY > picKY &&
  //     mouseY < picKY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picKX = mouseX - 50;
  //     picKY = mouseY - 50;
  //     picKX2 = mouseX - 50 + 80;
  //     picKY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picLX &&
  //     mouseX < picLX + 100 &&
  //     mouseY > picLY &&
  //     mouseY < picLY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picLX = mouseX - 50;
  //     picLY = mouseY - 50;
  //     picLX2 = mouseX - 50 + 80;
  //     picLY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picMX &&
  //     mouseX < picMX + 100 &&
  //     mouseY > picMY &&
  //     mouseY < picMY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picMX = mouseX - 50;
  //     picMY = mouseY - 50;
  //     picMX2 = mouseX - 50 + 80;
  //     picMY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picNX &&
  //     mouseX < picNX + 100 &&
  //     mouseY > picNY &&
  //     mouseY < picNY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picNX = mouseX - 50;
  //     picNY = mouseY - 50;
  //     picNX2 = mouseX - 50 + 80;
  //     picNY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picOX &&
  //     mouseX < picOX + 100 &&
  //     mouseY > picOY &&
  //     mouseY < picOY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picOX = mouseX - 50;
  //     picOY = mouseY - 50;
  //     picOX2 = mouseX - 50 + 80;
  //     picOY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picPX &&
  //     mouseX < picPX + 100 &&
  //     mouseY > picPY &&
  //     mouseY < picPY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picPX = mouseX - 50;
  //     picPY = mouseY - 50;
  //     picPX2 = mouseX - 50 + 80;
  //     picPY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picQX &&
  //     mouseX < picQX + 100 &&
  //     mouseY > picQY &&
  //     mouseY < picQY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picQX = mouseX - 50;
  //     picQY = mouseY - 50;
  //     picQX2 = mouseX - 50 + 80;
  //     picQY2 = mouseY - 50 + 100;
  //   }

  //   if (
  //     mouseX > picRX &&
  //     mouseX < picRX + 100 &&
  //     mouseY > picRY &&
  //     mouseY < picRY + 100 &&
  //     mouseIsPressed
  //   ) {
  //     picRX = mouseX - 50;
  //     picRY = mouseY - 50;
  //     picRX2 = mouseX - 50 + 80;
  //     picRY2 = mouseY - 50 + 100;
  //   }

  //Not Picking up Multiple Pictures at the Same Time

  if (
    mouseX > picAX &&
    mouseX < picAX + 100 &&
    mouseY > picAY &&
    mouseY < picAY + 100 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic = true;
  }

  if (pickedUppic == true) {
    picAX = mouseX - 50;
    picAY = mouseY - 50;
    picAX2 = mouseX - 50 + 80;
    picAY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picBX &&
    mouseX < picBX2 &&
    mouseY > picBY &&
    mouseY < picBY2 &&
    mouseIsPressed &&
    pickedUppic == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic2 = true;
  }

  if (pickedUppic2 == true) {
    picBX = mouseX - 50;
    picBY = mouseY - 50;
    picBX2 = mouseX - 50 + 80;
    picBY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picCX &&
    mouseX < picCX2 &&
    mouseY > picCY &&
    mouseY < picCY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic3 = true;
  }

  if (pickedUppic3 == true) {
    picCX = mouseX - 50;
    picCY = mouseY - 50;
    picCX2 = mouseX - 50 + 80;
    picCY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picDX &&
    mouseX < picDX2 &&
    mouseY > picDY &&
    mouseY < picDY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic4 = true;
  }

  if (pickedUppic4 == true) {
    picDX = mouseX - 50;
    picDY = mouseY - 50;
    picDX2 = mouseX - 50 + 80;
    picDY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picEX &&
    mouseX < picEX2 &&
    mouseY > picEY &&
    mouseY < picEY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic5 = true;
  }

  if (pickedUppic5 == true) {
    picEX = mouseX - 50;
    picEY = mouseY - 50;
    picEX2 = mouseX - 50 + 80;
    picEY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picFX &&
    mouseX < picFX2 &&
    mouseY > picFY &&
    mouseY < picFY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic6 = true;
  }

  if (pickedUppic6 == true) {
    picFX = mouseX - 50;
    picFY = mouseY - 50;
    picFX2 = mouseX - 50 + 80;
    picFY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picGX &&
    mouseX < picGX2 &&
    mouseY > picGY &&
    mouseY < picGY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic7 = true;
  }

  if (pickedUppic7 == true) {
    picGX = mouseX - 50;
    picGY = mouseY - 50;
    picGX2 = mouseX - 50 + 80;
    picGY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picHX &&
    mouseX < picHX2 &&
    mouseY > picHY &&
    mouseY < picHY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic8 = true;
  }

  if (pickedUppic8 == true) {
    picHX = mouseX - 50;
    picHY = mouseY - 50;
    picHX2 = mouseX - 50 + 80;
    picHY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picIX &&
    mouseX < picIX2 &&
    mouseY > picIY &&
    mouseY < picIY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic9 = true;
  }

  if (pickedUppic9 == true) {
    picIX = mouseX - 50;
    picIY = mouseY - 50;
    picIX2 = mouseX - 50 + 80;
    picIY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picJX &&
    mouseX < picJX2 &&
    mouseY > picJY &&
    mouseY < picJY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic10 = true;
  }

  if (pickedUppic10 == true) {
    picJX = mouseX - 50;
    picJY = mouseY - 50;
    picJX2 = mouseX - 50 + 80;
    picJY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picKX &&
    mouseX < picKX2 &&
    mouseY > picKY &&
    mouseY < picKY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic11 = true;
  }

  if (pickedUppic11 == true) {
    picKX = mouseX - 50;
    picKY = mouseY - 50;
    picKX2 = mouseX - 50 + 80;
    picKY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picLX &&
    mouseX < picLX2 &&
    mouseY > picLY &&
    mouseY < picLY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic12 = true;
  }

  if (pickedUppic12 == true) {
    picLX = mouseX - 50;
    picLY = mouseY - 50;
    picLX2 = mouseX - 50 + 80;
    picLY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picMX &&
    mouseX < picMX2 &&
    mouseY > picMY &&
    mouseY < picMY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic13 = true;
  }

  if (pickedUppic13 == true) {
    picMX = mouseX - 50;
    picMY = mouseY - 50;
    picMX2 = mouseX - 50 + 80;
    picMY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picNX &&
    mouseX < picNX2 &&
    mouseY > picNY &&
    mouseY < picNY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic14 = true;
  }

  if (pickedUppic14 == true) {
    picNX = mouseX - 50;
    picNY = mouseY - 50;
    picNX2 = mouseX - 50 + 80;
    picNY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picOX &&
    mouseX < picOX2 &&
    mouseY > picOY &&
    mouseY < picOY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic15 = true;
  }

  if (pickedUppic15 == true) {
    picOX = mouseX - 50;
    picOY = mouseY - 50;
    picOX2 = mouseX - 50 + 80;
    picOY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picPX &&
    mouseX < picPX2 &&
    mouseY > picPY &&
    mouseY < picPY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic == false &&
    pickedUppic17 == false &&
    pickedUppic18 == false
  ) {
    pickedUppic16 = true;
  }

  if (pickedUppic16 == true) {
    picPX = mouseX - 50;
    picPY = mouseY - 50;
    picPX2 = mouseX - 50 + 80;
    picPY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picQX &&
    mouseX < picQX2 &&
    mouseY > picQY &&
    mouseY < picQY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic == false &&
    pickedUppic18 == false
  ) {
    pickedUppic17 = true;
  }

  if (pickedUppic17 == true) {
    picQX = mouseX - 50;
    picQY = mouseY - 50;
    picQX2 = mouseX - 50 + 80;
    picQY2 = mouseY - 50 + 100;
  }

  if (
    mouseX > picRX &&
    mouseX < picRX2 &&
    mouseY > picRY &&
    mouseY < picRY2 &&
    mouseIsPressed &&
    pickedUppic2 == false &&
    pickedUppic3 == false &&
    pickedUppic4 == false &&
    pickedUppic5 == false &&
    pickedUppic6 == false &&
    pickedUppic7 == false &&
    pickedUppic8 == false &&
    pickedUppic9 == false &&
    pickedUppic10 == false &&
    pickedUppic11 == false &&
    pickedUppic12 == false &&
    pickedUppic13 == false &&
    pickedUppic14 == false &&
    pickedUppic15 == false &&
    pickedUppic16 == false &&
    pickedUppic17 == false &&
    pickedUppic == false
  ) {
    pickedUppic18 = true;
  }

  if (pickedUppic18 == true) {
    picRX = mouseX - 50;
    picRY = mouseY - 50;
    picRX2 = mouseX - 50 + 80;
    picRY2 = mouseY - 50 + 100;
  }

  if (!mouseIsPressed) {
    pickedUppic = false;
    pickedUppic2 = false;
    pickedUppic3 = false;
    pickedUppic4 = false;
    pickedUppic5 = false;
    pickedUppic6 = false;
    pickedUppic7 = false;
    pickedUppic8 = false;
    pickedUppic9 = false;
    pickedUppic10 = false;
    pickedUppic11 = false;
    pickedUppic12 = false;
    pickedUppic13 = false;
    pickedUppic14 = false;
    pickedUppic15 = false;
    pickedUppic16 = false;
    pickedUppic17 = false;
    pickedUppic18 = false;
  }

  //Snapping Images

  if (mouseIsPressed == false) {
    if (picAY <= 50) {
      picAY = 0;
    } else if (picAY <= 150) {
      picAY = 100;
    } else if (picAY <= 250) {
      picAY = 200;
    } else if (picAY <= 350) {
      picAY = 300;
    } else if (picAY <= 450) {
      picAY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picBY <= 50) {
      picBY = 0;
    } else if (picBY <= 150) {
      picBY = 100;
    } else if (picBY <= 250) {
      picBY = 200;
    } else if (picBY <= 350) {
      picBY = 300;
    } else if (picBY <= 450) {
      picBY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picCY <= 50) {
      picCY = 0;
    } else if (picCY <= 150) {
      picCY = 100;
    } else if (picCY <= 250) {
      picCY = 200;
    } else if (picCY <= 350) {
      picCY = 300;
    } else if (picCY <= 450) {
      picCY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picDY <= 50) {
      picDY = 0;
    } else if (picDY <= 150) {
      picDY = 100;
    } else if (picDY <= 250) {
      picDY = 200;
    } else if (picDY <= 350) {
      picDY = 300;
    } else if (picDY <= 450) {
      picDY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picEY <= 50) {
      picEY = 0;
    } else if (picEY <= 150) {
      picEY = 100;
    } else if (picEY <= 250) {
      picEY = 200;
    } else if (picEY <= 350) {
      picEY = 300;
    } else if (picEY <= 450) {
      picEY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picFY <= 50) {
      picAY = 0;
    } else if (picFY <= 150) {
      picFY = 100;
    } else if (picFY <= 250) {
      picFY = 200;
    } else if (picFY <= 350) {
      picFY = 300;
    } else if (picFY <= 450) {
      picFY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picGY <= 50) {
      picGY = 0;
    } else if (picGY <= 150) {
      picGY = 100;
    } else if (picGY <= 250) {
      picGY = 200;
    } else if (picGY <= 350) {
      picGY = 300;
    } else if (picGY <= 450) {
      picGY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picHY <= 50) {
      picHY = 0;
    } else if (picHY <= 150) {
      picHY = 100;
    } else if (picHY <= 250) {
      picHY = 200;
    } else if (picHY <= 350) {
      picHY = 300;
    } else if (picHY <= 450) {
      picHY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picIY <= 50) {
      picIY = 0;
    } else if (picIY <= 150) {
      picIY = 100;
    } else if (picIY <= 250) {
      picIY = 200;
    } else if (picIY <= 350) {
      picIY = 300;
    } else if (picIY <= 450) {
      picIY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picJY <= 50) {
      picJY = 0;
    } else if (picJY <= 150) {
      picJY = 100;
    } else if (picJY <= 250) {
      picJY = 200;
    } else if (picJY <= 350) {
      picJY = 300;
    } else if (picJY <= 450) {
      picJY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picKY <= 50) {
      picKY = 0;
    } else if (picKY <= 150) {
      picKY = 100;
    } else if (picKY <= 250) {
      picKY = 200;
    } else if (picKY <= 350) {
      picKY = 300;
    } else if (picKY <= 450) {
      picKY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picLY <= 50) {
      picLY = 0;
    } else if (picLY <= 150) {
      picLY = 100;
    } else if (picLY <= 250) {
      picLY = 200;
    } else if (picLY <= 350) {
      picLY = 300;
    } else if (picLY <= 450) {
      picLY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picMY <= 50) {
      picMY = 0;
    } else if (picMY <= 150) {
      picMY = 100;
    } else if (picMY <= 250) {
      picMY = 200;
    } else if (picMY <= 350) {
      picMY = 300;
    } else if (picMY <= 450) {
      picMY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picNY <= 50) {
      picNY = 0;
    } else if (picNY <= 150) {
      picNY = 100;
    } else if (picNY <= 250) {
      picNY = 200;
    } else if (picNY <= 350) {
      picNY = 300;
    } else if (picNY <= 450) {
      picNY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picOY <= 50) {
      picOY = 0;
    } else if (picOY <= 150) {
      picOY = 100;
    } else if (picOY <= 250) {
      picOY = 200;
    } else if (picOY <= 350) {
      picOY = 300;
    } else if (picOY <= 450) {
      picOY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picPY <= 50) {
      picPY = 0;
    } else if (picPY <= 150) {
      picPY = 100;
    } else if (picPY <= 250) {
      picPY = 200;
    } else if (picPY <= 350) {
      picPY = 300;
    } else if (picPY <= 450) {
      picPY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picQY <= 50) {
      picQY = 0;
    } else if (picQY <= 150) {
      picQY = 100;
    } else if (picQY <= 250) {
      picQY = 200;
    } else if (picQY <= 350) {
      picQY = 300;
    } else if (picQY <= 450) {
      picQY = 400;
    }
  }

  if (mouseIsPressed == false) {
    if (picRY <= 50) {
      picRY = 0;
    } else if (picRY <= 150) {
      picRY = 100;
    } else if (picRY <= 250) {
      picRY = 200;
    } else if (picRY <= 350) {
      picRY = 300;
    } else if (picRY <= 450) {
      picRY = 400;
    }
  }
}
