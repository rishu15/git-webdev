console.log("Hello world");
var button = document.querySelector('button');
var box = document.getElementById('changeColour');

function colourChange() {
 //   box.style.background = "blue";
 if(box.style.background == "blue") {
    box.style.background = "aquamarine";
 }
 else{
 box.style.background = "blue";
 }
}