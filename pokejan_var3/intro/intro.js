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
  document.onkeydown = function() {
    location.href = "../demo/demo.html";
  };
  document.getElementById("textBox").style.display = "none";
  await sleep(3000);
  document.getElementById("textBox").style.display = "block";
  document.getElementById("text").innerHTML =
    "あ、やせいのピカチュウがとびだしてきた！▼";
}
