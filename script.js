let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let clickedColor;
let game = {}

game.init = function(){
setupModeButtons();
setupSquares();
reset();
}

game.init();

function modoOscuro() {
	document.getElementsByClassName('container')[0].classList.toggle('modo-oscuro');
	document.getElementsByClassName('dark-mode-btn')[0].classList.toggle('modo-oscuro1');
	document.querySelector('h1').classList.toggle('modo-oscuro');
	document.getElementsByClassName('hamburger')[0].classList.toggle('modo-oscuro');
	document.getElementsByClassName('active')[0].classList.toggle('modo-oscuro');
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Fácil" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "¡Lo adivinaste 🎉!";
				resetButton.textContent = "Jugar de nuevo";
				changeColors(pickedColor);
			} else {
				this.style.backgroundColor = "steelblue";
				messageDisplay.textContent = "¡Intentalo nuevamente! 🔁";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Nuevos Colores"
	messageDisplay.textContent = "Selecciona un color 😊";
	// Cambiar colores de los cuadrados
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	// Hacer loop a través de todos los cuadrados
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}