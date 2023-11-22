let noiseScale=0.02;
let img1;
let img2;

function setup() {
  createCanvas(300, 600, WEBGL);
  img1 = loadImage('assets/guizo-pto.png');
  img2 = loadImage('assets/bg.png');
  image(img1,50,50);
}

function draw() {
  background(0, 255);
  //image(img2, -150, -300);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseScale*0,0);
    //line(x-width, mouseY+noiseVal*200, x, height/2);
    //tint(255,150);
    texture(img1);
    rect(x-450, mouseY-noiseVal*200, x);
  }
}