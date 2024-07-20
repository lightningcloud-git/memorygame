<html>
<body>
<head>
<style>
}

.button {
 
  background-color: green; 
  border: none;
  color: green;
  text-align: center;
  text-decoration: none;
  display: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button1 {padding: 50px 50px;}
.button2 {padding: 50px 50px;}
.button3 {padding: 50px 50px;}
.button4 {padding: 50px 50px;}

</style>
</head>
<body>

<h2>memory Game </h2>

<p>Click on the buttons in the same order as it was highlighted </p>

<button class="button button1" ;/>
<button class="button button2" ;/>
<br>
<button class="button button3" ></button>
<button class="button button4" ></button>
</body>
</body>

function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }

}
