var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
         player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
           player_object.set(
               {
                    top:player_y,
                     left:player_x });
                canvas.add(player_object); }); 
   
}
function   new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        player_image_object = Img;
         player_image_object.scaleToWidth(block_image_width);
          player_image_object.scaleToHeight(block_image_height);
           player_image_object.set(
               {
                    top:player_y,
                     left:player_x });
                canvas.add(block_image_object); });  
} 
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed =e.keyCode;
    console. log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        Document.getElementById("current_hight").innerHTML = block_image_height;


    }
    if(e.shiftKey && keyPressed == '77')
{
console.log("m and shift pressed together");
block_image_width = block_image_width - 10;
block_image_height = block_image_height -10;
document.getElementById("current_width").innerHTML = block_image_width;
}

if(keyPressed == '38')
{
up();
console.log("up");
}
if(keypressed == '40')
{
    down();
    console.log("down");
    
}
if(keypressed=='37')
{
    left();
    console.log("left");
}
if (keyPressed=='39')
{
    right();
    console.log('right');

}
if (keyPressed=='87')
{
    new_image('https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view');
    console.log('g');

}
if (keyPressed=='71')
{
    new_image('');
    console.log('w');

}
if (keyPressed=='76')
{
    new_image('');
    console.log('l');

}
if (keyPressed=='84')
{
    new_image();
    console.log('t');

}
if (keyPressed=='82')
{
    new_image();
    console.log('r');

}
if (keyPressed=='89')
{
    new_image();
    console.log('y');
}