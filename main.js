let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let img = new Image();
img.src = 'IMG_5283.png'; // use a picture of a cookie

let score = 0;
let scoreText = document.getElementById("score");

img.onload = function() {
  drawCookie();
};

canvas.addEventListener('click', function(event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  let cookieX = canvas.width / 2 - img.width / 2;
  let cookieY = canvas.height / 2 - img.height / 2;

  if(y > cookieY && y < cookieY + img.height && x > cookieX && x < cookieX + img.width) {
    score++;
    scoreText.innerHTML = "Cookies: " + score;
  }
});

function drawCookie() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
}
