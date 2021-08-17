img = "";
function preload(){
img = loadImage('muna.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
}
function draw(){
image(img, 0, 0, 640, 420);
fill("#FFC0CB");
text("Bed", 45, 75);
noFill();
stroke("#FFC0CB");
rect(30, 70, 350, 350);
fill("#FF0000");
text("Chair", 450, 95);
noFill();
stroke("#FF0000");
rect(385, 85, 200, 250)
}
