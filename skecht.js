let cor;
let posicaohorizontal;//X
let posicaovertical; //Y


function setup() {
  
  createCanvas(400, 400);
  background ("white");
  cor = color (random (0,255),random (0,255),random (0,255));
  posicaohorizontal = 200;
  posicaovertical = 200;
  
}

function draw() {
  circle(posicaohorizontal,posicaovertical,80,)
   fill(cor)
  
 if (mouseX < posicaohorizontal) {
   posicaohorizontal = posicaohorizontal - 1;
 }
   
   if (mouseX > posicaohorizontal) {
     posicaohorizontal = posicaohorizontal + 1;
   }
 if (mouseY < posicaovertical) {
   posicaovertical = posicaovertical - 1;
 }
  if (mouseY > posicaovertical) {
    posicaovertical = posicaovertical + 1;
  }
  
  if (mouseIsPressed) {
   cor =  color (random (0,255),random (0,255),random (0,255), random (0,100));
  }
  
  
}