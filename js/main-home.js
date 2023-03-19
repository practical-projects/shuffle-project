// clock start
import { clock } from "./components/clock.js";
import { clockData } from "./data/clockData.js";
// clock end

new clock("#clock", clockData);

// new-album start
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

const songs = ['2Kvėpavimas feat. Adrina - Švyturys tarp vandenynų', '2Kvėpavimas - Panamera', '2Kvėpavimas - Vasarinė mergaitė', '2Kvėpavimas - Leidžiu tau viską', '2Kvėpavimas - Man viskas Kanarai'];
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
   title.innerText = song;
   audio.src = `../img/music/${song}.mp3`;
}

function playSong() {
   musicContainer.classList.add("play");
   playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
   playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
   audio.play();
}

function pauseSong() {
   musicContainer.classList.remove("play");
   playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
   playBtn.querySelector("i.fa-solid").classList.add("fa-play");
   audio.pause();
}

function prevSong() {
   songIndex--;

   if (songIndex < 0) songIndex = songs.length - 1;
   loadSong(songs[songIndex]);
   playSong();
}

function nextSong() {
   songIndex++;

   if (songIndex > songs.length - 1) songIndex = 0;
   loadSong(songs[songIndex]);
   playSong();
}

function updateProgress(e) {
   const { duration, currentTime } = e.srcElement;
   const progressPercent = (currentTime / duration) * 100;
   progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
   const isPlaying = musicContainer.classList.contains("play");
   isPlaying ? pauseSong() : playSong();
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);

loadSong(songs[songIndex]);

// new-album end

