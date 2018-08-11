'user strict';

function validate() {
  var code = document.getElementById("nric").value;
  if (code == "") {
    alert("你沒有輸入任何資訊。");
  } else if (!isNaN(code)) {
    alert("身份證可不是純數字而已哦！");
  } else if (code.length != 10) {
    alert("你的資料長度有誤，再確認一下!");
  } else {
    document.getElementById("result").innerHTML = '通過驗證';
  }
}