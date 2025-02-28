function setup() {
  createCanvas(900, 900);
}


function draw() {
  background(220); // Cor do fundo
  
  
  fill(255, 234, 194);
  ellipse(450, 390, 500, 500); // Rosto
  
  
  fill(255, 255, 255);
  ellipse(350, 340, 100, 100); // Olho esquerdo 

  
  fill(255, 255, 255);
  ellipse(550, 337, 100, 100); // Olho direito
  
    
  fill(181, 31, 31); 
  triangle(439, 100, 800, 280, 80, 290); // Chapéu vermelho
  
  
  fill(97, 255, 139);
  line(409, 430, 479, 430); // Nariz
  
  
  noFill(0);
  strokeWeight(4);
  arc(450, 440, 210, 100, 0, PI); // Sorriso
  
  
  olhoX = map(mouseX,0,900,304,388);
  olhoY = map(mouseY,0,900,346,349);
  
  
  olhoX2 = map(mouseX, 0, 900, 509, 589);
  olhoY2 = map(mouseY, 0, 900, 335, 340);
  
  
  fill(0,0,0);
  circle(olhoX,olhoY,40);
  
  
  fill(0, 0, 0);
  circle(olhoX2, olhoY2, 40);
  
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
  
  
      
}





