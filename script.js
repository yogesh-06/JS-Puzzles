console.log("Spotify-Listen Everything");

let songIndex = 0;
let audioElement = new Audio("songs/dilBechara.mp3");
let masterPlay = document.getElementById("masterPlay");
let progress = document.getElementById("progress");
let opacity = document.getElementById("opacity");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "dil-Bechara",
    filePath: "songs/dilBechara.mp3",
    coverPath: "img/dilBechara.png",
  },
  {
    songName: "o-Barishein",
    filePath: "songs/oBarish.mp3",
    coverPath: "img/oBarish.png",
  },
  {
    songName: "smack-That",
    filePath: "songs/smackThat.mp3",
    coverPath: "img/smackThat.png",
  },
  {
    songName: "sun-Sathiya",
    filePath: "songs/sunSathiya.mp3",
    coverPath: "img/sunSathiya.png",
  },
  {
    songName: "tera-Rasta",
    filePath: "songs/teraRasta.mp3",
    coverPath: "img/teraRasta.png",
  },
  {
    songName: "tum-Sehi",
    filePath: "songs/tumSehi.mp3",
    coverPath: "img/tumSehi.png",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    opacity.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    opacity.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  playingProgress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(playingProgress);
  progress.value = playingProgress;
});

progress.addEventListener("change", () => {
  audioElement.currentTime = (progress.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      e.target.classList.remove("fa-pause-circle");
      element.target.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
    });
  }
);
