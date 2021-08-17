img = "";
function preload(){
img = loadImage('livingroom.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
}
function draw(){
image(img, 0, 0, 640, 420);
fill("#FFC0CB");
text("Sofa",40, 80);
noFill();
stroke("#FFC0CB");
rect(40, 80, 250, 200);
fill("#FF0000");
text("Statue", 350, 80);
noFill();
stroke("#FF0000");
rect(390, 80, 170, 150)
}