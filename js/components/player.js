let song = document.getElementById('song');
let play = document.getElementById('play-icon');

export function playPause() {
   if (play.classList.contains("fa-pause")) {
      song.pause();
      play.classList.remove("fa-pause");
      play.classList.add("fa-play");
   }
   else {
      song.play();
      play.classList.add("fa-pause");
      play.classList.remove("fa-play");
   }
};





