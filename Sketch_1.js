var Cx;
var Cy;
var xRings;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(75);
	Cx = windowWidth/2
	Cy = windowHeight/2
	xRings = new Rings(Cx,Cy);
} 

function draw() {
	xRings.display();
	
}
function mousePressed(){
	xRings.Move(mouseX,mouseY);
	
}
function Rings(X,Y) {
	this.X = X,
	this.Y = Y,
	this.Move = function(mX,mY){
	this.X = mX
	this.Y = mY
	}
	
this.display = function (){
	fill(255,0,48);
	noFill();
	stroke(0);
	ellipse(this.X,this.Y-100,300,300);
	stroke(50,130,255);
	strokeWeight(25);
	fill(255,0,48);
	noFill();
	ellipse(this.X/2-25,this.Y-100,300,300);
	stroke(255,0,58);
	strokeWeight(25);
	fill(255,0,0);
	noFill();
	ellipse(this.X+365,this.Y-100,300,300);
	fill(255,0,0)
	noFill();
	stroke(0,200,0);
	ellipse(this.X+180,this.Y/2+200,300,300);
	fill(255,0,0)
	noFill();
	stroke(255,200,0);
	ellipse(this.X-180,this.Y/2+200,300,300);
}
}
