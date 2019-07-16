//  1 ～ 30 までの乱数生成 //
const random = () => {
  return Math.floor(Math.random() * 30 + 1);
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

// 勝った時の処理 //
async function win(n) {
  if (n == 1) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」日０８１約活生婚新「殺必のメカニゼ<br>！たった当に所急は撃攻のメカニゼ</p>";
    pc_01_hp.value -= 1500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 11) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」波ニタめか「殺必のメカニゼ<br>！たった当に所急は撃攻のメカニゼ</p>";
    pc_01_hp.value -= 1500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 21) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」勤出日の海「殺必のメカニゼ<br>！たった当に所急は撃攻のメカニゼ</p>";
    pc_01_hp.value -= 1500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 2 || n == 3) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」日０８１約活生婚新「殺必のメカニゼ<br>！たし功成もに復回力体はメカニゼに時同と撃攻</p>";
    pc_01_hp.value -= 500;
    player_hp.value += 1000;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 12 || n == 13) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」波ニタめか「殺必のメカニゼ<br>！たし功成もに復回力体はメカニゼに時同と撃攻</p>";
    pc_01_hp.value -= 500;
    player_hp.value += 1000;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 22 || n == 23) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」勤出日の海「殺必のメカニゼ<br>！たし功成もに復回力体はメカニゼに時同と撃攻</p>";
    pc_01_hp.value -= 500;
    player_hp.value += 1000;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 4 && n <= 8) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」日０８１約活生婚新「殺必のメカニゼ</p>";
    pc_01_hp.value -= 500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 14 && n <= 18) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」波ニタめか「殺必のメカニゼ</p>";
    pc_01_hp.value -= 500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 24 && n <= 28) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」勤出日の海「殺必のメカニゼ</p>";
    pc_01_hp.value -= 500;
    await sleep(3000);
    if (pc_01_hp.value == 0) {
      text.innerHTML = "<p>！たし利勝にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../demo2/demo.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n == 9 || n == 10) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」日０８１約活生婚新「殺必のメカニゼ<br>・・・・・<br>！たっましてれらけ避は撃攻のメカニゼ</p>";
    await sleep(3000);
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
  } else if (n == 19 || n == 20) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」波ニタめか「殺必のメカニゼ<br>・・・・・<br>！たっましてれらけ避は撃攻のメカニゼ</p>";
    await sleep(3000);
      text.innerHTML = "<p>次の技を選んでください</p>";
  } else if (n == 29 || n == 30) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がメカニゼ<br>！！！」勤出日の海「殺必のメカニゼ<br>・・・・・<br>！たっましてれらけ避は撃攻のメカニゼ</p>";
    await sleep(3000);
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
  }
}

// あいこの時の処理（あいこが出ない処理） //
function draw(i) {
  // 0 or 1 の乱数で勝ち負けを判定
  const x = Math.floor(Math.random() * 2);
  // 1 ～ 10 の乱数を引数にして勝ち負けそれぞれの処理を実行
  if (x == 0) {
    if (i == 1) {
      const n = Math.floor(Math.random() * 10 + 11);
      win(n);
    } else if (i == 2) {
      const n = Math.floor(Math.random() * 10 + 21);
      win(n);
    } else if (i == 3) {
      const n = Math.floor(Math.random() * 10 + 1);
      win(n);
    }
  } else {
    const n = Math.floor(Math.random() * 10 + 1);
    lose_01(n);
  }
}

// 負けた時の処理（ゆうきちゃん戦） //
async function lose_01(n) {
  if (n >= 1 && n <= 6) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」書白子女プッアトータス「殺必のんゃちきうゆ</p>";
    player_hp.value -= 500;
    await sleep(3000);
    if (player_hp.value == 0) {
      text.innerHTML = "<p>！たっましてけ負にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../intro/intro.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 11 && n <= 16) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」スラグンサ手派カデ「殺必のんゃちきうゆ</p>";
    player_hp.value -= 500;
    await sleep(3000);
    if (player_hp.value == 0) {
      text.innerHTML = "<p>！たっましてけ負にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../intro/intro.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 21 && n <= 26) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」し推ーミト「殺必のんゃちきうゆ</p>";
    player_hp.value -= 500;
    await sleep(3000);
    if (player_hp.value == 0) {
      text.innerHTML = "<p>！たっましてけ負にい戦はメカニゼ</p>";
      await sleep(3000);
      location.href = "../intro/intro.html";
    } else {
      text.innerHTML = "<p>いさだくでん選を技の次</p>";
    }
  } else if (n >= 7 && n <= 10) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」書白子女プッアトータス「殺必のんゃちきうゆ<br>！たし避回を撃攻のんゃちきうゆはメカニゼしかし</p>";
    await sleep(3000);
    text.innerHTML = "<p>いさだくでん選を技の次</p>";
  } else if (n >= 17 && n <= 20) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」スラグンサ手派カデ「殺必のんゃちきうゆ<br>！たし避回を撃攻のんゃちきうゆはメカニゼしかし</p>";
    await sleep(3000);
    text.innerHTML = "<p>いさだくでん選を技の次</p>";
  } else if (n >= 27 && n <= 30) {
    text.innerHTML =
      "<p>！たれ入に手をスンャチの撃攻がんゃちきうゆ<br>！！！」し推ーミト「殺必のんゃちきうゆ<br>！たし避回を撃攻のんゃちきうゆはメカニゼしかし</p>";
    await sleep(3000);
    text.innerHTML = "<p>いさだくでん選を技の次</p>";
  }
}
