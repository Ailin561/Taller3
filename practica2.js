let angle = 0;
var r= 72;
var g=255;
var b=20;
var linea =1;
var alto= 5;
var ancho=5;

function setup() {
  createCanvas(710, 400);
  background(102);
  stroke(linea);
  fill(0, 102);
}

function draw() {
  // Dibujar solo cuando se presiona el mouse
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(r,b,g);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(g, r,r);
    ellipse(mouseX, mouseY, ancho, alto);
  }
    function keyPressed() 
{
  //cuando se seleccione la letra cambiara de colores por el valor elejido
     if(key == 'b')
    {
      b = b -100;
    } 
}
}
