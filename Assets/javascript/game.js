



var img = new Image(); //Creates an HTMLImageElement
img.src = "Assets/images/hangmanSprite.jpg";
img.addEventListener("load", function() {
    ctx.drawImage(img, 0, 0);
});