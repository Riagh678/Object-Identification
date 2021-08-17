img = "";
function preload(){
img = loadImage('gamingroom.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
}
function draw(){
image(img, 0, 0, 640, 420);
fill("#FFC0CB");
text("computor",80, 90);
noFill();
stroke("#FFC0CB");
rect(80, 90, 350, 200);
}