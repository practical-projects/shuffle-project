// new-album start
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
let count = 0;

playPauseBtn.addEventListener('click', () => {
   if (count == 0) {
      count = 1;
      audio.play();
      playPauseBtn.innerHTML = "&#9208;";
   } else {
      count = 0;
      audio.pause();
      playPauseBtn.innerHTML = "&#9658;";
   }
})

// new-album end



