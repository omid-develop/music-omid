const playBtn = document.getElementById("playBtn");
const playerBar = document.getElementById("playerBar");
const audioPlayer = document.getElementById("audioPlayer");
const togglePlay = document.getElementById("togglePlay");
const playIcon = document.getElementById("playIcon");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const timeDisplay = document.getElementById("timeDisplay");

// پیش‌فرض مخفی
playerBar.classList.add("hidden");

// وقتی روی دکمه پلی توی بنر کلیک شد
playBtn.addEventListener("click", () => {
    playerBar.classList.remove("hidden");
    audioPlayer.play();
    playIcon.classList.replace("fa-play-circle", "fa-pause-circle");
});

// کنترل پخش/توقف
togglePlay.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.classList.replace("fa-play-circle", "fa-pause-circle");
  } else {
    audioPlayer.pause();
    playIcon.classList.replace("fa-pause-circle", "fa-play-circle");
  }
});


// بروزرسانی زمان و پروگرس
audioPlayer.addEventListener("timeupdate", () => {
  const current = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  progress.value = (current / duration) * 100 || 0;

  timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
});

// کنترل اسلایدر
progress.addEventListener("input", () => {
  audioPlayer.currentTime = (progress.value / 100) * audioPlayer.duration;
});

// کنترل صدا
volume.addEventListener("input", () => {
  audioPlayer.volume = volume.value / 100;
});

// فرمت زمان
function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}