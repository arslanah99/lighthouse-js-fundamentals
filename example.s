function setup() {
  createCanvas(600,400);
}

function draw(){
  background(255);
  for (var i=0; i<width; i++){
    var y = i%5;
    line (i,0,i,y);


  }
}