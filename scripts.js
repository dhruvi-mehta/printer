const GRADIENT_MAP = [
	{
		letters: ["q", "w", "e"],
		color: "#A9DBC7"
	},
	{
		letters: ["r", "t", "y"],
		color: "#FEDBB2"
		
	},
	{
		letters: ["u", "i", "o","p"],
		color: "#8C9DCF"
	},
	{
		letters: ["a", "s", "d"],
		color: "#E8ACBD"
	},
	{
		letters: ["f", "g", "h"],
		color: "#89C5D3"
	},
	{
		letters: ["j", "k", "l"],
		color: "#DDFEDD"
	},
	{
		letters: ["z", "s", "c"],
		color: "#E1CCE8"
	},
	{
		letters: ["v", "b","n","m"],
		color: "#6AA3CF"
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
