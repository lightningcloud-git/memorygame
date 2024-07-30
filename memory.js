
function MemoryGame() {

var randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber)
randomNumber = randomNumber + 1;
flash(randomNumber);
const flashingorder= [];
flashingorder=randomNumber+1;


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
