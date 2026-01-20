let audio = document.querySelector("audio");
let playbtn = document.getElementById("play-btn");
let prvbtn = document.getElementById("prv-btn");
let nxtbtn = document.getElementById("nxt-btn");
let duration = document.getElementById("duration");
let current = document.getElementById("current");
let progress = document.getElementById("progress");
let effect = document.getElementById("image-box");

let songname = document.getElementById("songName");
let Artist = document.getElementById("Artist");
let bgimage = document.getElementById("img").style;

console.log(playbtn);
console.log(prvbtn);
console.log(nxtbtn);
console.log(audio);
console.log(duration);
console.log(current);
console.log(progress);
console.log(effect);
console.log(bgimage);

playbtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playbtn.textContent = "⏸";
    effect.style.animationPlayState = "running";
  } else {
    audio.pause();
    playbtn.textContent = "▶";
    effect.style.animationPlayState = "paused";
  }
});

const songs = [
  {
    title: "Shape Of You",
    name: "Ed Sheeran",
    url: "Music/Ed Sheeran Shape Of You.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBcHnkbQmOIp93z5vk9ihLtzPTml2FOGMcg&s",
  },
  {
    title: "Shaiba",
    name: "Aditya Rikhari",
    url: "Music/sahiba.mp3",
    image: "https://i.scdn.co/image/ab67616d0000b2730a47bbe7141fdfe0eb2cdba7",
  },
  {
    title: "Perfect",
    name: "Ed Sheeran",
    url: "Music/Perfect.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmmXvm71GSv6s-W4zinmKpAzfeiRZ6JBRMQ&s",
  },
  {
    title: "Die With A Smile",
    name: "Bruno Mars",
    url: "Music/Die_With_A_Smile.mp3",
    image:
      "https://www.billboard.com/wp-content/uploads/2024/08/Lady-Gaga-Bruno-Mars-Die-With-A-Smile-screenshot-billboard-1548.jpg",
  },
];

// Load song
let currentindex = 0;
function loadsong(index) {
  audio.src = songs[index].url;
  songname.textContent = songs[index].title;
  Artist.textContent = songs[index].name;
  bgimage.backgroundImage = `url("${songs[index].image}")`;

  audio.load();
  playbtn.textContent = "▶";
  effect.style.animationPlayState = "paused";
}

loadsong(currentindex); // default song

// Next btn

nxtbtn.addEventListener("click", () => {
  currentindex = (currentindex + 1) % songs.length;
  loadsong(currentindex);

  audio.play();
  playbtn.textContent = "⏸";
  effect.style.animationPlayState = "running";
});

// Previous Button

prvbtn.addEventListener("click", () => {
  currentindex = (currentindex - 1) % songs.length;
  loadsong(currentindex);

  audio.play();
  playbtn.textContent = "⏸";
  effect.style.animationPlayState = "running";
});

// auto run after end
audio.addEventListener("ended",()=>{

currentindex = (currentindex + 1) % songs.length;
loadsong(currentindex);
audio.play();
playbtn.textContent="⏸";
effect.style.animationPlayState="running";

})

// set songs in local storage
localStorage.setItem("songs", JSON.stringify(songs));

//get songs from local storage

let song = JSON.parse(localStorage.getItem("songs"));
console.log(song);

// load duration
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

//update Progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
  current.textContent = formatTime(audio.currentTime);
  localStorage.setItem("musicTime", audio.currentTime);
});

// Seek audio

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

window.addEventListener("load", () => {
  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) {
    audio.currentTime = savedTime;
  }
});

// Format time mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${secs}`;
}

// Mute and Shuffle

// shuf = document.getElementById("shuffle");
mute = document.getElementById("mute");
// console.log(shuf);
console.log(mute);

mute.addEventListener("click", () => {
  audio.muted = !audio.muted; // It make toggle like
  mute.textContent = audio.muted ? "🔇" : "🔊";
});
