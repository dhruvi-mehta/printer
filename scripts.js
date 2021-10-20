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


let canvas = document.querySelector("#canvas");

canvas.addEventListener("click", function (event) {

  console.log("clicking the canvas"); 
  let art = new Array('images/PATTERNS-01.png',
                      'images/PATTERNS-02.png',
                      'images/PATTERNS-03.png', 
                      'images/PATTERNS-04.png',
                      'images/PATTERNS-05.png',
                      'images/PATTERNS-06.png',
					  'images/PATTERNS-07.png', 
					  'images/PATTERNS-08.png', 
					  'images/PATTERNS-09.png', 
					  'images/PATTERNS-10.png', 

                		); 

  let currentArt = art[Math.floor(Math.random() * art.length)];
  var divsize = 100;

  var posx = (Math.random() * window.innerWidth - divsize).toFixed();
  var posy = (Math.random() * window.innerHeight - divsize).toFixed();

  imgArray = new Image();
  imgArray.classList.add("imgArray");
  imgArray.src = currentArt;
  
//   imgArray.style.left = posx + "px";
//   imgArray.style.top = posy + "px";
  imgArray.style.position = "fixed";
  imgArray.style.width = Math.floor((Math.random()*180)+2000)+"px";
  canvas.appendChild(imgArray);

  let shuffleButton = document.querySelector(".shuffle");
  shuffleButton.addEventListener("click", function (event) {
    console.log("clicking the suffle button");
  
    Array.from(document.querySelectorAll('.imgArray')).forEach(function(img) {
        
      var posx = (Math.random() * window.innerWidth - divsize).toFixed();
      var posy = (Math.random() * window.innerHeight - divsize).toFixed();
    
      img.style.left = posx + "px"; 
      img.style.top = posy + "px";
  
  })

   });
})
