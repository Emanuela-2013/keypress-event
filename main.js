 canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
	
}
window.addEventListener("keydown" ,my_keydown);

function my_keydown(e) {
     keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
      
		alphabetkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED AN ALPHABET KEY";
        console.log("alphabet key");

    } else if (keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key";
        console.log("number key");
    } 
	
 else if (keyPressed >= 37 && keyPressed <= 40) {
	arrowkey();
	document.getElementById("d1").innerHTML = "You pressed an arrow key";
	console.log("arrow key");
} 

if ((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27)
) {
	

      
	specialkey();
	document.getElementById("d1").innerHTML = "YOU PRESSED A SPECIAL KEY";
	console.log("special key");
}
	else {
        otherkey();
    }
}

function alphabetkey() {
    document.getElementById("d1").innerHTML = "You pressed an Alphabet key";
    console.log("alphabet key");
	var img_image = "Alpkey.png";
	document.getElementById("Alpkey.png").src = img_image;
    add(); 
}

function numberkey() {
    
	document.getElementById("d1").innerHTML = "You pressed a number key";
    console.log("number key");
	var img_image = "numkey.png";
	document.getElementById("num.png").src = img_image;
	add(); 
}

function arrowkey() {
    document.getElementById("d1").innerHTML="you pressed an arrow key";
	console.log("arrow key");
	var img_image = "Arrkey.png";
	document.getElementById("Arrkey.png").src = img_image;
	add(); 
}


function specialkey() {
	document.getElementById("d1").innerHTML="you pressed a speical key";
	console.log("special key");
	var img_image = "spkey.png";
	document.getElementById("spkey.png").src = img_image;
	add(); 
}

function otherkey() {
    document.getElementById("d1").innerHTML="you pressed an otherkey";
	console.log("other key");
	var img_image = "otherkey.png";
	document.getElementById("otherkey.png").src = img_image;
    add(); 
}