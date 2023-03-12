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
      playPauseBtn.innerHTML = "&#9208;";
      songName.innerHTML = "Ran-D & Endymion ft. LePrince - Run From Reality";
   } else {
      count = 0;
      audio.pause();
      playPauseBtn.innerHTML = "&#9658;";
   }
})

// new-album end



