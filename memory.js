function MemoryGame() {

var randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber)
randomNumber = randomNumber + 1;
flash(randomNumber);


}

function flash(randomNumber){

var block = "block"+randomNumber;
document.getElementById(block).style.backgroundColor = "Green";


}



