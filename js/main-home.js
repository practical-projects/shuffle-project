import trackList from "./data/music.js";
// new-album start
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const prevSong = document.getElementById('prevSong');
const nextSong = document.getElementById('nextSong');
const songName = document.getElementById('songName')
let count = 0;

// Play and pause song
playPauseBtn.addEventListener('click', () => {
   if (count == 0) {
      count = 1;
      audio.play();
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
      songName.innerHTML = "Ran-D & Endymion ft. LePrince - Run From Reality";
   } else {
      count = 0;
      audio.pause();
      playPauseBtn.innerHTML = "<i class='fa-solid fa-pause'></i>";
   }
})

// new-album end



