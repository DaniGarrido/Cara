let mic;
let bg;

function setup() {
    bg = loadImage('img/aura.png');
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(51);
    background(bg);

    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 300);

    noStroke();

    console.log(mov);
    
    push();
    rectMode(CENTER);
    //pelo
    fill(254, 216, 0);
    //pelo1
    triangle(width/2-114, 410, width/2 -114, 430, width/2-150, 400-mov+8);
    triangle(width/2+114, 410, width/2 +114, 430, width/2+150, 400-mov+8);
    //pelo2
    triangle(width/2-114, 350, width/2 -114, 430, width/2-180, 320-mov+8);
    triangle(width/2+114, 350, width/2 +114, 430, width/2+180, 320-mov+8);
    //pelo3
    triangle(width/2-114, 250, width/2 -114, 430, width/2-180, 200-mov+8);
    triangle(width/2+114, 250, width/2 +114, 430, width/2+180, 200-mov+8);
    pop();
    
    push();
    rectMode(CENTER);
    fill(250, 219, 193);
    stroke('black');
    //orejas
    arc(width/2-115, 370, 50, 70, -300, PI + HALF_PI);
    arc(width/2+115, 370, 50, 70, 300, HALF_PI);
    fill(250, 219, 193);
    stroke('black');
    rect(width / 2, 248 + (180 / 2), 230, 180);
    //arc(348, 426, 230, 80, 0, HALF_PI + HALF_PI, OPEN);
    arc(width / 2, 426, 230, 80, 0, HALF_PI + HALF_PI, OPEN);
    fill('white');
    //quad(270, 350, 265, 325, 330, 340, 330, 350);
    //quad(370, 350, 426, 350, 430, 325, 370, 340);
    //quad(320, 415, 380, 402, 380, 415, 320, 415);
    
    push();
    fill(137,78,46);
    noStroke();
    //sombra boca
    quad(width / 2 - 18, 425, width / 2 + 20, 425, width / 2 + 12, 430, width / 2 - 18, 425);
    //sombra cejas
    quad(width / 2 - 80, 305, width / 2 - 20, 315, width / 2 - 12-mov+8, 328, width / 2 - 80, 305);
    quad(width / 2 + 70, 305, width / 2 + 30, 315, width / 2 + 20+mov-8, 328, width / 2 + 70, 305);
    quad(width / 2 + 70, 360, width / 2 + 30, 360, width / 2 + 30, 360, width / 2 + 95, 370);
    quad(width / 2 - 70, 360, width / 2 - 30, 360, width / 2 - 30, 360, width / 2 - 95, 370);
    pop();
    
    quad(width / 2 - 78, 350, width / 2 - 83, 325-mov+8, width / 2 - 20, 340-mov+8, width / 2 - 20, 350);
    quad(width / 2 + 22, 350, width / 2 + 78, 350, width / 2 + 82, 325-mov+8, width / 2 + 22, 340-mov+8);
    //ojos
    quad(width / 2 - 35, 415, width / 2 + 33, 402, width / 2 + 33, 415+mov-8, width / 2 - 35, 415+mov-8);
    pop();
    
    
    push();
    // pupila
    fill(0, 170, 171);
    ellipse(width / 2 - 44, 339, 21, 15);
    ellipse(width / 2 + 47, 339, 21, 15);
    pop();
    push();
    stroke('black');
    //cejas
    fill(254, 216, 0);
    quad(width / 2 - 100, 327-mov+8, width / 2 - 92, 315-mov+8, width / 2 - 8, 340-mov+8, width / 2 - 8, 345-mov+8);
    quad(width / 2 + 12, 345-mov+8, width / 2 + 100, 330-mov+8, width / 2 + 92, 318-mov+8, width / 2 + 12, 340-mov+8);
    pop();
    
    push();
    //patillas
    fill(254, 216, 0);
    quad(width / 2 - 115, 327, width / 2 - 115, 250, width / 2 - 100, 250, width / 2 - 104, 320);
    quad(width / 2 + 104, 320, width / 2 + 115, 327, width / 2 + 115, 250, width / 2 + 100, 250);
    fill(199, 117, 64);
    //nariz
    quad(width / 2 - 10, 385, width / 2 + 2, 395, width / 2, 385, width / 2 + 2, 362);
    triangle(width/2-7, 385, width/2 +2, 395, width/2+10, 385);
    //sombra oreja
    arc(width/2-115, 371, 25, 40, -300, PI + HALF_PI);
    arc(width/2+115, 371, 28, 40, 300, HALF_PI);
    fill(137,78,46);
    
    
    fill(254, 216, 0);
    //pelo4
    triangle(width/2, 280, width/2 -150, 250, width/2-140, 120-mov+8);
    triangle(width/2, 280, width/2 +150, 250, width/2+140, 120-mov+8);
    triangle(width/2-30, 250, width/2 -150, 304, width/2-140, 120-mov+8);
    triangle(width/2+30, 250, width/2 +150, 304, width/2+140, 120);
    //pelo5
    triangle(width/2+70, 250, width/2 -150, 260, width/2-40, 60-mov+8);
    triangle(width/2-60, 250, width/2 +150, 260, width/2+80, 95-mov+8);
    //pelo6
    quad(width / 2 + 10, 25-mov+8, width / 2 + 114, 250, width / 2, 280, width / 2 - 114, 250);
    fill(247, 176, 0);
    //stroke('black');
    quad(width / 2-130, 330, width / 2-100, 240, width / 2, 280, width /2-70, 275);
    quad(width / 2+130, 330, width / 2+100, 240, width / 2, 280, width /2+70, 275);
    quad(width / 2-80, 330, width / 2-25, 230, width / 2, 280, width /2-20, 275);
    quad(width / 2+80, 330, width / 2+25, 230, width / 2, 280, width /2+20, 275);
    fill(244, 186, 0);
    quad(width / 2+80, 230, width / 2+55, 100-mov+8, width / 2+10, 190, width /2+45, 160-mov+8);
    quad(width / 2-120, 250, width / 2-95, 110-mov+8, width / 2-50, 190, width /2-80, 160-mov+8);
    pop();
    




}

function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
