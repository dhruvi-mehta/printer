const GRADIENT_MAP = [
	{
		letters: ["q", "w", "e"],
		color: "#ffd973"
		// src = 'mand-02.svg'
	},
	{
		letters: ["r", "t", "y"],
		color: "#f08080"
	},
	{
		letters: ["u", "i", "o","p"],
		color: "#e13759"
	},
	{
		letters: ["a", "s", "d"],
		color: "#fcbdc7"
	},
	{
		letters: ["f", "g", "h"],
		color: "#c9e9fd"
	},
	{
		letters: ["j", "k", "l"],
		color: "#2f4599"
	},
	{
		letters: ["z", "s", "c"],
		color: "#cc76cc"
	},
	{
		letters: ["v", "b","n","m"],
		color: "#8b008b"
	},

];

	

document.getElementById("word").addEventListener("input", function (event) {
	document.body.style.background = wordToGradient(this.value);
	// document.body.style.backgroundSize = "600% 600%";
});

function wordToGradient(word) {
	// return empty string if textbox does not include letters
	if (!word.match(/[a-zA-Z]+/)) {
		return "";
	}

	// if textbox value is just a single letter, return a solid color
	if (word.length === 1) {
		return GRADIENT_MAP.find((i) => i.letters.includes(word)).color;
	}

	const splitWord = word
		.toLowerCase()
		.split("")
		.filter((letter) => letter.match(/[a-zA-Z]+/));
	const colors = splitWord.map((letter) => {
		return GRADIENT_MAP.find((i) => i.letters.includes(letter)).color;
	});
	return `linear-gradient(90deg, ${colors.join(", ")})`;
}


	// document.onmousemove = animatedCircles;

	// 		const colors = ['#00CED1', '#8B008B', '#FF00FF'];

	// 		function animatedCircles(event) {
	// 			let circle = document.createElement('div');
	// 			circle.setAttribute('class', 'circle');
	// 			document.body.appendChild(circle);

	// 			circle.style.left = event.clientX + 'px';
	// 			circle.style.top = event.clientY + 'px';
	// 			circle.style.zIndex = "1";

	// 			let color = colors[Math.floor(Math.random() * colors.length)];
	// 			circle.style.borderColor = color;

	// 			circle.style.transition = 'all 0.5s linear 0s';

	// 			circle.style.left = circle.offsetLeft - 20 + 'px';
	// 			circle.style.top = circle.offsetTop - 20 + 'px';

	// 			circle.style.width = '50px';
	// 			circle.style.height = '50px';
	// 			circle.style.borderWidth = '5px';
	// 			circle.style.opacity = 0;
	// 		}

 // function showOrHideDiv() {
 //      var v = document.getElementById("showOrHide");
 //      if (v.style.display === "none") {
 //         v.style.display = "block";
 //      } else {
 //         v.style.display = "none";
 //      }
 //   }