let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let img = new Image();
img.src = 'IMG_5283.png'; // use a picture of a cookie

let score = 0;
let scoreText = document.getElementById("score");
let button = document.getElementById("btnClick");

img.onload = function() {
  ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
};

button.onclick = function() {
  score++;
  scoreText.innerHTML = "Cookies: " + score;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
};
