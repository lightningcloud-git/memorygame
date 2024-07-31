let level = 0;

function MemoryGame() {

level = 0;
start();


}

 async function start() {

await nextSequence();
var matchValue = match();
if (matchValue)
  { 
     if(level < 5) {
     await start();
     }
     
  }

}

 function flash(randomNumber) {
      return new Promise((resolve, reject) => {
          console.log("flash");
var block = "block"+randomNumber;
document.getElementById(block).style.backgroundColor = "Green";

setTimeout(function() {
  	document.getElementById(block).style.backgroundColor = "Grey";
    resolve(randomNumber);


}, 500);
      })
    }


async function nextSequence() {
    
    level++;
    console.log("level "+level)
		for (let i = 0; i < level; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    randomNumber = randomNumber + 1;
    console.log("block "+randomNumber);
    const result = await flash(randomNumber)
    console.log(result)
    
    }
        
       
    }



function match(){

return true;

}


function changeBack(block) {
	document.getElementById(block).style.backgroundColor = "Red";
}

function backToGrey(block) {
	document.getElementById(block).style.backgroundColor = "Grey";
}
