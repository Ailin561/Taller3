
//arreglo para monstruos de bola
let monstruos1 = []; 

//arreglo para monstruos de cuadrados
let monstruos2 = []; 

function setup() 
{
  createCanvas(600, 400);

  //new monstruoBola ("bola ", random(0, 400), random(0, 400), random(0, 100), random(0, 100));
  for (let i = 0; i < 8; i++) 
  {                                          //(name, posX, posY, height, width) 
    monstruos1.push(new monstruoBola("bola "+i, random(0, 500), random(0, 500), random(50, 100), random(50, 100)));

  }
  for (let i = 0; i < 8; i++) 
  {                                          //(name, posX, posY, height, width) 
    monstruos2.push(new monstruoCuadrado("cuadrado "+i, random(0, 500), random(0, 500), random(50, 100), random(50, 100)));

  }
  
}
function draw() 
{
  background(150);


  for (let i = 0; i < 8; i++) 
  {
    monstruos1[i].mostrar();
    monstruos2[i].mostrar();
  //  text (rectangulos[i].name, 20,350+(i*20));
  }


}

class monstruoCuadrado 
{
  constructor(name, posX, posY, height, width) 
  {
  	this.name = name;
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
  }

  mostrar()
  {
  	  noStroke();
    fill(244,35,116);
    rect(this.x,this.y,this.width,this.height);
    fill(255);
    stroke(0);
    strokeWeight(8);
    rect(this.x-10, this.y-5, this.width/2, this.height/2);
    rect(this.x+10, this.y-5, this.width/2, this.height/2);
  
  }
}

class monstruoBola
{
  constructor(name, posX, posY, height, width) 
  {
    this.name = name;
    this.x = posX;
    this.y = posY;
    this.height = height;
    this.width = width;
  }

  mostrar()
  {
    noStroke();
    fill(24,35,116);
    ellipse(this.x,this.y,this.width,this.height);
    fill(255);
    stroke(0);
    strokeWeight(8);
    ellipse(this.x-10, this.y-10, this.width/2, this.height/2);
    ellipse(this.x+10, this.y-10, this.width/2, this.height/2);
  }
}