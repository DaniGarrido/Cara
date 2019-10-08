let mic;

function setup() {
  createCanvas(400, 400);
  background(0);
    
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
  background(0);
    micLevel = mic.getLevel();
    mov = map(micLevel,0,1,10,300);
  
  let boca_w= width/1.75
  noStroke();
  
    console.log(mov);
  
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  
  //fons de la boca
  fill('red');
  rect(0,100,boca_w,200);
  
  //llengua
  fill('pink');
  rect(0,150,boca_w/2,100,30);
  
  
  
  //dents
  fill(255);
  
  //vertex(0,200,100);
  fill(255);
  rect(20,65-mov*1.5,50,50,20);
  rect(-20,65-mov*1.5,50,50,20);
    fill(255);
  rect(-80,-7+mov,10,100,10);
  rect(80,-7+mov,10,100,10);
    fill(255);
  rect(80,-5*mov*5.5,10,100,10);
  
  
  //barbeta
  fill('coral');
  rect(0,220-mov*1.5,boca_w,150,10);
  pop();
  
  
  //front
   fill('coral');
  rect(0,0,width, height/1.8+mov+5.5);
  
  //ull esquerre
  fill(255);
  ellipse(width*0.25,height/3, 40+mov*5.5);
  fill(0);
  ellipse(width*0.25,height/3, 10+mov+5.5);
  
  //ull dret
  fill(255);
  ellipse(width*0.75,height/3, 10+mov*5.5);
  fill(0);
  ellipse(width*0.75,height/3, 10+mov+5.5);
  
  //nas
  noFill();
  stroke(255);
  strokeWeight(10);
  arc(width*0.5,height/1.85,60,60,radians(230),radians(310));
  
}

function touchStarted(){
    getAudioContext().resume();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}