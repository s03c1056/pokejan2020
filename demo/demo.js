onload = function() {
  start();
};
function sleep(msec) {
  /////////////////////sleep関数をつくった
  return new Promise(function(resolve) {
    ///await sleep(5000);
    setTimeout(function() {
      /////////////////↑こう書けば5秒処理を待機
      resolve();
    }, msec);
  });
}
async function start() {
  document.getElementById("textBox").style.display = "none";
  await sleep(3000);
  document.getElementById("textBox").style.display = "block";
  document.getElementById("text").innerHTML =
    "▼！たきてしだびとが任担のいせや、あ";
  await sleep(3000);
  document.getElementById("text").innerHTML = "▼！ッーぁあ？かのんてっビビ";
  await sleep(3000);
  document.getElementById("cut").style.display = "block";
  await sleep(1000);
  document.getElementById("player").style.display = "none";
  document.getElementById("menter").style.display = "none";
  await sleep(3000);
  location.href = "../battle/yuuki.html";
}
