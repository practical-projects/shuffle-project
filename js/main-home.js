// new-album start
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('songName');

const songs = ['man viskas Kanarai.mp3', 'without Me.mp3', 'calm Down Long ,Tik Tik, Lyrics.mp3', 'melody.mp3'];

let songIndex = 2;

// Dainu pavadinimai didziosiomis
function getSongTitle(song) {
   return song.charAt(0).toUpperCase() + song.slice(1);
}

// Ikeliamas dainos pavadinimas kaip parametras:
function loadSong(song) {
   title.innerText = getSongTitle(song);
   audio.src = `../img/audio/${song}`;
};

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
   const progressPercent = (currentTime / duration)
   progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   audio.currentTime = (clickX / width) * duration;
}

// event Listeners:
playBtn.addEventListener('click', () => {
   const isPlaying = musicContainer.classList.contains("play");
   isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

loadSong(songs[songIndex]);

// new-album end