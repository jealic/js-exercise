"user strict"
var state = true;
function switchLight(){
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

function countDownTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(timeset);
  }
  document.getElementById("timer").innerHTML = timeLeft;
}

var timeset = 0;
function setCount() {
  var time = document.getElementById("set-count").value;
  if (time == "") {
    alert ("你還沒設定秒數哦！")
  } else {
    time = parseInt(time);
    if (isNaN(time)) {
    alert("只能輸入整數數字哦！");
    }
    document.getElementById("timer").innerHTML = time;
    document.getElementById("set-count").value = "";
    timeLeft = time;
    timeset = setInterval(countDownTimer, 1000);
  }
}

