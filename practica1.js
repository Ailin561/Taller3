var colorfondo= 0;
var grueso=10;
var r=0;
var g= 0;
var b=0;
var fondo=0;
var button;
var button1;
var volumen=0.5;
var playing = false;
var videoVid;

let barraGrosor, barraColorR, barraColorG, barraColorB, barraVolumen;

function preload() 
{
  soundFormats('ogg', 'mp3');
  sonido = loadSound('assets/jingle.mp3');

}

function setup() {
  createCanvas(710, 400);
  background(fondo);
  //barra que controla el grosor de lbarraGrosor = createSlider(1, 255, 10);
  barraGrosor.position(710,20)inea
  
//barra que controla el color de la linea en rgb
  barraColorR = createSlider(0, 255, 100);
  barraColorR.position(710,50);
  barraColorG= createSlider(0, 255, 100);
  barraColorG.position(710,80);
  barraColorB= createSlider(0, 255, 100);
  barraColorB.position(710,110);
   //barra que controla el volumen del sonido que ya se cargo
  barraVolumen= createSlider(0,100,0);
  barraVolumen.position(710,300);
 
//crear boton para reproducir musica.
  button = createButton("musica");
  button.mousePressed(cancion);
  button.position(710,380);
 
 //video
 videoVid = createVideo(['assets/blancoNegro.mp4']);
 videoVid.position(900,0);
 videoVid.size(400,300);
  button1 = createButton('play video');
  button1.mousePressed(toggleVid); // adjuntar un listener al botón
  button1.position(710,360);

}
//reproducir video
function toggleVid() 
{
  //si el video esta en play y oprimen el boton
  if (playing == true) 
  {
    //pause el video
    videoVid.pause();
    //coloque en el texto del boton "play"
    button.html('play video');
  } 
  //si el video esta en pause y oprimen el boton
  else 
  {
    //el video continua en forma de loop
    videoVid.loop();
    //coloque en el texto del boton "pause"
    button.html('pause video');
  }

  //Si esta en true lo vuelve false, y si esta en false lo vuelve true
  playing = !playing;
}
//reproducir audio
function cancion(){
	if (sonido.isPlaying()==true) 
  {
    sonido.stop();
  } 
  else 
  {
    sonido.play();
  }
}

function draw() {
	//volumen=barraVolumen.value();
	let valor=map(barraVolumen.value(),0,100,0,1);
	volumen=valor;
	console.log(valor);
	 sonido.setVolume(valor);
	grueso= barraGrosor.value();
	r=barraColorR.value();
	g=barraColorG.value();
	b=barraColorB.value();
  stroke(r,g,b);
  strokeWeight(grueso);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  
}
noStroke();
fill(255);
text("grueso", 670, 35);
text("r", 680, 65);
text("g", 680, 90);
text("b", 680, 120);
}
