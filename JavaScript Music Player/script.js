// Declare variables by using DOM
let trackImg = document.querySelector(".trackImg");
let songTitle = document.querySelector(".songTitle");
let trackArtist = document.querySelector(".trackArtist");
let audioTag = document.querySelector(".audioTag");
let playBtn = document.querySelector(".playBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let totalDisplay = document.querySelector(".totalDisplay");
let currentDisplay = document.querySelector(".currentDisplay");
let currentTime = document.querySelector(".currentTime");
let count = 0;
let isPlay = false;

// Create Array
const songList = [
  {
    name: "Nyi Lay",
    artist: "Myo Gyi",
    image: "./images/img1.jpg",
    path: "./musics/music1.mp3",
  },
  {
    name: "Ta Yat Tot Ngo Par",
    artist: "Aye Myat Nandar",
    image: "./images/img2.jpg",
    path: "./musics/music2.mp3",
  },
  {
    name: "Tar Gyi Doh Aye Say",
    artist: "Raymon & Han Nay Tar",
    image: "./images/img3.jpg",
    path: "./musics/music3.mp3",
  },
];

// Start function
function start() {
  trackImg.style.backgroundImage = "url(" + songList[count].image + ")";
  songTitle.textContent = songList[count].name;
  trackArtist.textContent = songList[count].artist;
  audioTag.src = songList[count].path;
}

// Play Function
function playSong() {
  audioTag.play();
  isPlay = true;
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
}

// Pause Function
function pauseSong() {
  audioTag.pause();
  isPlay = false;
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
}

// Next Function
function next() {
  if (count == 2) {
    return;
  }
  if (count < 3) {
    count++;
    start();
    if (isPlay) {
      audioTag.play();
    }
  }
  randomBgColor();
}

// Previous
function previous() {
  if (count > 0) {
    count--;
    start();
    if (isPlay) {
      audioTag.play();
    }
  }
  randomBgColor();
}

// Display Song Time
audioTag.addEventListener("loadeddata", function () {
  let totalDuration = Math.floor(audioTag.duration);
  let minutes = Math.floor(totalDuration / 60);
  let seconds = Math.floor(totalDuration % 60);
  totalDisplay.innerHTML =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  audioTag.addEventListener("timeupdate", function () {
    let currentDuration = audioTag.currentTime;
    let minutes = Math.floor(currentDuration / 60);
    let seconds = Math.floor(currentDuration % 60);
    currentDisplay.innerHTML =
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
      currentTime.style.width = (currentDuration / totalDuration) * 400 + "px";
  });
});

// Radom Background Color Function

function randomBgColor() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
}

// Call Start Function
start();
