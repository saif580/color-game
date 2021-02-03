// var colors=[
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numSquares = 6;
var colors=generaterandomcolors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn1=document.querySelector("#easybtn");
var hardbtn1=document.querySelector("#hardbtn");

easybtn1.addEventListener("click",function(){
	hardbtn1.classList.remove("selected");
	easybtn1.classList.add("selected");
	numSquares=3;
	colors=generaterandomcolors(numSquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
		squares[i].style.backgroundColor=colors[i];
		} else {
			squares[i].style.display="none";
		}
	}
});

hardbtn1.addEventListener("click",function(){
	hardbtn1.classList.add("selected");
	easybtn1.classList.remove("selected");
	numSquares=6
	colors=generaterandomcolors(numSquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.backgroundColor="block";
	}
})


resetbutton.addEventListener("click",function(){
	colors=generaterandomcolors(numSquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	messagedisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++) {
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function() {
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor === pickedcolor) {
			messagedisplay.textContent="CORRECT";
			changecolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			resetbutton.textContent="Play Again?"; 
		} else {
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="TRY AGAIN";
		}
	});
}

function changecolor(color) {
	for(var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolors(numSquares) {
	var arr=[];
	for(var i=0;i<numSquares;i++) {
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor() {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

