var bgm = document.getElementById("bgm");
var player = document.getElementById("bgvideo");
var message = document.getElementById("message");
var toggleMute = function () {
  bgm.muted = bgm.muted === true ? false : true;
  bgm.play();
  if (bgm.muted) {
    document.getElementById("mute").innerHTML =
      '<svg class="icon icon-volume-mute2"><use xlink:href="#icon-volume-mute2"></use></svg>';
  } else {
    document.getElementById("mute").innerHTML =
      '<svg class="icon icon-volume-high"><use xlink:href="#icon-volume-high"></use></svg>';
  }
};
document.getElementById("mute").addEventListener("click", toggleMute);
document.getElementById("message").addEventListener("click", function () {
  document.getElementById("message").style.opacity = 0;
});

player.addEventListener("timeupdate", function (e) {
  if (player.currentTime > 49) player.currentTime = 0;
});

var startTimeUTC = new Date(Date.UTC(2024, 0, 1, 0, 0));
var finishTimeUTC = new Date(Date.UTC(2024, 0, 1, 0, 0));
if (navigator.language.toLowerCase().startsWith("ja") === 0) {
  message.innerHTML =
    "<strong>メンテナンス中</strong><br>ただいまメンテナンス中です。" +
    finishTimeUTC.toLocaleString() +
    " に終了予定です。ご迷惑おかけしておりますが、メンテナンス終了まで今しばらく、お待ちください。";
} else if (navigator.language.toLowerCase().startsWith("zh") === 0) {
  message.innerHTML =
    "<strong>伺服器維護</strong><br> 由於系統維修，目前伺服器暫停服務。伺服器預計會在 " +
    finishTimeUTC.toLocaleString() +
    " 左右恢復服務。不便之處 敬請原諒。";
} else {
  message.innerHTML =
    "<strong>Scheduled Maintenance</strong><br>Due to a file system repair, the server is under maintenance for the moment. It should be back online at around " +
    finishTimeUTC.toLocaleString() +
    ". Sorry for the inconvenience.";
}
