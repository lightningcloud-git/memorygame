let level = 0;

function MemoryGame() {

level = 5;


nextSequence();


}

function nextSequence() {
    level++;
    
for (let i = 0; i < level; i++) {
var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber)
    randomNumber = randomNumber + 1;
    console.log(randomNumber)
    
    setTimeout(function() {
  	flash(randomNumber);

}, 500);
    
    }
    
    
}

function flash(randomNumber){

var block = "block"+randomNumber;
document.getElementById(block).style.backgroundColor = "Green";

setTimeout(function() {
  	document.getElementById(block).style.backgroundColor = "Grey";

}, 500);

}


function changeBack(block) {
	document.getElementById(block).style.backgroundColor = "Red";
}

function backToGrey(block) {
	document.getElementById(block).style.backgroundColor = "Grey";
}
